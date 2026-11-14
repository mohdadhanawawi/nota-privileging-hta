#!/usr/bin/env python3
"""Jana data/procedures.js daripada nota-privileging-hta-2026.md.

Guna (dari root repo):  python3 tools/md_to_data.py
Tiada pakej luar diperlukan (Python 3.8+ sahaja).

Skrip ini hanya MENUKAR format. Ia tidak mengubah teks klinikal.
"""
import html
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse, parse_qs

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "nota-privileging-hta-2026.md"
OUT = ROOT / "data" / "procedures.js"

DOMAINS = [
    # id, nama pendek, julat AP, prefix heading dalam markdown
    ("cardio", "Cardiorespiratory", (1, 8), "Physiotherapy in Cardiorespiratory"),
    ("msk", "Musculoskeletal", (9, 12), "Physiotherapy in Musculoskeletal"),
    ("neuro", "Neurology", (13, 13), "Physiotherapy in Neurology"),
    ("paeds-cardio", "Paediatrics Cardiorespiratory", (14, 20), "Physiotherapy in Paediatrics (Cardiorespiratory)"),
    ("paeds-neuro", "Paediatrics Neuromusculoskeletal", (21, 24), "Physiotherapy in Paediatrics (Neuromusculoskeletal)"),
]

TARGET_OP = {"O": 1, "A": None, "P": 4}       # AP 1-8, 9, 14-20
TARGET_OAP = {"O": 1, "A": 1, "P": 3}         # AP 10-13, 21-24


def min_target(no):
    if 10 <= no <= 13 or 21 <= no <= 24:
        return dict(TARGET_OAP)
    return dict(TARGET_OP)


def inline(md):
    """Markdown inline -> HTML ringkas (bold, italic, pautan, escape)."""
    s = md.replace("\\~", "~")
    s = html.escape(s, quote=False)
    s = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)",
               lambda m: '<a href="%s" target="_blank" rel="noopener">%s</a>' % (html.escape(m.group(2)), m.group(1)), s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", s)
    return s


def youtube_id(url):
    u = urlparse(url)
    host = u.netloc.lower().replace("www.", "").replace("m.", "")
    vid = None
    if host == "youtu.be":
        vid = u.path.strip("/").split("/")[0]
    elif host.endswith("youtube.com") or host.endswith("youtube-nocookie.com"):
        if u.path == "/watch":
            vid = parse_qs(u.query).get("v", [None])[0]
        else:
            m = re.match(r"^/(?:embed|shorts|live|v)/([^/?#]+)", u.path)
            if m:
                vid = m.group(1)
    if not vid or not re.fullmatch(r"[A-Za-z0-9_-]{11}", vid):
        raise ValueError("youtubeId tak sah untuk URL: %s" % url)
    return vid


LIST_RE = re.compile(r"^(\s*)(?:-|\d+\.)\s+(.*)$")


def parse_list(lines):
    """Senarai (bersarang 1 aras). Item = string HTML atau {html, sub:[...]}."""
    items = []
    for ln in lines:
        m = LIST_RE.match(ln)
        if not m:
            if ln.strip():
                raise ValueError("Baris bukan senarai: %r" % ln)
            continue
        indent, text = len(m.group(1)), inline(m.group(2).strip())
        if indent == 0:
            items.append(text)
        else:
            last = items[-1]
            if isinstance(last, str):
                last = {"html": last, "sub": []}
                items[-1] = last
            last["sub"].append(text)
    return items


def parse_table(lines):
    rows = [ln.strip().strip("|").split("|") for ln in lines if ln.strip().startswith("|")]
    rows = [[c.strip() for c in r] for r in rows]
    return rows[0], [r for r in rows[2:]]


SECTION_KEYS = [
    ("Knowledge diperlukan", "knowledge"),
    ("Langkah prosedur", "langkah"),
    ("Manual / handling skill", "handling"),
    ("Red flags & kontraindikasi", "redFlags"),
    ("Tanda kompeten (Level 4)", "kompeten"),
    ("Video rujukan", "videos"),
]


def parse_ap(no, title, body, domain_id):
    ap = {"no": no, "domainId": domain_id, "title": title, "minTarget": min_target(no),
          "tujuan": "", "knowledge": [], "langkah": [], "handling": [], "redFlags": [],
          "kompeten": [], "videos": [], "videoTip": "", "extraNotes": []}
    cur, buf = None, []

    def flush():
        if cur is None:
            return
        if cur == "videos":
            for ln in buf:
                if not ln.strip():
                    continue
                m = re.match(r"^- \[([^\]]+)\]\(([^)\s]+)\):\s*(.*)$", ln)
                if m:
                    ap["videos"].append({"title": m.group(1), "url": m.group(2),
                                         "youtubeId": youtube_id(m.group(2)), "note": inline(m.group(3))})
                else:
                    ap["extraNotes"].append(inline(ln.strip()))
        else:
            ap[cur] = parse_list(buf)

    for ln in body:
        t = ln.strip()
        m = re.match(r"^\*\*Tujuan:\*\*\s*(.*)$", t)
        if m:
            ap["tujuan"] = inline(m.group(1))
            continue
        hm = re.match(r"^\*\*(.+?)\*\*\s*(?:\((.*)\))?$", t)
        if hm and any(hm.group(1) == k for k, _ in SECTION_KEYS):
            flush()
            cur, buf = dict(SECTION_KEYS)[hm.group(1)], []
            if cur == "videos" and hm.group(2):
                ap["videoTip"] = hm.group(2)
            continue
        if cur:
            buf.append(ln.rstrip("\n"))
    flush()
    for k in ("tujuan", "knowledge", "langkah", "handling", "redFlags", "kompeten", "videos"):
        if not ap[k]:
            raise ValueError("AP %d tiada bahagian %s" % (no, k))
    return ap


