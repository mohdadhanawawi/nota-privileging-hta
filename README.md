# Nota Rujukan Privileging Fisioterapi HTA 2026

Webapp statik rujukan untuk 24 Advanced Procedure (AP) dalam Buku Log Privileging, Unit Fisioterapi Hospital Tunku Azizah (HTA). Direka untuk telefon (wad/NICU) dan PC hospital.

- Carian global (tajuk dan semua teks AP), dengan highlight.
- Laman setiap AP: Tujuan, Knowledge, Langkah, Handling, Red flags, Tanda kompeten (checklist), Video rujukan (lazy-load), Rekod kemajuan.
- Penjejak kemajuan peribadi O/A/P dalam `localStorage` (tiada login, tiada server), dengan Export/Import JSON.
- Mesra cetak, dark mode, mobile-first.

HTML + CSS + vanilla JavaScript sahaja. **Tiada build step, tiada npm, tiada Node.js.**

## Struktur

```
index.html                    # titik masuk (boleh dibuka terus, file://)
css/style.css
js/app.js                     # router hash, carian, checklist, rekod
data/procedures.js            # semua kandungan (window.APP_DATA)
nota-privileging-hta-2026.md  # SUMBER ASAL kandungan — jangan padam
tools/md_to_data.py           # pilihan: jana semula data dari .md
.nojekyll                     # GitHub Pages tak proses melalui Jekyll
```

## Guna tanpa internet / tanpa server

Buka `index.html` terus dalam pelayar (double-click). Semua kandungan teks berfungsi. Fon Inter/Poppins dan video YouTube perlukan internet; tanpanya app guna fon sistem dan pautan "Buka di YouTube" tetap ada.

Pautan boleh dikongsi menggunakan hash, contoh `#/ap/19`, `#/ap/20/red-flags`, `#/domain/paeds-cardio`, `#/kemajuan`.

## Kemas kini kandungan

`nota-privileging-hta-2026.md` ialah satu-satunya sumber kandungan klinikal. Dua cara:

1. **Edit terus `data/procedures.js`** (sesuai untuk PC hospital — cuma perlukan text editor, contoh Notepad atau editor di GitHub web). Setiap AP ialah satu objek dalam `procedures`. Teks dalam bentuk HTML ringkas (`<strong>`, `<em>`, `<a>`). Item bersarang: `{ "html": "...", "sub": ["...", "..."] }`. Untuk video, `youtubeId` mesti 11 aksara (bahagian `v=` dalam URL). Jika edit di sini, kemas kini juga fail `.md` supaya kedua-duanya selari.
2. **Edit fail `.md`, kemudian jana semula** di mana-mana komputer yang ada Python 3 (tiada pakej tambahan):
   ```
   python3 tools/md_to_data.py
   ```
   Skrip mengesahkan ada tepat 24 AP dan setiap pautan YouTube diekstrak (`youtubeId`). Ikut format markdown sedia ada (`### AP n · Tajuk`, `**Knowledge diperlukan**`, senarai `-` / `1.`, video `- [Tajuk](URL): nota`).

Data kemajuan staf disimpan di pelayar setiap peranti dengan kunci `nota-privileging-hta-2026:v1`; mengemas kini kandungan tidak memadamnya.

## Aktifkan GitHub Pages

1. Pastikan fail ini berada di branch `main` (merge PR jika kerja dibuat di branch lain).
2. Repo → **Settings** → **Pages**.
3. **Build and deployment** → Source: **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)** → **Save**.
5. Tunggu 1–2 minit. URL: `https://<username>.github.io/<nama-repo>/`

Untuk repo ini: <https://mohdadhanawawi.github.io/nota-privileging-hta/>

Tiada GitHub Actions diperlukan. Semua path adalah relatif, jadi app berfungsi di subpath.

## Privasi

Jangan masukkan nama pesakit, MRN atau No. IC dalam rekod. App menyekat catatan yang kelihatan seperti nombor IC/MRN. Rekod rasmi kekal dalam buku log bercetak.

## Penafian

Nota ini ialah rujukan pembelajaran dan bukan pengganti latihan klinikal, polisi hospital atau arahan pakar. Ikut protokol unit (NICU, PICU, ICU) jika ada perbezaan. Video rujukan adalah dari sumber luar; tonton bersama supervisor.
