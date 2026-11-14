/* Nota Rujukan Privileging Fisioterapi HTA 2026 — vanilla JS, tiada build step.
   Data: window.APP_DATA (data/procedures.js). Routing: hash (#/ap/1, #/domain/cardio). */
(function () {
  'use strict';

  var D = window.APP_DATA;
  var app = document.getElementById('app');
  if (!D || !app) {
    if (app) app.innerHTML = '<p class="callout callout-warn">Fail data <code>data/procedures.js</code> tidak dapat dimuat.</p>';
    return;
  }

  var byNo = {};
  D.procedures.forEach(function (p) { byNo[p.no] = p; });
  var domById = {};
  D.domains.forEach(function (d) { domById[d.id] = d; });
  var MAX_AP = D.procedures.length;
  var IS_FILE = location.protocol === 'file:';

  var SECTIONS = [
    { key: 'tujuan', label: 'Tujuan', title: 'Tujuan', icon: 'target' },
    { key: 'knowledge', label: 'Knowledge', title: 'Knowledge diperlukan', icon: 'book' },
    { key: 'langkah', label: 'Langkah', title: 'Langkah prosedur', icon: 'list' },
    { key: 'handling', label: 'Handling', title: 'Manual / handling skill', icon: 'hand' },
    { key: 'redFlags', id: 'red-flags', label: 'Red flags', title: 'Red flags & kontraindikasi', icon: 'alert' },
    { key: 'kompeten', label: 'Kompeten', title: 'Tanda kompeten (Level 4)', icon: 'check' },
    { key: 'videos', id: 'video', label: 'Video', title: 'Video rujukan', icon: 'play' },
    { key: 'rekod', label: 'Rekod', title: 'Rekod kemajuan saya', icon: 'chart' }
  ];
  function secId(s) { return s.id || s.key.toLowerCase(); }

  /* ---------------- Ikon (SVG inline) ---------------- */
  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    book: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2Z"/><path d="M20 19v3H6a2 2 0 0 1 0-4h14"/>',
    list: '<path d="M10 6h11M10 12h11M10 18h11"/><path d="M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    check: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    play: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m10 9 5 3-5 3Z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
    ext: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
    print: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || 'icon') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (ICONS[name] || '') + '</svg>';
  }

  /* ---------------- Utiliti ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var _div = document.createElement('div');
  function strip(html) { _div.innerHTML = html; return _div.textContent || ''; }
  function itemText(it) { return typeof it === 'string' ? it : it.html; }
  function todayISO() {
    var d = new Date(); var tz = d.getTimezoneOffset() * 60000;
    return new Date(d - tz).toISOString().slice(0, 10);
  }
  function fmtDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    if (!m) return esc(iso);
    var bln = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'];
    return parseInt(m[3], 10) + ' ' + bln[parseInt(m[2], 10) - 1] + ' ' + m[1];
  }
  function announce(msg) {
    var s = document.getElementById('sr-status');
    if (s) { s.textContent = ''; setTimeout(function () { s.textContent = msg; }, 30); }
  }
  function apRangeText(nums) {
    var out = [], i = 0;
    while (i < nums.length) {
      var j = i;
      while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++;
      out.push(i === j ? String(nums[i]) : nums[i] + '–' + nums[j]);
      i = j + 1;
    }
    return 'AP ' + out.join(', ');
  }
  function rangeLabel(d) { return d.apRange[0] === d.apRange[1] ? 'AP ' + d.apRange[0] : 'AP ' + d.apRange[0] + '–' + d.apRange[1]; }
  function procsOf(domId) { return D.procedures.filter(function (p) { return p.domainId === domId; }); }

  function targetHTML(t) {
    function part(k, label) {
      var v = t[k];
      return v == null
        ? '<span class="t na" aria-label="' + label + ' tiada sasaran">' + k + ' –</span>'
        : '<span class="t" aria-label="' + label + ' ' + v + '">' + k + ' ' + v + '</span>';
    }
    return '<span class="target" role="group" aria-label="Sasaran minimum">' + part('O', 'Observe') + part('A', 'Assist') + part('P', 'Perform') + '</span>';
  }
  function targetGroups(procs) {
    var groups = [], map = {};
    procs.forEach(function (p) {
      var k = JSON.stringify(p.minTarget);
      if (!map[k]) { map[k] = { t: p.minTarget, nos: [] }; groups.push(map[k]); }
      map[k].nos.push(p.no);
    });
    return groups;
  }

  /* ---------------- Storan (localStorage + fallback memori) ---------------- */
  var STORE_KEY = 'nota-privileging-hta-2026:v1';
  var storageOK = true;
  var state = { version: 1, checklist: {}, records: {} };

  (function initStore() {
    try {
      var k = STORE_KEY + ':test';
      localStorage.setItem(k, '1'); localStorage.removeItem(k);
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          state.checklist = parsed.checklist && typeof parsed.checklist === 'object' ? parsed.checklist : {};
          state.records = parsed.records && typeof parsed.records === 'object' ? parsed.records : {};
        }
      }
    } catch (e) {
      storageOK = false;
    }
    if (!storageOK) showStorageWarning();
  })();

  function showStorageWarning() {
    var w = document.getElementById('storage-warning');
    if (w) {
      w.hidden = false;
      w.textContent = 'Storan pelayar tidak tersedia (mod peribadi atau disekat). Checklist dan rekod hanya kekal sehingga laman ditutup. Guna Export untuk simpan.';
    }
  }
  function save() {
    if (!storageOK) return false;
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      storageOK = false; showStorageWarning(); return false;
    }
  }
  function recordsOf(no) { return Array.isArray(state.records[no]) ? state.records[no] : []; }
  function checksOf(no) { return Array.isArray(state.checklist[no]) ? state.checklist[no] : []; }

  function countsOf(no) {
    var c = { O: 0, A: 0, P: 0, maxLevel: 0, total: 0 };
    recordsOf(no).forEach(function (r) {
      if (c[r.type] != null) c[r.type]++;
      c.total++;
      if (+r.level > c.maxLevel) c.maxLevel = +r.level;
    });
    return c;
  }
  function metTarget(no) {
    var t = byNo[no].minTarget, c = countsOf(no);
    return ['O', 'A', 'P'].every(function (k) { return c[k] >= (t[k] || 0); });
  }
  function checkProgress(no) {
    var total = byNo[no].kompeten.length, ch = checksOf(no), done = 0;
    for (var i = 0; i < total; i++) if (ch[i]) done++;
    return { done: done, total: total };
  }
  function statusChip(no) {
    var c = countsOf(no);
    if (metTarget(no)) return '<span class="chip chip-success">Capai sasaran</span>';
    if (!c.total) return '<span class="chip chip-neutral">Belum mula</span>';
    return '<span class="chip chip-warn">Belum capai</span>';
  }

  /* ---------------- Indeks carian ---------------- */
  var INDEX = D.procedures.map(function (p) {
    var chunks = [{ sec: 'title', text: 'AP ' + p.no + ' ' + p.title }];
    chunks.push({ sec: 'tujuan', text: strip(p.tujuan) });
    ['knowledge', 'langkah', 'handling', 'redFlags', 'kompeten'].forEach(function (k) {
      p[k].forEach(function (it) {
        chunks.push({ sec: k, text: strip(itemText(it)) });
        if (typeof it !== 'string') it.sub.forEach(function (s) { chunks.push({ sec: k, text: strip(s) }); });
      });
    });
    p.videos.forEach(function (v) { chunks.push({ sec: 'videos', text: v.title + ': ' + strip(v.note) }); });
    p.extraNotes.forEach(function (n) { chunks.push({ sec: 'videos', text: strip(n) }); });
    chunks.forEach(function (c) { c.lower = c.text.toLowerCase(); });
    return { p: p, chunks: chunks, all: chunks.map(function (c) { return c.lower; }).join(' \n ') };
  });
  var SEC_LABEL = { title: 'Tajuk' };
  SECTIONS.forEach(function (s) { SEC_LABEL[s.key] = s.label; });

  function termsOf(q) {
    return q.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 0; })
      .filter(function (t, i, a) { return a.indexOf(t) === i; });
  }
  function reEscape(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function termRegex(terms) {
    var sorted = terms.slice().sort(function (a, b) { return b.length - a.length; });
    return new RegExp('(' + sorted.map(reEscape).join('|') + ')', 'gi');
  }
  function highlightText(text, terms) {
    if (!terms.length) return esc(text);
    var re = termRegex(terms), out = '', last = 0, m;
    while ((m = re.exec(text))) {
      out += esc(text.slice(last, m.index)) + '<mark>' + esc(m[0]) + '</mark>';
      last = m.index + m[0].length;
      if (m[0].length === 0) re.lastIndex++;
    }
    return out + esc(text.slice(last));
  }
  function snippet(text, terms) {
    var lower = text.toLowerCase(), pos = -1;
    terms.forEach(function (t) { var i = lower.indexOf(t); if (i >= 0 && (pos < 0 || i < pos)) pos = i; });
    if (text.length <= 170) return highlightText(text, terms);
    var start = Math.max(0, pos - 60), end = Math.min(text.length, start + 170);
    if (start > 0) { var sp = text.lastIndexOf(' ', start); if (sp > start - 15) start = sp + 1; }
    if (end < text.length) { var ep = text.indexOf(' ', end); if (ep > 0 && ep < end + 15) end = ep; }
    return (start > 0 ? '… ' : '') + highlightText(text.slice(start, end), terms) + (end < text.length ? ' …' : '');
  }
  function search(q) {
    var terms = termsOf(q);
    if (!terms.length) return { terms: terms, results: [] };
    var results = [];
    INDEX.forEach(function (ix) {
      if (!terms.every(function (t) { return ix.all.indexOf(t) >= 0; })) return;
      var score = 0, hits = [];
      ix.chunks.forEach(function (c) {
        var n = 0;
        terms.forEach(function (t) { if (c.lower.indexOf(t) >= 0) n++; });
        if (n) {
          score += c.sec === 'title' ? n * 20 : n;
          if (c.sec !== 'title') hits.push({ c: c, n: n });
        }
      });
      hits.sort(function (a, b) { return b.n - a.n; });
      results.push({ p: ix.p, score: score, hits: hits.slice(0, 3), totalHits: hits.length, titleHit: ix.chunks[0].lower });
    });
    results.sort(function (a, b) { return b.score - a.score || a.p.no - b.p.no; });
    return { terms: terms, results: results };
  }
  function highlightIn(root, terms) {
    if (!terms.length || !root) return 0;
    var re = termRegex(terms), count = 0, nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!n.nodeValue.trim() || !p || /^(SCRIPT|STYLE|MARK|BUTTON|TEXTAREA|OPTION|SELECT)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('form, .sec-nav, .records')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      re.lastIndex = 0;
      if (!re.test(n.nodeValue)) return;
      var span = document.createElement('span');
      span.innerHTML = highlightText(n.nodeValue, terms);
      count += span.querySelectorAll('mark').length;
      var frag = document.createDocumentFragment();
      while (span.firstChild) frag.appendChild(span.firstChild);
      n.parentNode.replaceChild(frag, n);
    });
    return count;
  }

  /* ---------------- Komponen render ---------------- */
  function listHTML(items, cls) {
    return '<ul class="' + (cls || 'content-list') + '">' + items.map(function (it) {
      if (typeof it === 'string') return '<li>' + it + '</li>';
      return '<li>' + it.html + '<ul>' + it.sub.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul></li>';
    }).join('') + '</ul>';
  }
  function stepsHTML(items) {
    return '<ol class="steps">' + items.map(function (it) {
      if (typeof it === 'string') return '<li>' + it + '</li>';
      return '<li>' + it.html + '<ul>' + it.sub.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul></li>';
    }).join('') + '</ol>';
  }
  function normalTableHTML() {
    return '<div class="table-wrap"><table><caption class="sr-only">Nilai normal RR dan HR pediatrik mengikut umur</caption>' +
      '<thead><tr><th scope="col">Umur</th><th scope="col">RR (/min)</th><th scope="col">HR (/min)</th></tr></thead><tbody>' +
      D.normalValuesPaeds.map(function (r) { return '<tr><th scope="row">' + esc(r.umur) + '</th><td>' + esc(r.rr) + '</td><td>' + esc(r.hr) + '</td></tr>'; }).join('') +
      '</tbody></table></div>' +
      (D.normalValuesNote ? '<p class="small muted" style="margin-top:8px">(' + D.normalValuesNote + ')</p>' : '');
  }
  function normalPanelHTML(open) {
    return '<details class="panel"' + (open ? ' open' : '') + '><summary>Nilai normal ringkas mengikut umur (RR / HR)</summary><div class="panel-body">' + normalTableHTML() + '</div></details>';
  }
  function breadcrumb(items) {
    return '<nav class="breadcrumb" aria-label="Breadcrumb"><ol>' + items.map(function (it, i) {
      return i === items.length - 1 ? '<li aria-current="page">' + esc(it[0]) + '</li>' : '<li><a href="' + it[1] + '">' + esc(it[0]) + '</a></li>';
    }).join('') + '</ol></nav>';
  }

  /* ---------------- Laman: Utama ---------------- */
  function renderHome(q) {
    var cards = D.domains.map(function (d) {
      var procs = procsOf(d.id);
      var met = procs.filter(function (p) { return metTarget(p.no); }).length;
      var groups = targetGroups(procs);
      var tHTML = groups.length === 1
        ? '<div class="target-line"><span>Sasaran:</span>' + targetHTML(groups[0].t) + '</div>'
        : groups.map(function (g) { return '<div class="target-line"><span>' + apRangeText(g.nos) + ':</span>' + targetHTML(g.t) + '</div>'; }).join('');
      return '<a class="card domain-card" href="#/domain/' + d.id + '">' +
        '<span class="range">' + rangeLabel(d) + '</span>' +
        '<h3>' + esc(d.name) + '</h3>' +
        '<div class="meta"><span>' + procs.length + ' AP' + (met ? ' · ' + met + ' capai sasaran' : '') + '</span>' + tHTML + '</div></a>';
    }).join('');

    app.innerHTML =
      '<section class="hero">' +
        '<h1 tabindex="-1">' + esc(D.meta.title) + '</h1>' +
        '<p class="sub">' + esc(D.meta.subtitle) + '</p>' +
        '<form class="search" role="search" id="search-form">' +
          '<label for="q">Cari dalam semua AP</label>' +
          '<div class="search-field">' + icon('search') +
            '<input id="q" type="search" autocomplete="off" spellcheck="false" placeholder="Contoh: crackles, PEEP, Pirani" value="' + esc(q || '') + '" aria-describedby="q-hint">' +
            '<button type="button" class="clear" id="q-clear" aria-label="Kosongkan carian"' + (q ? '' : ' hidden') + '>&times;</button>' +
          '</div>' +
          '<p class="hint" id="q-hint">Cari tajuk dan semua teks: knowledge, langkah, red flags, video.</p>' +
        '</form>' +
      '</section>' +
      '<div id="results" aria-live="polite"></div>' +
      '<div id="home-main">' +
        '<h2 class="section-title">Domain</h2>' +
        '<div class="domain-grid">' + cards + '</div>' +
        '<h2 class="section-title">Pautan pantas</h2>' +
        '<div class="quick-links">' +
          '<a class="card quick-link" href="#/cara-guna">' + icon('info') + 'Cara guna nota ini</a>' +
          '<a class="card quick-link" href="#/rujukan">' + icon('book') + 'Rujukan utama</a>' +
          '<a class="card quick-link" href="#/kemajuan">' + icon('chart') + 'Kemajuan saya</a>' +
        '</div>' +
      '</div>';

    var input = document.getElementById('q');
    var clearBtn = document.getElementById('q-clear');
    var timer = null;
    function run() {
      var v = input.value.trim();
      clearBtn.hidden = !input.value;
      renderResults(v);
      try { history.replaceState(null, '', v ? '#/cari/' + encodeURIComponent(v) : '#/'); } catch (e) { /* abaikan */ }
    }
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 140); });
    document.getElementById('search-form').addEventListener('submit', function (e) { e.preventDefault(); clearTimeout(timer); run(); input.blur(); });
    clearBtn.addEventListener('click', function () { input.value = ''; run(); input.focus(); });
    if (q) renderResults(q);
    return { title: q ? 'Carian: ' + q : null };
  }

  function renderResults(q) {
    var box = document.getElementById('results'), main = document.getElementById('home-main');
    if (!box) return;
    if (!q || q.length < 2) {
      box.innerHTML = q ? '<p class="results-meta">Taip sekurang-kurangnya 2 aksara.</p>' : '';
      main.hidden = false;
      return;
    }
    main.hidden = true;
    var r = search(q), enc = encodeURIComponent(q);
    if (!r.results.length) {
      box.innerHTML = '<p class="results-meta">Tiada hasil untuk <strong>' + esc(q) + '</strong>.</p>' +
        '<div class="empty">Cuba istilah lain (contoh: "suction", "Ponseti", "6MWT") atau ejaan English seperti dalam nota.</div>';
      return;
    }
    box.innerHTML = '<p class="results-meta">' + r.results.length + ' AP sepadan dengan <strong>' + esc(q) + '</strong></p>' +
      r.results.map(function (res) {
        var p = res.p, firstSec = res.hits.length ? res.hits[0].c.sec : 'tujuan';
        var sec = SECTIONS.filter(function (s) { return s.key === firstSec; })[0];
        var href = '#/ap/' + p.no + (sec ? '/' + secId(sec) : '') + '?q=' + enc;
        return '<a class="card result" href="' + href + '">' +
          '<div class="r-title">' + highlightText('AP ' + p.no + ' · ' + p.title, r.terms) + '</div>' +
          '<span class="chip chip-neutral">' + esc(domById[p.domainId].name) + '</span>' +
          res.hits.map(function (h) {
            return '<p class="r-snip"><span class="r-sec">' + esc(SEC_LABEL[h.c.sec]) + '</span>' + snippet(h.c.text, r.terms) + '</p>';
          }).join('') +
          (res.totalHits > 3 ? '<p class="r-snip muted small">+ ' + (res.totalHits - 3) + ' padanan lagi</p>' : '') +
        '</a>';
      }).join('');
  }

  /* ---------------- Laman: Domain ---------------- */
  function renderDomain(id) {
    var d = domById[id];
    if (!d) return renderNotFound();
    var procs = procsOf(id);
    app.innerHTML = breadcrumb([['Utama', '#/'], [d.name, '']]) +
      '<div class="page" style="max-width:none">' +
      '<p class="chip" style="margin-bottom:10px">' + rangeLabel(d) + '</p>' +
      '<h1 tabindex="-1">' + esc(d.fullName) + '</h1>' +
      '<p>' + d.intro + '</p>' +
      (id === 'paeds-cardio' ? normalPanelHTML(false) : '') +
      '<h2 class="section-title">Senarai AP</h2>' +
      '<ul class="ap-list">' + procs.map(function (p) {
        var c = countsOf(p.no), cp = checkProgress(p.no);
        return '<li><a class="card ap-item" href="#/ap/' + p.no + '">' +
          '<span class="ap-num"><span><small>AP</small>' + p.no + '</span></span>' +
          '<span class="ap-body"><span class="ap-title" style="display:block">' + esc(p.title) + '</span>' +
          '<span class="ap-meta">' + targetHTML(p.minTarget) + statusChip(p.no) +
          (c.total ? '<span class="muted">Rekod: O ' + c.O + ' · A ' + c.A + ' · P ' + c.P + '</span>' : '') +
          (cp.done ? '<span class="muted">Kompeten ' + cp.done + '/' + cp.total + '</span>' : '') +
          '</span></span></a></li>';
      }).join('') + '</ul></div>';
    return { title: d.name };
  }

  /* ---------------- Laman: AP ---------------- */
  function renderAP(no, sec, q) {
    var p = byNo[no];
    if (!p) return renderNotFound();
    var d = domById[p.domainId];
    var terms = q ? termsOf(q) : [];

    var nav = '<nav class="sec-nav no-print" aria-label="Seksyen dalam AP ' + p.no + '"><ul>' + SECTIONS.map(function (s) {
      return '<li><a href="#/ap/' + p.no + '/' + secId(s) + '" data-sec="' + secId(s) + '"' + (s.key === 'redFlags' ? ' class="is-danger"' : '') + '>' + s.label + '</a></li>';
    }).join('') + '</ul></nav>';

    function section(s, body, extraCls) {
      return '<section class="ap-section' + (extraCls ? ' ' + extraCls : '') + '" id="sec-' + secId(s) + '" aria-labelledby="h-' + secId(s) + '">' +
        '<h2 id="h-' + secId(s) + '">' + icon(s.icon) + s.title + '</h2>' + body + '</section>';
    }
    var S = {}; SECTIONS.forEach(function (s) { S[s.key] = s; });
    var isPaedsCardio = p.no >= 14 && p.no <= 20;

    var videoTip = (p.no === 1 || p.no === 14)
      ? '<div class="callout tip">' + icon('headphones') + '<p>Guna headphone untuk dengar bunyi dengan jelas.</p></div>' : '';
    var videos = '<div class="video-grid">' + p.videos.map(function (v) {
      return '<article class="card video-card">' +
        '<div class="video-frame" data-yt="' + esc(v.youtubeId) + '" data-title="' + esc(v.title) + '">' +
          '<button type="button" class="video-play" aria-label="Main video: ' + esc(v.title) + '">' +
            '<img src="https://i.ytimg.com/vi/' + esc(v.youtubeId) + '/hqdefault.jpg" alt="Thumbnail video: ' + esc(v.title) + '" loading="lazy" decoding="async" width="480" height="360">' +
            '<span class="play" aria-hidden="true"></span>' +
          '</button>' +
        '</div>' +
        '<div class="video-body"><h3>' + esc(v.title) + '</h3><p>' + v.note + '</p>' +
          '<p class="print-only print-url">' + esc(v.url) + '</p>' +
          '<a class="yt-link" href="' + esc(v.url) + '" target="_blank" rel="noopener">Buka di YouTube ' + icon('ext') + '<span class="sr-only"> (tetingkap baharu)</span></a>' +
        '</div></article>';
    }).join('') + '</div>' +
      p.extraNotes.map(function (n) { return '<div class="callout callout-warn extra-note"><p>' + n + '</p></div>'; }).join('');

    var prev = byNo[no - 1], next = byNo[no + 1];
    var pager = '<nav class="pager no-print" aria-label="AP sebelum dan seterusnya">' +
      (prev ? '<a class="prev" href="#/ap/' + prev.no + '"><span class="dir">&larr; Sebelum</span><span class="ttl">AP ' + prev.no + ' · ' + esc(prev.title) + '</span></a>' : '') +
      (next ? '<a class="next" href="#/ap/' + next.no + '"><span class="dir">Seterusnya &rarr;</span><span class="ttl">AP ' + next.no + ' · ' + esc(next.title) + '</span></a>' : '') +
      '</nav>';

    app.innerHTML = breadcrumb([['Utama', '#/'], [d.name, '#/domain/' + d.id], ['AP ' + p.no, '']]) +
      '<header class="ap-head">' +
        '<div class="labels"><a class="chip" href="#/domain/' + d.id + '">' + esc(d.name) + '</a>' + targetHTML(p.minTarget) + '<span id="ap-status">' + statusChip(p.no) + '</span></div>' +
        '<h1 tabindex="-1"><span class="ap-prefix">AP ' + p.no + ' ·</span> ' + esc(p.title) + '</h1>' +
        (terms.length ? '<p class="callout small no-print" id="hl-bar">Menyerlahkan: <strong>' + esc(q) + '</strong> · <a href="#/ap/' + p.no + '">Buang sorotan</a></p>' : '') +
        '<div class="tools no-print">' +
          '<button type="button" class="btn btn-sm" id="btn-print">' + icon('print') + 'Cetak</button>' +
          '<button type="button" class="btn btn-sm" id="btn-share">' + icon('link') + 'Salin pautan</button>' +
        '</div>' +
      '</header>' +
      '<div class="ap-layout">' + nav +
        '<div class="ap-content">' +
          section(S.tujuan, '<p class="tujuan">' + p.tujuan + '</p>') +
          section(S.knowledge, listHTML(p.knowledge) + (isPaedsCardio ? normalPanelHTML(false) : '')) +
          section(S.langkah, stepsHTML(p.langkah)) +
          section(S.handling, listHTML(p.handling)) +
          section(S.redFlags, '<div class="alert-danger" role="note" aria-label="Red flags dan kontraindikasi"><div class="alert-title">' + icon('alert') + 'Bila perlu stop, ubah suai atau rujuk</div>' + listHTML(p.redFlags, '') + '</div>', 'red') +
          section(S.kompeten, '<div id="kompeten-box"></div>') +
          section(S.videos, videoTip + videos) +
          section(S.rekod, '<div id="rekod-box"></div>') +
          pager +
        '</div>' +
      '</div>';

    renderChecklist(p);
    renderRecords(p);
    if (terms.length) highlightIn(app.querySelector('.ap-content'), terms);

    document.getElementById('btn-print').addEventListener('click', function () { window.print(); });
    document.getElementById('btn-share').addEventListener('click', function () {
      var url = location.href.split('#')[0] + '#/ap/' + p.no;
      var btn = this;
      function done(ok) { btn.lastChild.textContent = ok ? 'Pautan disalin' : url; announce(ok ? 'Pautan disalin' : 'Salin pautan secara manual'); }
      try {
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(function () { done(true); }, function () { done(false); });
        else { prompt('Salin pautan ini:', url); }
      } catch (e) { done(false); }
    });
    setupSecNav(p.no);
    return { title: 'AP ' + p.no + ' · ' + p.title, scrollTo: sec ? 'sec-' + sec : null };
  }

  function renderChecklist(p) {
    var box = document.getElementById('kompeten-box');
    var ch = checksOf(p.no), prog = checkProgress(p.no);
    var pct = prog.total ? Math.round(prog.done / prog.total * 100) : 0;
    box.innerHTML =
      '<p class="muted small">Self-check sebelum minta supervisor nilai. Disimpan dalam peranti ini sahaja.</p>' +
      '<div class="check-meta"><span><strong>' + prog.done + '/' + prog.total + '</strong> ditanda</span>' +
        '<span class="progressbar" role="progressbar" aria-label="Kemajuan checklist" aria-valuemin="0" aria-valuemax="' + prog.total + '" aria-valuenow="' + prog.done + '"><span style="width:' + pct + '%"></span></span>' +
        '<button type="button" class="btn btn-sm no-print" id="chk-reset"' + (prog.done ? '' : ' disabled') + '>Reset</button></div>' +
      '<ul class="checklist">' + p.kompeten.map(function (k, i) {
        var on = !!ch[i];
        return '<li' + (on ? ' class="done"' : '') + '><label><input type="checkbox" data-i="' + i + '"' + (on ? ' checked' : '') + '><span>' + k + '</span></label></li>';
      }).join('') + '</ul>';
    box.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var arr = checksOf(p.no).slice();
        while (arr.length < p.kompeten.length) arr.push(false);
        arr[+cb.getAttribute('data-i')] = cb.checked;
        state.checklist[p.no] = arr;
        save();
        renderChecklist(p);
        var again = box.querySelector('input[data-i="' + cb.getAttribute('data-i') + '"]');
        if (again) again.focus();
      });
    });
    document.getElementById('chk-reset').addEventListener('click', function () {
      if (!confirm('Reset semua tanda kompeten untuk AP ' + p.no + '?')) return;
      delete state.checklist[p.no];
      save();
      renderChecklist(p);
      announce('Checklist direset');
    });
  }

  var PII_PATTERNS = [
    /\b\d{6}\s*-?\s*\d{2}\s*-?\s*\d{4}\b/,          // No. IC Malaysia
    /\d{7,}/,                                          // nombor panjang (MRN dsb.)
    /\b(mrn|r\/?n|no\.?\s*kp|kad pengenalan|i\/?c|nric|passport|pasport)\b/i
  ];
  function looksLikePII(s) { return PII_PATTERNS.some(function (re) { return re.test(s); }); }

  function renderRecords(p) {
    var box = document.getElementById('rekod-box');
    var t = p.minTarget, c = countsOf(p.no), met = metTarget(p.no);
    var recs = recordsOf(p.no).slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || '') || (b.createdAt || 0) - (a.createdAt || 0); });
    var TYPE_NAME = { O: 'Observe', A: 'Assist', P: 'Perform' };
    function box3(k) {
      var tv = t[k], ok = tv != null && c[k] >= tv;
      return '<div class="count-box' + (ok ? ' ok' : '') + '"><div class="k">' + TYPE_NAME[k] + '</div><div class="v">' + c[k] + '<small> / ' + (tv == null ? '–' : tv) + '</small></div></div>';
    }
    var lvlOpts = [1, 2, 3, 4, 5].map(function (n) {
      return '<option value="' + n + '">Level ' + n + (n === 4 ? ' (Independent)' : n === 5 ? ' (Expert)' : '') + '</option>';
    }).join('');

    box.innerHTML =
      '<div class="counts" aria-label="Kiraan berbanding sasaran minimum">' + box3('O') + box3('A') + box3('P') + '</div>' +
      '<div class="status-line">Status: ' + (met ? '<span class="chip chip-success">Capai sasaran minimum</span>' : '<span class="chip chip-warn">Belum capai sasaran</span>') +
        (c.maxLevel ? '<span class="muted small">Level tertinggi direkod: ' + c.maxLevel + '</span>' : '') + '</div>' +
      '<div class="callout callout-warn privacy">' + icon('shield') + ' <strong>Jangan masukkan data pesakit</strong> (nama, MRN, No. IC atau maklumat pengenalan lain). Rekod ini untuk jejak peribadi sahaja; rekod rasmi kekal dalam buku log bercetak.</div>' +
      '<form class="record-form card no-print" id="rec-form" novalidate style="margin-top:14px">' +
        '<div class="form-row">' +
          '<div class="field"><label for="rec-date">Tarikh</label><input type="date" id="rec-date" required value="' + todayISO() + '" max="' + todayISO() + '"></div>' +
          '<div class="field"><label for="rec-level">Level dicapai</label><select id="rec-level">' + lvlOpts + '</select></div>' +
        '</div>' +
        '<div class="field"><fieldset><legend>Jenis</legend><div class="segmented">' +
          ['O', 'A', 'P'].map(function (k, i) {
            return '<input type="radio" name="rec-type" id="rec-type-' + k + '" value="' + k + '"' + (i === 0 ? ' checked' : '') + '><label for="rec-type-' + k + '">' + k + '<small>' + TYPE_NAME[k] + '</small></label>';
          }).join('') + '</div></fieldset></div>' +
        '<div class="field"><label for="rec-note">Catatan pendek (pilihan)</label><textarea id="rec-note" maxlength="200" rows="2" aria-describedby="rec-note-help rec-err"></textarea>' +
          '<p class="help" id="rec-note-help">Contoh: jenis kes, wad, pembelajaran utama. Maks 200 aksara. Tanpa data pesakit.</p>' +
          '<p class="error" id="rec-err" role="alert"></p></div>' +
        '<div class="btn-row"><button type="submit" class="btn btn-primary">Simpan rekod</button><a class="btn" href="#/kemajuan">Kemajuan saya</a></div>' +
      '</form>' +
      (recs.length
        ? '<h3>Rekod (' + recs.length + ')</h3><ul class="records">' + recs.map(function (r) {
            return '<li class="record"><span class="type" aria-hidden="true">' + esc(r.type) + '</span>' +
              '<div class="r-main"><div class="r-top">' + fmtDate(r.date) + ' · ' + esc(TYPE_NAME[r.type] || r.type) + ' · Level ' + esc(r.level) + '</div>' +
              (r.note ? '<div class="r-note">' + esc(r.note) + '</div>' : '') + '</div>' +
              '<button type="button" class="del no-print" data-id="' + esc(r.id) + '" aria-label="Padam rekod ' + esc(fmtDate(r.date)) + ' ' + esc(TYPE_NAME[r.type] || r.type) + '">' + icon('trash') + '</button></li>';
          }).join('') + '</ul>'
        : '<p class="muted">Belum ada rekod untuk AP ini.</p>');

    document.getElementById('rec-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('rec-err');
      var date = document.getElementById('rec-date').value;
      var type = (box.querySelector('input[name=rec-type]:checked') || {}).value;
      var level = +document.getElementById('rec-level').value;
      var note = document.getElementById('rec-note').value.trim().slice(0, 200);
      err.textContent = '';
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) { err.textContent = 'Sila pilih tarikh.'; document.getElementById('rec-date').focus(); return; }
      if (['O', 'A', 'P'].indexOf(type) < 0) { err.textContent = 'Sila pilih jenis O/A/P.'; return; }
      if (note && looksLikePII(note)) {
        err.textContent = 'Catatan nampak seperti ada nombor IC/MRN atau pengenalan pesakit. Buang maklumat itu sebelum simpan.';
        document.getElementById('rec-note').focus();
        return;
      }
      var arr = recordsOf(p.no).slice();
      arr.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7), date: date, type: type, level: level, note: note, createdAt: Date.now() });
      state.records[p.no] = arr;
      var ok = save();
      renderRecords(p);
      document.getElementById('ap-status').innerHTML = statusChip(p.no);
      announce(ok ? 'Rekod disimpan' : 'Rekod disimpan sementara (storan tidak tersedia)');
    });
    box.querySelectorAll('.del').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!confirm('Padam rekod ini?')) return;
        var id = b.getAttribute('data-id');
        state.records[p.no] = recordsOf(p.no).filter(function (r) { return r.id !== id; });
        if (!state.records[p.no].length) delete state.records[p.no];
        save();
        renderRecords(p);
        document.getElementById('ap-status').innerHTML = statusChip(p.no);
        announce('Rekod dipadam');
      });
    });
  }

  var secObserver = null;
  function setupSecNav(no) {
    var nav = app.querySelector('.sec-nav');
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[data-sec]'));
    function setActive(id) {
      links.forEach(function (a) {
        var on = a.getAttribute('data-sec') === id;
        a.classList.toggle('active', on);
        if (on) {
          a.setAttribute('aria-current', 'location');
          if (nav.scrollWidth > nav.clientWidth) {
            var l = a.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2;
            nav.scrollTo ? nav.scrollTo({ left: l, behavior: 'smooth' }) : (nav.scrollLeft = l);
          }
        } else a.removeAttribute('aria-current');
      });
    }
    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var id = a.getAttribute('data-sec'), target = document.getElementById('sec-' + id);
        if (!target) return;
        target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        try { history.replaceState(null, '', '#/ap/' + no + '/' + id); } catch (err) { /* abaikan */ }
        setActive(id);
        var h = target.querySelector('h2');
        if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
      });
    });
    if (secObserver) secObserver();
    var sections = Array.prototype.slice.call(app.querySelectorAll('.ap-section'));
    var ticking = false, lastId = null;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var offset = window.innerWidth >= 1024 ? 120 : (nav.offsetHeight + 40);
        var cur = sections[0];
        sections.forEach(function (s) { if (s.getBoundingClientRect().top <= offset) cur = s; });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          var lastSec = sections[sections.length - 1];
          if (lastSec.getBoundingClientRect().top < window.innerHeight) cur = lastSec;
        }
        var id = cur.id.replace(/^sec-/, '');
        if (id !== lastId) { lastId = id; setActive(id); }
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    secObserver = function () { window.removeEventListener('scroll', onScroll); };
    onScroll();
  }

  /* Video: klik baru muat iframe */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.video-play');
    if (!btn) return;
    var frame = btn.parentNode, id = frame.getAttribute('data-yt'), title = frame.getAttribute('data-title');
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    var ifr = document.createElement('iframe');
    ifr.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1&modestbranding=1';
    ifr.title = 'Video: ' + title;
    ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    ifr.setAttribute('allowfullscreen', '');
    ifr.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    frame.replaceChild(ifr, btn);
    var body = frame.parentNode.querySelector('.video-body');
    if (body && !body.querySelector('.embed-note')) {
      var n = document.createElement('p');
      n.className = 'embed-note';
      n.textContent = 'Jika video tidak dimainkan, guna pautan "Buka di YouTube".' + (IS_FILE ? ' Embed YouTube kadangkala tidak berfungsi bila fail dibuka terus dari komputer.' : '');
      body.insertBefore(n, body.querySelector('.yt-link'));
    }
    ifr.focus();
  });
  /* Thumbnail gagal dimuat (luar talian / disekat) */
  document.addEventListener('error', function (e) {
    var img = e.target;
    if (img && img.tagName === 'IMG' && img.closest && img.closest('.video-play')) {
      var f = document.createElement('span');
      f.className = 'fallback';
      f.textContent = 'Thumbnail tidak dapat dimuat. Klik untuk cuba main video.';
      img.parentNode.insertBefore(f, img);
      img.style.visibility = 'hidden';
    }
  }, true);

  /* ---------------- Laman: Kemajuan ---------------- */
  function renderProgress() {
    var nMet = 0, totals = { O: 0, A: 0, P: 0, all: 0 }, chkDone = 0, chkTotal = 0;
    D.procedures.forEach(function (p) {
      var c = countsOf(p.no), cp = checkProgress(p.no);
      if (metTarget(p.no)) nMet++;
      totals.O += c.O; totals.A += c.A; totals.P += c.P; totals.all += c.total;
      chkDone += cp.done; chkTotal += cp.total;
    });
    function cell(v, t) {
      if (t == null) return '<td class="num muted">' + (v ? v : '–') + '</td>';
      return '<td class="num' + (v >= t ? ' ok' : '') + '">' + v + '/' + t + '</td>';
    }
    var tables = D.domains.map(function (d) {
      return '<h2 class="section-title">' + esc(d.name) + ' <span class="muted small">(' + rangeLabel(d) + ')</span></h2>' +
        '<div class="table-wrap"><table class="prog-table"><thead><tr><th scope="col">AP</th><th scope="col">Tajuk</th><th scope="col" class="num">O</th><th scope="col" class="num">A</th><th scope="col" class="num">P</th><th scope="col" class="num">Kompeten</th><th scope="col">Status</th></tr></thead><tbody>' +
        procsOf(d.id).map(function (p) {
          var c = countsOf(p.no), cp = checkProgress(p.no), t = p.minTarget;
          return '<tr><td><a href="#/ap/' + p.no + '">AP ' + p.no + '</a></td><td class="t-title"><a href="#/ap/' + p.no + '">' + esc(p.title) + '</a></td>' +
            cell(c.O, t.O) + cell(c.A, t.A) + cell(c.P, t.P) +
            '<td class="num' + (cp.done === cp.total ? ' ok' : '') + '">' + cp.done + '/' + cp.total + '</td><td>' + statusChip(p.no) + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }).join('');

    app.innerHTML = breadcrumb([['Utama', '#/'], ['Kemajuan saya', '']]) +
      '<h1 tabindex="-1">Kemajuan saya</h1>' +
      '<p class="muted">Ringkasan rekod O/A/P berbanding sasaran minimum buku log, dan checklist kompeten. Data disimpan dalam pelayar peranti ini sahaja (tiada login, tiada server).</p>' +
      '<div class="summary-grid">' +
        '<div class="card"><div class="big">' + nMet + '<span class="muted small">/' + MAX_AP + '</span></div><div class="lbl">AP capai sasaran</div></div>' +
        '<div class="card"><div class="big">' + totals.all + '</div><div class="lbl">Jumlah rekod</div></div>' +
        '<div class="card"><div class="big" style="font-size:1.25rem">' + totals.O + ' · ' + totals.A + ' · ' + totals.P + '</div><div class="lbl">Observe · Assist · Perform</div></div>' +
        '<div class="card"><div class="big">' + chkDone + '<span class="muted small">/' + chkTotal + '</span></div><div class="lbl">Tanda kompeten</div></div>' +
      '</div>' +
      '<p class="callout small">Status "Capai sasaran" hanya kiraan minimum. Privilege diluluskan pada Level 4 (Independent) atau Level 5 (Expert) oleh supervisor; rekod rasmi kekal dalam buku log bercetak.</p>' +
      tables +
      '<section class="data-tools card no-print" aria-labelledby="h-data">' +
        '<h2 id="h-data">Pindah data antara peranti</h2>' +
        '<p class="muted small">Export simpan fail JSON. Import di peranti lain untuk gabungkan rekod (rekod sama tidak digandakan).</p>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary" id="btn-export">' + icon('download') + 'Export (JSON)</button>' +
          '<label class="btn" for="file-import" tabindex="0" id="lbl-import">' + icon('upload') + 'Import</label>' +
          '<input type="file" id="file-import" accept="application/json,.json" class="sr-only">' +
          '<button type="button" class="btn btn-danger" id="btn-wipe">' + icon('trash') + 'Padam semua data</button>' +
        '</div>' +
        '<p class="small" id="data-msg" role="status" style="margin-top:10px"></p>' +
      '</section>';

    var msg = document.getElementById('data-msg');
    document.getElementById('btn-export').addEventListener('click', function () {
      var payload = { app: 'nota-privileging-hta-2026', version: 1, exportedAt: new Date().toISOString(), checklist: state.checklist, records: state.records };
      var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'kemajuan-privileging-hta-' + todayISO() + '.json';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      msg.textContent = 'Fail export dimuat turun.';
    });
    var fileInput = document.getElementById('file-import');
    document.getElementById('lbl-import').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); }
    });
    fileInput.addEventListener('change', function () {
      var f = fileInput.files && fileInput.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var res = importData(JSON.parse(reader.result));
          save();
          renderProgress();
          var m = document.getElementById('data-msg');
          m.textContent = 'Import berjaya: ' + res.added + ' rekod baharu ditambah' + (res.skipped ? ', ' + res.skipped + ' sudah ada' : '') + '.';
          announce(m.textContent);
        } catch (err) {
          msg.textContent = 'Import gagal: ' + err.message;
        }
        fileInput.value = '';
      };
      reader.onerror = function () { msg.textContent = 'Fail tidak dapat dibaca.'; };
      reader.readAsText(f);
    });
    document.getElementById('btn-wipe').addEventListener('click', function () {
      if (!confirm('Padam SEMUA rekod dan checklist dalam peranti ini? Export dahulu jika perlu.')) return;
      state.checklist = {}; state.records = {};
      save();
      renderProgress();
      document.getElementById('data-msg').textContent = 'Semua data dipadam.';
    });
    return { title: 'Kemajuan saya' };
  }

  function importData(obj) {
    if (!obj || typeof obj !== 'object' || (!obj.records && !obj.checklist)) throw new Error('format fail tidak dikenali.');
    var added = 0, skipped = 0;
    Object.keys(obj.records || {}).forEach(function (no) {
      if (!byNo[no] || !Array.isArray(obj.records[no])) return;
      var cur = recordsOf(no).slice(), ids = {};
      cur.forEach(function (r) { ids[r.id] = true; });
      obj.records[no].forEach(function (r) {
        if (!r || ['O', 'A', 'P'].indexOf(r.type) < 0 || !/^\d{4}-\d{2}-\d{2}$/.test(r.date)) return;
        var lvl = Math.min(5, Math.max(1, parseInt(r.level, 10) || 1));
        var id = String(r.id || (r.date + r.type + lvl + (r.note || '')));
        if (ids[id]) { skipped++; return; }
        ids[id] = true;
        cur.push({ id: id, date: r.date, type: r.type, level: lvl, note: String(r.note || '').slice(0, 200), createdAt: +r.createdAt || Date.now() });
        added++;
      });
      state.records[no] = cur;
    });
    Object.keys(obj.checklist || {}).forEach(function (no) {
      if (!byNo[no] || !Array.isArray(obj.checklist[no])) return;
      var cur = checksOf(no).slice();
      obj.checklist[no].forEach(function (v, i) { if (i < byNo[no].kompeten.length) cur[i] = !!(cur[i] || v); });
      state.checklist[no] = cur;
    });
    return { added: added, skipped: skipped };
  }

  /* ---------------- Laman: Cara guna & Rujukan ---------------- */
  function renderGuide() {
    var g = D.guide;
    app.innerHTML = breadcrumb([['Utama', '#/'], ['Cara guna', '']]) +
      '<div class="page">' +
      '<h1 tabindex="-1">Cara guna nota ini</h1>' +
      '<p>' + g.paragraphs[0] + '</p>' +
      '<div class="table-wrap"><table class="guide-table"><thead><tr><th scope="col">Bahagian</th><th scope="col">Isi</th></tr></thead><tbody>' +
        g.sections.map(function (s) { return '<tr><td>' + esc(s.bahagian) + '</td><td>' + s.isi + '</td></tr>'; }).join('') +
        '<tr><td>Video rujukan</td><td>Video YouTube untuk lihat teknik atau dengar bunyi sebenar</td></tr>' +
      '</tbody></table></div>' +
      g.paragraphs.slice(1).map(function (para) { return '<p style="margin-top:1em">' + para + '</p>'; }).join('') +
      '<h2 class="section-title">Sasaran minimum O/A/P</h2>' +
      '<div class="table-wrap"><table><thead><tr><th scope="col">AP</th><th scope="col">Sasaran</th></tr></thead><tbody>' +
        targetGroups(D.procedures).map(function (gr) { return '<tr><td>' + apRangeText(gr.nos) + '</td><td>' + targetHTML(gr.t) + '</td></tr>'; }).join('') +
      '</tbody></table></div>' +
      '<p class="small muted" style="margin-top:8px">O = Observe · A = Assist · P = Perform</p>' +
      '<h2 class="section-title">Guna app ini</h2>' +
      '<ul class="content-list">' +
        '<li>Cari istilah di laman utama (contoh "crackles", "PEEP", "Pirani"); klik hasil untuk terus ke seksyen berkaitan.</li>' +
        '<li>Dalam laman AP, guna bar seksyen (Tujuan · Knowledge · Langkah · Handling · Red flags · Kompeten · Video) untuk lompat.</li>' +
        '<li>Video hanya dimuat bila diklik untuk jimat data mudah alih. Pautan "Buka di YouTube" sentiasa tersedia.</li>' +
        '<li>Tanda checklist kompeten dan tambah rekod O/A/P sebagai jejak peribadi. Data disimpan dalam pelayar peranti ini sahaja.</li>' +
        '<li>Untuk pindah ke peranti lain, guna Export dan Import di laman <a href="#/kemajuan">Kemajuan saya</a>.</li>' +
        '<li>Jangan masukkan nama pesakit, MRN atau No. IC. Rekod rasmi kekal dalam buku log bercetak.</li>' +
      '</ul>' +
      '<h2 class="section-title">Penafian</h2>' +
      '<div class="callout callout-warn"><p>Nota ini ialah rujukan pembelajaran dan bukan pengganti latihan klinikal, polisi hospital atau arahan pakar. Ikut protokol unit (NICU, PICU, ICU) jika ada perbezaan. Video rujukan adalah dari sumber luar; tonton bersama supervisor.</p></div>' +
      '</div>';
    return { title: 'Cara guna' };
  }

  function renderRefs() {
    app.innerHTML = breadcrumb([['Utama', '#/'], ['Rujukan utama', '']]) +
      '<div class="page">' +
      '<h1 tabindex="-1">Rujukan utama</h1>' +
      '<p>' + D.referencesIntro + '</p>' +
      '<div class="table-wrap"><table><thead><tr><th scope="col">Domain / AP</th><th scope="col">Rujukan</th></tr></thead><tbody>' +
        D.references.map(function (r) { return '<tr><td style="white-space:nowrap;font-weight:600">' + esc(r.domain) + '</td><td>' + r.html + '</td></tr>'; }).join('') +
      '</tbody></table></div></div>';
    return { title: 'Rujukan utama' };
  }

  function renderNotFound() {
    app.innerHTML = '<div class="page"><h1 tabindex="-1">Laman tidak dijumpai</h1><p>Pautan ini tidak sah.</p><p><a class="btn btn-primary" href="#/">Ke laman utama</a></p></div>';
    return { title: 'Tidak dijumpai' };
  }

  /* ---------------- Router ---------------- */
  var firstRender = true;
  function route() {
    var h = location.hash.replace(/^#\/?/, ''), qs = '';
    var qi = h.indexOf('?');
    if (qi >= 0) { qs = h.slice(qi + 1); h = h.slice(0, qi); }
    var parts = h.split('/').filter(Boolean).map(function (s) { try { return decodeURIComponent(s); } catch (e) { return s; } });
    var params = {};
    qs.split('&').forEach(function (kv) {
      if (!kv) return;
      var i = kv.indexOf('='), k = i < 0 ? kv : kv.slice(0, i), v = i < 0 ? '' : kv.slice(i + 1);
      try { params[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' ')); } catch (e) { params[k] = v; }
    });

    var r, navKey = '';
    if (secObserver) { secObserver(); secObserver = null; }
    if (!parts.length) { r = renderHome(''); navKey = 'home'; }
    else if (parts[0] === 'cari') { r = renderHome(parts.slice(1).join('/')); navKey = 'home'; }
    else if (parts[0] === 'domain') r = renderDomain(parts[1]);
    else if (parts[0] === 'ap' && /^\d+$/.test(parts[1] || '')) r = renderAP(parseInt(parts[1], 10), parts[2], params.q);
    else if (parts[0] === 'kemajuan') { r = renderProgress(); navKey = 'kemajuan'; }
    else if (parts[0] === 'cara-guna') { r = renderGuide(); navKey = 'cara-guna'; }
    else if (parts[0] === 'rujukan') r = renderRefs();
    else r = renderNotFound();

    document.querySelectorAll('.header-nav a').forEach(function (a) {
      if (a.getAttribute('data-nav') === navKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.title = (r && r.title ? r.title + ' — ' : '') + 'Nota Privileging Fisioterapi HTA 2026';

    var target = r && r.scrollTo ? document.getElementById(r.scrollTo) : null;
    if (target) {
      requestAnimationFrame(function () { target.scrollIntoView({ block: 'start', behavior: 'instant' }); });
    } else if (!firstRender) {
      window.scrollTo(0, 0);
    }
    if (!firstRender) {
      var h1 = app.querySelector('h1');
      if (h1) h1.focus({ preventScroll: true });
    }
    firstRender = false;
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('details').forEach(function (d) { d.setAttribute('data-was-open', d.open ? '1' : '0'); d.open = true; });
  });
  window.addEventListener('afterprint', function () {
    document.querySelectorAll('details[data-was-open]').forEach(function (d) { d.open = d.getAttribute('data-was-open') === '1'; d.removeAttribute('data-was-open'); });
  });
  route();
})();