def main():
    text = SRC.read_text(encoding="utf-8")
    lines = text.split("\n")

    # pecah ikut heading ##
    blocks, cur = [], None
    for ln in lines:
        if ln.startswith("## "):
            cur = {"h": ln[3:].strip(), "lines": []}
            blocks.append(cur)
        elif cur is not None:
            cur["lines"].append(ln)

    data = {"meta": {"title": "Nota Rujukan Privileging Fisioterapi HTA 2026",
                     "subtitle": "Unit Fisioterapi · Hospital Tunku Azizah · Versi 2026",
                     "source": SRC.name},
            "guide": {}, "domains": [], "procedures": [],
            "normalValuesPaeds": [], "normalValuesNote": "", "references": [], "referencesIntro": ""}

    for b in blocks:
        h, body = b["h"], b["lines"]
        if h == "Cara guna nota ini":
            paras, tbl = [], []
            for ln in body:
                (tbl if ln.strip().startswith("|") else paras).append(ln)
            headers, rows = parse_table(tbl)
            data["guide"] = {
                "paragraphs": [inline(p.strip()) for p in paras if p.strip()],
                "sections": [{"bahagian": r[0], "isi": inline(r[1])} for r in rows],
            }
            continue
        if h == "Rujukan utama":
            paras = [ln for ln in body if ln.strip() and not ln.strip().startswith("|")]
            data["referencesIntro"] = " ".join(inline(p.strip()) for p in paras)
            _, rows = parse_table(body)
            data["references"] = [{"domain": r[0], "html": inline(r[1])} for r in rows]
            continue
        dom = next((d for d in DOMAINS if h.startswith(d[3])), None)
        if not dom:
            raise ValueError("Heading tak dikenali: %s" % h)
        did, name, (a, z), _ = dom
        # intro = baris sebelum ### pertama; juga jadual nilai normal (paeds cardio)
        intro, i = [], 0
        while i < len(body) and not body[i].startswith("### "):
            intro.append(body[i])
            i += 1
        intro_paras = [ln.strip() for ln in intro if ln.strip() and not ln.strip().startswith("|")]
        tbl = [ln for ln in intro if ln.strip().startswith("|")]
        intro_text = []
        for p in intro_paras:
            m = re.match(r"^\*\*Nilai normal ringkas mengikut umur\*\*\s*\((.*)\)$", p)
            if m:
                data["normalValuesNote"] = inline(m.group(1))
            else:
                intro_text.append(inline(p))
        if tbl:
            _, rows = parse_table(tbl)
            data["normalValuesPaeds"] = [{"umur": r[0], "rr": r[1], "hr": r[2]} for r in rows]
        data["domains"].append({
            "id": did, "name": name, "fullName": h, "apRange": [a, z],
            "minTarget": min_target(z), "intro": " ".join(intro_text),
        })
        # AP
        aps, curap = [], None
        for ln in body[i:]:
            m = re.match(r"^### AP (\d+) · (.+)$", ln)
            if m:
                curap = {"no": int(m.group(1)), "title": m.group(2).strip(), "body": []}
                aps.append(curap)
            elif curap:
                curap["body"].append(ln)
        for x in aps:
            if not a <= x["no"] <= z:
                raise ValueError("AP %d di luar domain %s" % (x["no"], did))
            data["procedures"].append(parse_ap(x["no"], x["title"], x["body"], did))

    # pengesahan
    nos = [p["no"] for p in data["procedures"]]
    assert nos == list(range(1, 25)), "AP tidak lengkap: %s" % nos
    nvid = sum(len(p["videos"]) for p in data["procedures"])
    nlinks = len(re.findall(r"\]\((https?://(?:www\.)?(?:youtube\.com|youtu\.be)[^)]*)\)", text))
    assert nvid == nlinks, "Video %d != pautan YouTube dalam markdown %d" % (nvid, nlinks)

    js = ("/* JANA AUTOMATIK daripada %s oleh tools/md_to_data.py.\n"
          " * Boleh juga diedit terus. Jangan ubah fakta klinikal tanpa semakan supervisor. */\n"
          "window.APP_DATA = %s;\n") % (SRC.name, json.dumps(data, ensure_ascii=False, indent=1))
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(js, encoding="utf-8")
    print("OK: %d AP, %d video, %d rujukan -> %s" % (len(nos), nvid, len(data["references"]), OUT.relative_to(ROOT)))


if __name__ == "__main__":
    sys.exit(main())
