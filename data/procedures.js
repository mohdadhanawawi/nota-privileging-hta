/* JANA AUTOMATIK daripada nota-privileging-hta-2026.md oleh tools/md_to_data.py.
 * Boleh juga diedit terus. Jangan ubah fakta klinikal tanpa semakan supervisor. */
window.APP_DATA = {
 "meta": {
  "title": "Nota Rujukan Privileging Fisioterapi HTA 2026",
  "subtitle": "Unit Fisioterapi · Hospital Tunku Azizah · Versi 2026",
  "source": "nota-privileging-hta-2026.md"
 },
 "guide": {
  "paragraphs": [
   "Nota ini ialah rujukan ringkas untuk 24 Advanced Procedure (AP) dalam Buku Log Privileging Fisioterapi HTA 2026. Setiap AP disusun dengan struktur yang sama supaya staf tahu apa yang perlu dibaca, dibuat dan ditunjukkan kepada supervisor.",
   "Privilege hanya diluluskan pada Level 4 (Independent) atau Level 5 (Expert). Kualiti prestasi lebih penting daripada bilangan kes, jadi gunakan bahagian \"Tanda kompeten\" sebagai checklist sendiri sebelum minta supervisor nilai.",
   "Nota ini bukan pengganti latihan klinikal, polisi hospital atau arahan pakar. Ikut protokol unit dan wad (contoh: NICU, PICU, ICU) bila ada perbezaan.",
   "Setiap AP juga ada senarai <strong>Video rujukan</strong> (YouTube) untuk lihat teknik atau dengar bunyi sebenar. Video ini dari luar negara, jadi ada amalan yang mungkin berbeza dengan protokol HTA. Tonton bersama supervisor dan ikut nota ini serta protokol unit jika ada percanggahan."
  ],
  "sections": [
   {
    "bahagian": "Tujuan",
    "isi": "Apa yang prosedur ini nak capai"
   },
   {
    "bahagian": "Knowledge diperlukan",
    "isi": "Teori dan fakta yang mesti difahami sebelum buat"
   },
   {
    "bahagian": "Langkah prosedur",
    "isi": "Turutan kerja dari persediaan sampai dokumentasi"
   },
   {
    "bahagian": "Manual / handling skill",
    "isi": "Teknik tangan, posisi, cue dan tips praktikal"
   },
   {
    "bahagian": "Red flags & kontraindikasi",
    "isi": "Bila perlu stop, ubah suai atau rujuk"
   },
   {
    "bahagian": "Tanda kompeten (Level 4)",
    "isi": "Apa yang supervisor cari sebelum sign Level 4"
   }
  ]
 },
 "domains": [
  {
   "id": "cardio",
   "name": "Cardiorespiratory",
   "fullName": "Physiotherapy in Cardiorespiratory (AP 1–8)",
   "apRange": [
    1,
    8
   ],
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "intro": "Semua AP dalam domain ini ada sasaran minimum 1 Observe dan 4 Perform. Fokusnya ialah membaca data pesakit dengan betul, kemudian terjemahkan kepada keputusan rawatan."
  },
  {
   "id": "msk",
   "name": "Musculoskeletal",
   "fullName": "Physiotherapy in Musculoskeletal (AP 9–12)",
   "apRange": [
    9,
    12
   ],
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "intro": "AP 9 perlu 1 Observe + 4 Perform; AP 10–12 perlu 1 Observe + 1 Assist + 3 Perform. Domain ini paling bergantung pada handling skill, jadi latih teknik pada rakan sekerja dahulu sebelum pesakit."
  },
  {
   "id": "neuro",
   "name": "Neurology",
   "fullName": "Physiotherapy in Neurology (AP 13)",
   "apRange": [
    13,
    13
   ],
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "intro": "Sasaran minimum 1 Observe + 1 Assist + 3 Perform."
  },
  {
   "id": "paeds-cardio",
   "name": "Paediatrics Cardiorespiratory",
   "fullName": "Physiotherapy in Paediatrics (Cardiorespiratory) (AP 14–20)",
   "apRange": [
    14,
    20
   ],
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "intro": "Semua AP di sini perlu 1 Observe + 4 Perform. Prinsip dewasa (AP 1–4) masih terpakai, tetapi anatomi, nilai normal dan toleransi bayi sangat berbeza — setiap AP di bawah fokus pada perbezaan itu."
  },
  {
   "id": "paeds-neuro",
   "name": "Paediatrics Neuromusculoskeletal",
   "fullName": "Physiotherapy in Paediatrics (Neuromusculoskeletal) (AP 21–24)",
   "apRange": [
    21,
    24
   ],
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "intro": "Semua AP di sini perlu 1 Observe + 1 Assist + 3 Perform. Ibu bapa ialah \"co-therapist\" — kejayaan rawatan bergantung pada program rumah yang mereka faham dan boleh buat dengan selamat."
  }
 ],
 "procedures": [
  {
   "no": 1,
   "domainId": "cardio",
   "title": "Interpretation and Analysis of Chest Auscultation",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Kenal pasti bunyi nafas normal dan abnormal, kaitkan dengan patologi, dan tentukan sama ada perlu airway clearance, lung expansion atau rujuk.",
   "knowledge": [
    "Anatomi permukaan: lobus dan segmen paru-paru (anterior, lateral, posterior), fissure, landmark (angle of Louis, T4, T10, mid-axillary line).",
    "Bunyi normal: vesicular (periferi), bronchovesicular (antara scapula / 1st–2nd ICS), bronchial (atas trakea).",
    {
     "html": "Bunyi abnormal dan maksudnya:",
     "sub": [
      "Reduced / absent breath sound: atelectasis, effusion, pneumothorax, hyperinflation, obesiti.",
      "Bronchial breathing di periferi: consolidation.",
      "Coarse crackles (early inspiratory / expiratory): sekresi dalam airway besar — indikasi airway clearance.",
      "Fine crackles (late inspiratory): alveoli terbuka semula — atelectasis, pulmonary oedema, fibrosis.",
      "Wheeze (monophonic / polyphonic): bronchospasm, obstruksi. Stridor: obstruksi upper airway — kecemasan.",
      "Pleural rub: inflamasi pleura."
     ]
    },
    "Added sound vs transmitted sound (bunyi dari upper airway / tiub ventilator)."
   ],
   "langkah": [
    "Semak nota, CXR terkini, observasi (RR, SpO2, HR) dan mod ventilasi.",
    "Kebersihan tangan, bersihkan stethoscope dengan alcohol swab.",
    "Posisi pesakit: duduk (jika boleh) atau side-lying untuk zon posterior. Dedahkan dada dengan maruah dijaga.",
    "Minta pesakit nafas dalam melalui mulut (bukan hidung), sedikit lebih dalam dari biasa.",
    "Auscultate secara sistematik atas–bawah, kiri–kanan, bandingkan simetri. Sekurang-kurangnya satu kitaran nafas penuh setiap titik.",
    "Nilai: intensiti, kualiti, added sound, timing (inspirasi/ekspirasi), lokasi.",
    "Ulang selepas batuk atau rawatan untuk lihat perubahan (crackles yang hilang selepas batuk = sekresi).",
    "Dokumentasi mengikut zon dan kaitkan dengan CXR dan klinikal."
   ],
   "handling": [
    "Guna diaphragm untuk bunyi frekuensi tinggi (nafas, crackles); letak terus atas kulit, tekanan sederhana.",
    "Elak bunyi geseran baju, rambut dada, tiub; pegang chest piece dengan stabil.",
    "Pesakit ventilated: dengar semasa breath dari ventilator, abaikan bunyi water in tubing."
   ],
   "redFlags": [
    "Absent breath sound satu sisi + desaturasi / tracheal deviation: syak pneumothorax — maklumkan doktor segera.",
    "Stridor baru, silent chest pada asthma: kecemasan."
   ],
   "kompeten": [
    "Auscultation sistematik tanpa prompt, kenal semua bunyi utama.",
    "Boleh kaitkan dapatan dengan CXR/ABG dan pilih intervensi yang tepat.",
    "Nilai semula selepas rawatan dan dokumentasi outcome."
   ],
   "videos": [
    {
     "title": "Lung Auscultation Landmarks, Sounds, Placement",
     "url": "https://www.youtube.com/watch?v=KNrcG077brQ",
     "youtubeId": "KNrcG077brQ",
     "note": "titik auscultation anterior/posterior dan klip audio setiap bunyi normal (bronchial, bronchovesicular, vesicular) dan abnormal (coarse/fine crackles, wheeze, stridor, pleural rub)."
    },
    {
     "title": "Lung Sounds Normal & Abnormal",
     "url": "https://www.youtube.com/watch?v=18-4DMvt3LI",
     "youtubeId": "18-4DMvt3LI",
     "note": "audio bunyi nafas normal dengan penerangan pitch dan durasi."
    },
    {
     "title": "Lung Sounds (Abnormal): Crackles, Wheezes, Stridor, Pleural Friction Rub",
     "url": "https://www.youtube.com/watch?v=U8byn2NT_lo",
     "youtubeId": "U8byn2NT_lo",
     "note": "perbandingan bunyi abnormal satu demi satu."
    }
   ],
   "videoTip": "guna headphone untuk dengar bunyi dengan jelas",
   "extraNotes": []
  },
  {
   "no": 2,
   "domainId": "cardio",
   "title": "Interpretation and Analysis of Chest X-Ray",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Baca CXR secara sistematik untuk kenal pasti patologi yang mempengaruhi pilihan teknik dan posisi rawatan fisioterapi.",
   "knowledge": [
    "Projeksi: PA vs AP (AP besarkan jantung), supine vs erect (air-fluid level).",
    "Kualiti filem (RIPE): Rotation, Inspiration (5–6 anterior ribs / 9–10 posterior ribs), Projection, Exposure.",
    "Anatomi radiologi: trakea, carina, hilum, kontur jantung, hemidiaphragm (kanan lebih tinggi 1–2 cm), costophrenic angle.",
    "Silhouette sign untuk lokalisasi lobus (contoh: kehilangan sempadan kanan jantung = right middle lobe).",
    "Corak patologi: consolidation (air bronchogram), collapse (volume loss, shift ke sisi sama), effusion (meniscus, shift ke sisi bertentangan jika besar), pneumothorax (tiada lung marking, visceral pleural line), hyperinflation, pulmonary oedema (bat-wing, Kerley B).",
    "Kenal peralatan: ETT (hujung 3–5 cm atas carina), central line, chest drain, NGT, pacemaker."
   ],
   "langkah": [
    "Sahkan nama, tarikh dan masa filem; bandingkan dengan filem sebelum.",
    "Nilai kualiti (RIPE).",
    "Baca secara sistematik ABCDE: Airway, Bones &amp; soft tissue, Cardiac, Diaphragm, Everything else (lung fields, devices).",
    "Kenal pasti lokasi lesi dengan silhouette sign.",
    "Kaitkan dengan auscultation dan klinikal.",
    "Terjemahkan kepada plan: posisi drainage, sisi untuk positioning, kontraindikasi (contoh: pneumothorax tanpa drain)."
   ],
   "handling": [
    "Kemahiran visual lebih penting: guna PACS dengan zoom dan windowing.",
    "Biasakan bercakap dalam format laporan ringkas kepada supervisor."
   ],
   "redFlags": [
    "Pneumothorax tidak berdrain: elak positive pressure (IPPB, manual hyperinflation) dan maklumkan doktor.",
    "ETT terlalu dalam (masuk bronkus kanan): maklumkan.",
    "Effusion besar / haemothorax: physio tak boleh drain — rujuk."
   ],
   "kompeten": [
    "Baca sistematik tanpa terlepas peralatan atau kualiti filem.",
    "Lokalisasi lobus dengan betul dan pilih posisi rawatan yang sepadan.",
    "Kenal pasti kontraindikasi dari CXR."
   ],
   "videos": [
    {
     "title": "How to Read a Chest X-Ray: RIPE & ABCDE",
     "url": "https://www.youtube.com/watch?v=XrQdru3f7Ps",
     "youtubeId": "XrQdru3f7Ps",
     "note": "semakan kualiti filem (RIPE) dan bacaan sistematik ABCDE."
    },
    {
     "title": "Chest X-Ray Interpretation Made Easy (With Pathology Examples)",
     "url": "https://www.youtube.com/watch?v=30leU8DWAV8",
     "youtubeId": "30leU8DWAV8",
     "note": "contoh consolidation, collapse, effusion, pneumothorax."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 3,
   "domainId": "cardio",
   "title": "Interpretation and Analysis of Arterial Blood Gas (ABG)",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Tafsir status asid-bes dan oksigenasi untuk menilai keterukan, keberkesanan rawatan dan keperluan eskalasi.",
   "knowledge": [
    "Nilai normal (dewasa): pH 7.35–7.45; PaCO2 35–45 mmHg (4.7–6.0 kPa); HCO3 22–26 mmol/L; BE −2 hingga +2; PaO2 80–100 mmHg (10.7–13.3 kPa) pada udara bilik; SaO2 &gt;95%.",
    "Pediatrik dan neonat ada julat berbeza (contoh: target PaO2 neonat lebih rendah) — rujuk protokol NICU/PICU.",
    "Fisiologi: ventilation (CO2) vs oxygenation (O2); kompensasi respiratori vs metabolik.",
    "P/F ratio (PaO2/FiO2): &lt;300 kecederaan paru, &lt;200 ARDS sederhana, &lt;100 teruk.",
    "Type 1 respiratory failure (PaO2 rendah, PaCO2 normal/rendah) vs Type 2 (PaO2 rendah, PaCO2 tinggi)."
   ],
   "langkah": [
    "Semak FiO2 / mod O2 dan masa sampel diambil berbanding rawatan.",
    "Langkah 1 – pH: acidaemia, alkalaemia atau normal.",
    "Langkah 2 – PaCO2: respiratori sebab utama jika bergerak selari dengan pH (CO2 tinggi + pH rendah = respiratory acidosis).",
    "Langkah 3 – HCO3/BE: metabolik sebab utama atau kompensasi.",
    "Langkah 4 – kompensasi: tiada, separa atau penuh.",
    "Langkah 5 – oksigenasi: PaO2 berbanding FiO2, kira P/F ratio.",
    "Kaitkan dengan klinikal dan tentukan implikasi kepada fisioterapi (contoh: Type 2 → fokus clearance dan ventilasi; Type 1 → recruitment dan positioning)."
   ],
   "handling": [
    "Kemahiran tafsiran — latih dengan kes sebenar dan tulis tafsiran penuh dalam nota."
   ],
   "redFlags": [
    "pH &lt;7.25 dengan PaCO2 meningkat: risiko kegagalan respiratori — maklumkan pasukan perubatan sebelum rawatan berat.",
    "Lactate tinggi / metabolic acidosis teruk: pertimbang tangguh mobilisasi intensif."
   ],
   "kompeten": [
    "Tafsir lengkap 5 langkah dengan betul secara konsisten.",
    "Kira P/F ratio dan kaitkan dengan plan rawatan serta keputusan eskalasi."
   ],
   "videos": [
    {
     "title": "ABG Interpretation – Geeky Medics",
     "url": "https://www.youtube.com/watch?v=nBRC1A87aDs",
     "youtubeId": "nBRC1A87aDs",
     "note": "pendekatan berstruktur PaO2 → pH → PaCO2 → HCO3 → kompensasi, dengan kuiz di hujung."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 4,
   "domainId": "cardio",
   "title": "Interpretation of Ventilator Setting (SIMV / CPAP / BiPAP)",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Faham mod dan parameter ventilator supaya rawatan fisioterapi selamat dan boleh menilai tindak balas pesakit.",
   "knowledge": [
    "SIMV: nafas mandatori pada kadar set (volume / pressure control) + nafas spontan disokong pressure support.",
    "CPAP: tekanan positif berterusan, semua nafas spontan; tingkatkan FRC, kurangkan atelectasis.",
    "BiPAP / NIV: IPAP (bantu ventilasi, turunkan CO2) dan EPAP (kekalkan alveoli terbuka, perbaiki oksigenasi).",
    "Parameter: FiO2, PEEP/EPAP, PIP / IPAP, Vt (6–8 mL/kg ideal body weight dewasa; 4–6 mL/kg neonat), RR set vs RR total, I:E ratio, trigger.",
    "Monitor: peak pressure, plateau, minute volume, leak, alarms."
   ],
   "langkah": [
    "Baca mod, parameter set dan bacaan sebenar pada skrin.",
    "Semak trend dan alarm sejak syif lepas.",
    "Kenal pasti kebergantungan pesakit (contoh: FiO2 &gt;0.6 atau PEEP &gt;10 = sokongan tinggi).",
    "Pastikan setting mengikut target klinikal dan bincang dengan pasukan ICU jika ada perubahan.",
    "Pantau semasa rawatan: Vt, tekanan, SpO2, synchrony; nilai selepas rawatan.",
    "Dokumentasi mod dan parameter dalam nota."
   ],
   "handling": [
    "Jangan ubah setting tanpa protokol / arahan; hanya pegawai yang berkelayakan.",
    "Semasa positioning, sokong tiub ventilator untuk elak extubation atau disconnection."
   ],
   "redFlags": [
    "PEEP tinggi: elak disconnection (hilang recruitment).",
    "Peningkatan peak pressure mendadak: syak obstruksi / bronchospasm / pneumothorax.",
    "Patient-ventilator asynchrony berterusan, desaturasi: hentikan dan maklumkan."
   ],
   "kompeten": [
    "Terangkan mod dan semua parameter dengan tepat, kenal tahap sokongan pesakit.",
    "Pantau dan bertindak atas perubahan bacaan semasa rawatan."
   ],
   "videos": [
    {
     "title": "Ventilator Modes Explained Simply: CMV, SIMV, PSV, CPAP, BiPAP",
     "url": "https://www.youtube.com/watch?v=bBkZRe3tjys",
     "youtubeId": "bBkZRe3tjys",
     "note": "asas mod ventilator dalam bahasa mudah."
    },
    {
     "title": "Ventilator Modes Explained (In Less Than 10 Minutes)",
     "url": "https://www.youtube.com/watch?v=ofvpxHZnUl0",
     "youtubeId": "ofvpxHZnUl0",
     "note": "ringkasan pantas A/C, SIMV, PRVC, CPAP/PS."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 5,
   "domainId": "cardio",
   "title": "Prescription of Treatment for Cardiorespiratory Conditions",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Bina plan rawatan berdasarkan masalah utama (sekresi, volume paru, kerja pernafasan, dekondisi) dengan dos dan outcome yang jelas.",
   "knowledge": [
    {
     "html": "Masalah dan pilihan rawatan:",
     "sub": [
      "Sekresi: ACBT, PEP / OPEP, autogenic drainage, postural drainage, percussion / vibration, MHI, suction.",
      "Volume paru berkurang: positioning, deep breathing, incentive spirometry, mobilisasi, CPAP.",
      "Kerja pernafasan tinggi: positioning (high side-lying, forward lean), breathing control, pacing.",
      "Dekondisi: early mobility, exercise prescription."
     ]
    },
    "Bukti dan kontraindikasi setiap teknik.",
    "FITT untuk exercise: Frequency, Intensity, Time, Type."
   ],
   "langkah": [
    "Assessment penuh: subjektif, observasi, auscultation, CXR, ABG, fungsi.",
    "Senarai masalah mengikut keutamaan.",
    "Set goal SMART (jangka pendek dan panjang).",
    "Pilih teknik, dos dan posisi; nyatakan sebab.",
    "Laksana, pantau dan nilai semula outcome (SpO2, bunyi nafas, sekresi, RR).",
    "Ubah suai plan dan dokumentasi; ajar pesakit/penjaga program kendiri."
   ],
   "handling": [
    "Percussion: tangan cupped, ritmik, atas tuala; vibration semasa ekspirasi.",
    "Positioning: sokongan bantal, jaga lines dan tiub."
   ],
   "redFlags": [
    "Kontraindikasi percussion/vibration: coagulopathy, fracture rusuk, osteoporosis teruk, haemoptysis aktif, ketidakstabilan kardiovaskular.",
    "Head-down tilt: elak pada peningkatan ICP, GERD teruk, sesak teruk."
   ],
   "kompeten": [
    "Plan bersandar kepada clinical reasoning, bukan rutin.",
    "Dos jelas, outcome diukur, ubah suai mengikut tindak balas."
   ],
   "videos": [
    {
     "title": "Physio guides you through ACBT",
     "url": "https://www.youtube.com/watch?v=4mXBcA6AI_4",
     "youtubeId": "4mXBcA6AI_4",
     "note": "langkah ACBT (breathing control, thoracic expansion, huff) dan bila guna."
    },
    {
     "title": "Chest Physiotherapy – OPENPediatrics",
     "url": "https://www.youtube.com/watch?v=MGrsdLzhhvE",
     "youtubeId": "MGrsdLzhhvE",
     "note": "posisi, percussion, vibration dan postural drainage."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 6,
   "domainId": "cardio",
   "title": "Exercise Tolerance Test – 6-Minute Walk Test (6MWT)",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Ukur kapasiti fungsi submaksimal untuk baseline, prognosis dan nilai keberkesanan rawatan.",
   "knowledge": [
    "Protokol ATS 2002: koridor 30 m rata, tanda setiap 3 m, cone di hujung.",
    "Indikasi: COPD, heart failure, pulmonary hypertension, pre/post operasi, pulmonary rehab.",
    "Kontraindikasi mutlak: unstable angina atau MI dalam 1 bulan. Relatif: HR rehat &gt;120, SBP &gt;180, DBP &gt;100.",
    "Persamaan normatif (contoh Enright &amp; Sherrill) dan MCID (~30 m dalam penyakit paru kronik).",
    "Skala Borg (dyspnoea dan fatigue)."
   ],
   "langkah": [
    "Pesakit rehat 10 minit sebelum ujian; ukur HR, SpO2, BP, Borg.",
    "Arahan standard: \"Jalan sejauh yang boleh dalam 6 minit, ulang-alik koridor; boleh perlahan atau berhenti jika perlu.\"",
    "Mula timer; guna ayat galakan standard setiap minit sahaja (tiada galakan tambahan).",
    "Kira lap; jangan jalan seiring pesakit.",
    "Pada 6 minit, minta berhenti; tandakan lokasi.",
    "Ukur HR, SpO2, Borg segera; catat jarak, rehat, simptom.",
    "Kira % predicted dan bandingkan dengan ujian lepas."
   ],
   "handling": [
    "Bawa oximeter mudah alih (atau ikut di belakang) tanpa mempengaruhi pace.",
    "Jika guna O2, catat jenis dan flow serta siapa yang bawa tong."
   ],
   "redFlags": [
    "Hentikan jika: chest pain, dyspnoea tak tertahan, kekejangan kaki, staggering, diaphoresis, pucat, SpO2 jatuh bawah threshold unit (biasanya &lt;85%)."
   ],
   "kompeten": [
    "Ikut protokol standard sepenuhnya, termasuk ayat galakan.",
    "Saring kontraindikasi, hentikan ujian dengan betul dan tafsir keputusan."
   ],
   "videos": [
    {
     "title": "6 Minute Walk Test Instructional Video",
     "url": "https://www.youtube.com/watch?v=nXuJIs25z1U",
     "youtubeId": "nXuJIs25z1U",
     "note": "setup koridor, arahan dan pengukuran."
    },
    {
     "title": "6-Minute Walk Test – PT demonstration",
     "url": "https://www.youtube.com/watch?v=Y4HyVv0Ll6s",
     "youtubeId": "Y4HyVv0Ll6s",
     "note": "tujuan, cara laksana dan populasi sasaran."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 7,
   "domainId": "cardio",
   "title": "Execution of Early Mobility in ICU",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Mobilisasi pesakit kritikal secara selamat untuk kurangkan ICU-acquired weakness, tempoh ventilasi dan tempoh tinggal.",
   "knowledge": [
    "Kriteria keselamatan (Hodgson et al. 2014, sistem traffic light): respiratori (FiO2, PEEP, SpO2, RR), kardiovaskular (MAP, HR, inotrop, arrhythmia), neurologi (RASS, ICP), lain-lain (lines, perdarahan, fraktur).",
    "Panduan umum: FiO2 ≤0.6, PEEP ≤10, SpO2 ≥90%, MAP 65–110, HR 40–130, RASS −2 hingga +2 untuk aktiviti aktif.",
    "Tangga mobiliti: passive ROM → active exercise di katil → duduk tepi katil → berdiri → marching → transfer ke kerusi → berjalan. Skala ICU Mobility Scale (IMS) 0–10.",
    "Penilaian sedasi (RASS) dan delirium (CAM-ICU)."
   ],
   "langkah": [
    "Saring kriteria keselamatan; bincang dengan doktor/jururawat ICU.",
    "Rancang aktiviti sasaran dan bilangan staf diperlukan.",
    "Amankan semua lines, ETT/trach, drain, kateter; extend tubing; siapkan alat (tilt table, kerusi, walking frame, portable ventilator jika perlu).",
    "Baseline vital signs.",
    "Laksana secara berperingkat; pantau berterusan.",
    "Nilai tindak balas, kembalikan pesakit ke posisi selamat.",
    "Dokumentasi IMS, tempoh, toleransi, insiden."
   ],
   "handling": [
    "Seorang staf khusus jaga airway dan ventilator tubing semasa transfer.",
    "Guna teknik sit-to-stand dengan facilitation di pelvis dan knee block.",
    "Komunikasi jelas (\"1, 2, 3, angkat\") dan peranan ditetapkan sebelum mula."
   ],
   "redFlags": [
    "Hentikan jika: desaturasi berterusan, arrhythmia baru, MAP di luar julat, chest pain, agitasi, disconnection airway, jatuh."
   ],
   "kompeten": [
    "Saringan keselamatan lengkap dan didokumentasi.",
    "Koordinasi pasukan dan pengurusan lines tanpa insiden.",
    "Progres aktiviti mengikut toleransi."
   ],
   "videos": [
    {
     "title": "Mobilising a ventilated patient",
     "url": "https://www.youtube.com/watch?v=IjzPjNolg0s",
     "youtubeId": "IjzPjNolg0s",
     "note": "pasukan physio mobilisasi pesakit yang masih bersambung ventilator — perhatikan pengurusan tiub dan peranan setiap staf."
    },
    {
     "title": "Early Mobility in the ICU (Short version)",
     "url": "https://www.youtube.com/watch?v=woofpnw-u74",
     "youtubeId": "woofpnw-u74",
     "note": "contoh progres mobiliti pesakit critical illness."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 8,
   "domainId": "cardio",
   "title": "Execution of Pulmonary Rehabilitation",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Program exercise dan edukasi berstruktur untuk perbaiki dyspnoea, kapasiti fungsi dan kualiti hidup pesakit penyakit paru kronik.",
   "knowledge": [
    "Komponen (BTS 2013): exercise training (aerobic + resistance), edukasi, breathing strategies, self-management.",
    "Tempoh lazim 6–12 minggu, 2–3 sesi diselia seminggu.",
    "Preskripsi intensiti: 60–80% dari 6MWT/ISWT speed, atau Borg dyspnoea 4–6; resistance 60–70% 1RM.",
    "Outcome: 6MWT/ISWT, CAT, mMRC, SGRQ."
   ],
   "langkah": [
    "Assessment awal: sejarah, outcome baseline, saringan kardiak.",
    "Tetapkan goal individu.",
    "Preskripsi FITT aerobic (berjalan / basikal) dan resistance (upper + lower limb).",
    "Ajar breathing control, pursed-lip breathing, pacing, energy conservation dan teknik clearance.",
    "Pantau sesi: SpO2, HR, Borg; progres beban.",
    "Nilai semula pada akhir program dan rancang maintenance di rumah."
   ],
   "handling": [
    "Demonstrasi teknik exercise dan postur yang betul; guna O2 supplement jika desaturasi semasa latihan."
   ],
   "redFlags": [
    "Unstable angina, aritmia tak terkawal, exacerbation akut: tangguh.",
    "SpO2 &lt;88% semasa latihan: kurangkan intensiti atau tambah O2 mengikut arahan."
   ],
   "kompeten": [
    "Preskripsi dos berdasarkan ujian, bukan anggaran.",
    "Progres program dan ukur outcome sebelum/selepas."
   ],
   "videos": [
    {
     "title": "Exercises for people with lung conditions",
     "url": "https://www.youtube.com/watch?v=moScfk1fGX8",
     "youtubeId": "moScfk1fGX8",
     "note": "program exercise oleh physio pulmonary rehab."
    },
    {
     "title": "Pulmonary Rehab: Daily Fitness & Exercise – Toronto Western Hospital",
     "url": "https://www.youtube.com/watch?v=nwxy9FLBMjk",
     "youtubeId": "nwxy9FLBMjk",
     "note": "program latihan di rumah untuk penyakit paru kronik."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 9,
   "domainId": "msk",
   "title": "Hand Management (Assessment and Treatment)",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Nilai dan rawat masalah tangan (fraktur, tendon injury, nerve injury, kekakuan, inflamasi) untuk pulihkan fungsi genggam dan aktiviti harian.",
   "knowledge": [
    "Anatomi: tulang carpal/metacarpal/phalanx, sendi (wrist, CMC, MCP, PIP, DIP), tendon flexor (zon I–V) dan extensor (zon I–VIII), saraf median/ulnar/radial.",
    "Kondisi lazim: distal radius fracture, flexor/extensor tendon repair, carpal tunnel, de Quervain, trigger finger, CRPS, kontraktur.",
    "Fasa penyembuhan tisu dan protokol tendon (contoh: early active motion vs Kleinert / controlled passive).",
    "Posisi selamat splint: intrinsic-plus (wrist 20–30° extension, MCP 70–90° flexion, IP extension)."
   ],
   "langkah": [
    "Subjektif: mekanisme, tarikh operasi, protokol surgeon, tangan dominan, pekerjaan, kesakitan.",
    "Observasi: edema, parut, warna, atrofi, deformiti (claw, swan-neck, boutonnière).",
    "Ukur: AROM/PROM dengan goniometer jari, edema (figure-of-8 / circumferential), grip &amp; pinch strength (dynamometer / pinch gauge, bila dibenarkan), sensasi (monofilament, 2-point discrimination).",
    "Ujian khas: Phalen, Tinel, Finkelstein, Froment.",
    "Outcome fungsi: DASH / QuickDASH, PRWE.",
    "Rawatan: kawalan edema (elevation, retrograde massage, compression), ROM (tendon gliding, blocking exercise), scar management, mobilisasi sendi, strengthening berperingkat, splinting, latihan fungsi.",
    "Program rumah dan nilai semula."
   ],
   "handling": [
    "Stabilkan sendi proksimal semasa blocking exercise untuk isolasi FDS/FDP.",
    "Retrograde massage dari distal ke proksimal dengan tangan dielevasi.",
    "Ukuran goniometer jari dorsal, konsisten posisi wrist."
   ],
   "redFlags": [
    "Jangan buat passive extension / resisted flexion awal selepas flexor tendon repair — risiko rupture.",
    "Tanda compartment syndrome, infeksi, CRPS (sakit tak sepadan, perubahan warna/suhu): rujuk segera."
   ],
   "kompeten": [
    "Assessment lengkap dengan ukuran objektif yang boleh diulang.",
    "Ikut protokol post-op dengan betul mengikut fasa.",
    "Program rumah yang jelas dan selamat."
   ],
   "videos": [
    {
     "title": "Wrist and hand flexor tendon glides",
     "url": "https://www.youtube.com/watch?v=XkKea7OEZ6Q",
     "youtubeId": "XkKea7OEZ6Q",
     "note": "demonstrasi tendon gliding exercise."
    },
    {
     "title": "Exercises to Improve Finger Mobility — Flexor Tendon Injury",
     "url": "https://www.youtube.com/watch?v=_wsHgphvII4",
     "youtubeId": "_wsHgphvII4",
     "note": "latihan jari selepas flexor tendon injury (ikut protokol surgeon dan fasa penyembuhan)."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 10,
   "domainId": "msk",
   "title": "Neurodynamic Test – ULTT / SLR / Prone Knee Bend",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Uji mekanosensitiviti sistem saraf untuk membezakan punca neural daripada punca tisu lain.",
   "knowledge": [
    "Konsep neurodynamics (Butler, Shacklock): saraf bergerak dan menerima tegangan; sensitiviti meningkat bila ada patologi.",
    "Kriteria positif: reproduksi simptom pesakit + structural differentiation mengubah simptom + asimetri dengan sisi lain.",
    {
     "html": "Urutan komponen ujian:",
     "sub": [
      "ULTT1 (median): shoulder depression → abduction 110° → wrist &amp; finger extension → forearm supination → shoulder lateral rotation → elbow extension; differentiation: cervical side flexion.",
      "ULTT2a (median), ULTT2b (radial), ULTT3 (ulnar) dengan komponen berbeza.",
      "SLR (sciatic/tibial): hip flexion dengan knee lurus; sensitizer ankle dorsiflexion (tibial), plantarflexion + inversion (common peroneal), neck flexion.",
      "Prone Knee Bend (femoral, L2–L4): knee flexion dalam prone; differentiation dengan hip extension atau slump side-lying."
     ]
    },
    "Bezakan neural vs hamstring tightness (sensitizer distal / proksimal)."
   ],
   "langkah": [
    "Terangkan ujian dan minta pesakit beritahu bila simptom muncul.",
    "Uji sisi tidak sakit dahulu sebagai baseline.",
    "Tambah komponen satu demi satu; berhenti pada onset simptom (P1) atau rintangan.",
    "Buat structural differentiation pada komponen jauh dari kawasan simptom.",
    "Catat sudut, simptom, respon differentiation.",
    "Gunakan sebagai baseline dan untuk rawatan (slider/tensioner) jika sesuai."
   ],
   "handling": [
    "Posisi badan terapis menyokong anggota sepenuhnya; tangan stabil pada shoulder girdle semasa ULTT.",
    "SLR: satu tangan di bawah tumit, satu di atas patella untuk kekal knee extension; elak rotasi hip.",
    "Gerakan perlahan dan terkawal."
   ],
   "redFlags": [
    "Cauda equina, defisit neurologi progresif, cord compression: jangan uji, rujuk.",
    "Sangat irritable: hadkan ke onset simptom pertama sahaja."
   ],
   "kompeten": [
    "Urutan komponen betul dan structural differentiation dibuat.",
    "Tafsir positif/negatif dengan kriteria yang betul."
   ],
   "videos": [
    {
     "title": "Upper Limb Tension Tests (ULTT1 / median)",
     "url": "https://www.youtube.com/watch?v=UNAeWcSQJzg",
     "youtubeId": "UNAeWcSQJzg",
     "note": "urutan komponen ULTT1 dan tafsiran."
    },
    {
     "title": "Straight Leg Raise & Femoral Nerve Stretch Test – OSCE Guide",
     "url": "https://www.youtube.com/watch?v=94cQMo8T4-k",
     "youtubeId": "94cQMo8T4-k",
     "note": "SLR dan femoral nerve stretch langkah demi langkah."
    },
    {
     "title": "Prone Knee Bend Test",
     "url": "https://www.youtube.com/watch?v=XpAjTHGI3TU",
     "youtubeId": "XpAjTHGI3TU",
     "note": "demonstrasi PKB untuk femoral nerve."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 11,
   "domainId": "msk",
   "title": "Gait Analysis – Stance Phase and Swing Phase",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Kenal pasti deviasi gait, punca dan implikasi untuk rawatan atau preskripsi alat bantuan.",
   "knowledge": [
    "Kitaran gait: stance ~60%, swing ~40%; double support ~20%.",
    "Fasa (Rancho Los Amigos): initial contact, loading response, midstance, terminal stance, pre-swing, initial swing, mid swing, terminal swing.",
    "Julat sendi normal setiap fasa (contoh: knee ~60° flexion pada initial swing; ankle ~10° dorsiflexion pada terminal stance).",
    "Parameter spatiotemporal: cadence, step length, stride length, base of support, kelajuan.",
    "Deviasi lazim: Trendelenburg (gluteus medius), foot drop / steppage, circumduction, hip hiking, genu recurvatum, antalgic, crouch gait."
   ],
   "langkah": [
    "Pastikan ruang jalan cukup (≥10 m) dan pesakit pakai pakaian yang dedahkan sendi.",
    "Perhatikan dari sagittal (sisi) dan frontal (depan/belakang).",
    "Analisis sistematik dari bawah ke atas (foot → ankle → knee → hip → pelvis → trunk → arm swing) mengikut fasa.",
    "Ukur parameter: 10-metre walk test, cadence.",
    "Rakam video (dengan izin) dan tonton perlahan.",
    "Kaitkan deviasi dengan dapatan impairment (kekuatan, ROM, tonus, sakit).",
    "Rancang intervensi."
   ],
   "handling": [
    "Kawal keselamatan dengan berdiri di sisi lemah; guna gait belt jika risiko jatuh.",
    "Pemerhatian fokus satu segmen pada satu masa."
   ],
   "redFlags": [
    "Risiko jatuh tinggi, weight-bearing restriction: patuhi status WB."
   ],
   "kompeten": [
    "Namakan fasa dan deviasi dengan istilah yang betul.",
    "Kenal pasti punca impairment dan cadangkan intervensi yang sepadan."
   ],
   "videos": [
    {
     "title": "Biomechanical Gait Cycle: Rancho Los Amigos Convention",
     "url": "https://www.youtube.com/watch?v=jhip1ehOSdw",
     "youtubeId": "jhip1ehOSdw",
     "note": "fasa stance dan swing mengikut istilah Rancho."
    },
    {
     "title": "Gait Cycle & Gait Analysis",
     "url": "https://www.youtube.com/watch?v=1u6d1CX7o9c",
     "youtubeId": "1u6d1CX7o9c",
     "note": "peratus kitaran gait dan peristiwa utama setiap fasa."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 12,
   "domainId": "msk",
   "title": "Joint Mobilisation (Cervical / Lumbar Spine)",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Kurangkan kesakitan dan perbaiki pergerakan segmen spinal menggunakan teknik pasif berirama.",
   "knowledge": [
    "Gred Maitland: I–II (sakit dominan, sebelum rintangan), III–IV (kekakuan dominan, ke dalam rintangan); Gred V = manipulation (di luar skop privilege ini).",
    "Teknik: central PA, unilateral PA, transverse, rotation, SNAG/NAG (Mulligan).",
    "Anatomi permukaan: spinous process C2, C7, T1, L4 (aras iliac crest), facet.",
    "Konsep irritability dan severity untuk pilih dos.",
    "Saringan keselamatan cervical: framework IFOMPT 2020 untuk vascular (bukan lagi bergantung pada VBI test semata-mata), ligamentous instability (Sharp-Purser, alar ligament)."
   ],
   "langkah": [
    "Assessment subjektif penuh dengan saringan red flags.",
    "Saringan keselamatan cervical jika rawat leher.",
    "Ujian objektif: AROM, PPIVM / PAIVM untuk kenal pasti segmen.",
    "Pilih teknik dan gred; terangkan dan dapatkan consent.",
    "Laksana 30–60 saat x 2–3 set; tanya respon.",
    "Nilai semula asterisk sign (AROM, sakit) selepas setiap set.",
    "Dokumentasi teknik, gred, segmen, respon."
   ],
   "handling": [
    "Guna pisiform / ibu jari bertindih; siku lurus, tekanan dari berat badan, bukan otot tangan.",
    "Posisi pesakit prone dengan sokongan; terapis berdiri betul-betul atas segmen.",
    "Ritma sekata (1–2 osilasi per saat)."
   ],
   "redFlags": [
    "Kontraindikasi: malignancy, fraktur, infeksi, cauda equina, cord compression, instability ligament, osteoporosis teruk, insufficiency vascular.",
    "Pediatrik/obstetrik: berhati-hati (ligamentous laxity semasa kehamilan)."
   ],
   "kompeten": [
    "Saringan keselamatan lengkap sebelum rawatan.",
    "Teknik, gred dan dos sesuai dengan irritability; nilai semula outcome."
   ],
   "videos": [
    {
     "title": "Maitland Mobilisations PA – Lumbar spine",
     "url": "https://www.youtube.com/watch?v=fo5y5fJPNnU",
     "youtubeId": "fo5y5fJPNnU",
     "note": "central PA lumbar dengan penerangan gred."
    },
    {
     "title": "Maitland Unilateral PA – Cervical spine (Hawkes Physiotherapy)",
     "url": "https://www.youtube.com/watch?v=RZQkZTwJySA",
     "youtubeId": "RZQkZTwJySA",
     "note": "posisi tangan dan teknik unilateral PA cervical."
    },
    {
     "title": "Unilateral PA mobilization on Cervical Spine",
     "url": "https://www.youtube.com/watch?v=HzVQFXYonU8",
     "youtubeId": "HzVQFXYonU8",
     "note": "cara mencari segmen cervical sebelum mobilisasi."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 13,
   "domainId": "neuro",
   "title": "Wheelchair / Walking Aid Assessment, Prescription and Basic Skills",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Pilih, ukur dan suaikan alat mobiliti yang selamat dan berfungsi, kemudian latih pesakit/penjaga menggunakannya.",
   "knowledge": [
    "Jenis walking aid dan indikasi: walking stick (sokongan minimum, dipegang di tangan bertentangan sisi lemah), quadripod, crutches (axillary / elbow), walking frame (standard / rollator), reverse walker (pediatrik, CP).",
    "Corak gait: 2-point, 3-point (NWB / PWB), 4-point, swing-to, swing-through.",
    "Jenis kerusi roda: manual standard, lightweight, tilt-in-space, reclining, pediatrik / stroller khas, elektrik. Komponen: kusyen, backrest, footplate, lateral support, harness.",
    "Ukuran kerusi roda: seat width (punggung + 2.5–5 cm), seat depth (2–4 jari dari belakang lutut), seat-to-footplate, backrest height, armrest height.",
    "Prinsip postural management: pelvis neutral dahulu, kemudian trunk, kepala, anggota.",
    "Risiko pressure injury dan pilihan kusyen."
   ],
   "langkah": [
    "Assessment: diagnosis, prognosis, kekuatan, keseimbangan, kognitif, postur duduk, kulit, persekitaran rumah/sekolah, pengangkutan, penjaga.",
    "Tentukan keperluan dan pilih alat.",
    "Ukur pesakit (untuk walking aid: ketinggian handle pada aras ulnar styloid / greater trochanter, siku flexion 15–30°; axillary crutch 2–3 jari bawah axilla).",
    "Suaikan alat dan uji pada pesakit.",
    "Latih basic skills: gait pattern, naik/turun tangga (\"up with the good, down with the bad\"), sit-to-stand dengan alat; untuk kerusi roda — brek, propel, belok, ramp, transfer, wheelie (jika sesuai), pressure relief setiap 15–30 minit.",
    "Edukasi penjaga: lipat, penyelenggaraan, keselamatan.",
    "Dokumentasi preskripsi dan susulan."
   ],
   "handling": [
    "Guard di sisi lemah, sedikit di belakang, dengan gait belt.",
    "Transfer: posisi kerusi 30–45° ke katil, brek dikunci, footplate dialih.",
    "Semasa naik tangga dengan crutch, terapis berada di bawah pesakit."
   ],
   "redFlags": [
    "Status weight-bearing mesti dipatuhi.",
    "Kognitif lemah / tak boleh ikut arahan: pilih alat lebih stabil, latih penjaga.",
    "Kulit merah tidak hilang selepas 30 minit: semak kusyen dan postur."
   ],
   "kompeten": [
    "Preskripsi berdasarkan assessment, ukuran tepat.",
    "Pesakit/penjaga boleh tunjuk penggunaan selamat sebelum discaj."
   ],
   "videos": [
    {
     "title": "Wheelchair Measurement – Physiotrendz",
     "url": "https://www.youtube.com/watch?v=wpuPBaMCogc",
     "youtubeId": "wpuPBaMCogc",
     "note": "ukuran setiap bahagian kerusi roda dan had normal."
    },
    {
     "title": "How to Walk with Crutches (Sizing, Training, Use, and Stairs)",
     "url": "https://www.youtube.com/watch?v=uPH5DBZ2krA",
     "youtubeId": "uPH5DBZ2krA",
     "note": "saiz crutch, corak gait dan teknik tangga."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 14,
   "domainId": "paeds-cardio",
   "title": "Interpretation and Analysis of Chest Auscultation (Paediatrik)",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Sama seperti AP 1, tetapi disesuaikan dengan dinding dada nipis, nafas laju dan pesakit yang tak boleh ikut arahan.",
   "knowledge": [
    "Bunyi nafas lebih kuat dan lebih \"bronchial\" pada bayi kerana dinding dada nipis; bunyi mudah dipindahkan dari sisi bertentangan dan dari upper airway.",
    "Bayi bernafas melalui hidung: sekresi nasal memberi transmitted sound kasar — bezakan dengan dengar di leher/hidung.",
    "Kondisi lazim: bronchiolitis (crackles + wheeze menyeluruh), pneumonia, atelectasis post-extubation (selalunya right upper lobe), meconium aspiration, BPD.",
    "Tanda work of breathing: subcostal / intercostal / suprasternal recession, nasal flaring, head bobbing, grunting, tracheal tug, see-saw breathing."
   ],
   "langkah": [
    "Observasi dahulu sebelum sentuh (bayi menangis akan rosakkan auscultation): warna, WOB, RR, posisi.",
    "Panaskan stethoscope; guna chest piece pediatrik/neonat.",
    "Auscultate ketika bayi tenang atau tidur; bandingkan kiri-kanan pada titik yang sedikit (anterior atas, lateral, posterior).",
    "Ulang selepas suction / rawatan.",
    "Kaitkan dengan CXR, SpO2, FiO2 dan sokongan respiratori."
   ],
   "handling": [
    "Containment / swaddle dan non-nutritive sucking untuk tenangkan bayi.",
    "Pesakit NICU: minimum handling, kluster rawatan dengan jururawat.",
    "Kanak-kanak: jadikan permainan (tiup belon / kincir angin) untuk dapatkan nafas dalam."
   ],
   "redFlags": [
    "Grunting, apnoea, bradycardia, silent chest, sianosis: maklumkan doktor segera.",
    "Stridor pada kanak-kanak (croup, benda asing): jangan provok batuk/menangis; jangan buat airway clearance."
   ],
   "kompeten": [
    "Kenal transmitted sound vs added sound.",
    "Nilai WOB dan tanda bahaya mengikut umur."
   ],
   "videos": [
    {
     "title": "Wheeze – Bronchiolitis (digital stethoscope recording)",
     "url": "https://www.youtube.com/watch?v=4RU_bysa5Lc",
     "youtubeId": "4RU_bysa5Lc",
     "note": "rakaman sebenar wheeze pada bayi 7 bulan dengan bronchiolitis."
    },
    {
     "title": "Paediatrics – Signs of respiratory distress",
     "url": "https://www.youtube.com/watch?v=6Y_bhirYroo",
     "youtubeId": "6Y_bhirYroo",
     "note": "head bobbing, nasal flaring, recession, grunting."
    },
    {
     "title": "Nasal Flaring and Substernal/Subcostal Retractions in Infant",
     "url": "https://www.youtube.com/watch?v=iiX6vQ2F6ao",
     "youtubeId": "iiX6vQ2F6ao",
     "note": "contoh visual recession pada bayi."
    }
   ],
   "videoTip": "guna headphone",
   "extraNotes": []
  },
  {
   "no": 15,
   "domainId": "paeds-cardio",
   "title": "Interpretation and Analysis of Chest X-Ray (Paediatrik)",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Baca CXR bayi/kanak-kanak dengan mengambil kira anatomi normal yang berbeza dari dewasa.",
   "knowledge": [
    "Kebanyakan filem AP supine: jantung kelihatan lebih besar. Cardiothoracic ratio normal bayi sehingga ~0.6.",
    "Thymus besar pada bayi (sail sign) — jangan anggap sebagai consolidation.",
    "Inspirasi cukup pada bayi: 6–8 anterior ribs atau 8–9 posterior ribs. Rotation biasa berlaku.",
    "Patologi neonat: RDS (ground-glass, air bronchogram, volume kecil), TTN (fluid di fissure), meconium aspiration (patchy + hyperinflation), pneumothorax, BPD, CHD.",
    "Kanak-kanak: bronchiolitis (hyperinflation, peribronchial thickening, atelectasis tompok), pneumonia lobar, foreign body (air trapping satu sisi).",
    "Kedudukan peralatan: hujung ETT antara T1–T3 pada neonat (atas carina), UVC/UAC, NGT/OGT, chest drain."
   ],
   "langkah": [
    "Semak umur gestasi / umur pesakit dan tarikh filem.",
    "RIPE + ABCDE seperti AP 2, dengan perhatian pada thymus, CTR mengikut umur.",
    "Kenal pasti lobus terlibat dan kedudukan peralatan.",
    "Tentukan implikasi: positioning, airway clearance, kontraindikasi (pneumothorax, air leak, IVH bersekali)."
   ],
   "handling": [
    "Latih dengan set CXR NICU/PICU bersama supervisor; laporkan secara lisan ringkas."
   ],
   "redFlags": [
    "Pneumothorax / pneumomediastinum / PIE: elak positive pressure manual, rujuk.",
    "ETT tinggi (risiko extubation) atau rendah (intubasi bronkus kanan, collapse kiri): maklumkan."
   ],
   "kompeten": [
    "Tidak salah tafsir thymus dan CTR bayi.",
    "Kenal pasti kedudukan ETT dan pola patologi neonat/pediatrik utama."
   ],
   "videos": [
    {
     "title": "How to read: RDS, MAS, TTN, BPD, pneumonia – Neonatal CXRs",
     "url": "https://www.youtube.com/watch?v=QxXWt-qzeWo",
     "youtubeId": "QxXWt-qzeWo",
     "note": "ciri utama setiap patologi paru neonat."
    },
    {
     "title": "Neonatal Chest X-ray: Thymic Sail vs Pneumomediastinum",
     "url": "https://www.youtube.com/watch?v=zfbVpyhU1us",
     "youtubeId": "zfbVpyhU1us",
     "note": "bezakan thymus normal dengan air leak."
    },
    {
     "title": "Introduction to Pediatric Chest Radiography – G. Taylor",
     "url": "https://www.youtube.com/watch?v=OYzh6USwAPo",
     "youtubeId": "OYzh6USwAPo",
     "note": "pendekatan CXR kanak-kanak."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 16,
   "domainId": "paeds-cardio",
   "title": "Interpretation of Chest Deformity",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Kenal pasti bentuk dada abnormal dan kaitannya dengan fungsi respiratori, keperluan rawatan dan rujukan.",
   "knowledge": [
    "Pectus excavatum (dada cekung) dan pectus carinatum (pigeon chest) — kesan pada kapasiti paru dan postur.",
    "Harrison's sulcus: alur di bawah rusuk akibat tarikan diafragma kronik (asthma kronik, rickets, CLD).",
    "Barrel chest: hyperinflation kronik (asthma, CF, BPD).",
    "Bell-shaped chest: kelemahan otot intercostal (SMA, neuromuscular disease).",
    "Asimetri dada akibat scoliosis, torticollis, hemi-hypoplasia, operasi jantung (sternotomy) atau thoracotomy.",
    "Rachitic rosary (rickets), flail segment.",
    "Index Haller (pada CT) untuk keterukan pectus excavatum — kenal sahaja, bukan diukur oleh physio."
   ],
   "langkah": [
    "Observasi dada terdedah dalam supine dan duduk/berdiri: anterior, lateral, posterior.",
    "Nilai simetri, bentuk sternum, rusuk, corak pergerakan (paradoxical, see-saw), postur tulang belakang dan bahu.",
    "Palpasi pengembangan dada (chest expansion) bilateral.",
    "Ukur jika perlu: chest circumference, chest expansion dengan pita ukur.",
    "Kaitkan dengan diagnosis dan kesan fungsi (WOB, toleransi aktiviti).",
    "Plan: latihan postur dan pernafasan, rujuk ortopedik / surgeon jika progresif."
   ],
   "handling": [
    "Palpasi dengan tangan hangat, ibu jari bertemu di garis tengah, ukur pergerakan ibu jari semasa nafas."
   ],
   "redFlags": [
    "Paradoxical breathing baharu atau flail segment: kecemasan.",
    "Deformiti progresif pantas dengan simptom respiratori: rujuk."
   ],
   "kompeten": [
    "Namakan deformiti dengan tepat dan kaitkan dengan patologi.",
    "Tentukan implikasi rawatan dan keperluan rujukan."
   ],
   "videos": [
    {
     "title": "Pectus Excavatum and Pigeon Chest: Treatment and Recovery",
     "url": "https://www.youtube.com/watch?v=J307Q4vVP_M",
     "youtubeId": "J307Q4vVP_M",
     "note": "rupa pectus excavatum dan carinatum serta pilihan rawatan."
    },
    {
     "title": "An infant's compliant chest wall in respiratory distress",
     "url": "https://www.youtube.com/watch?v=EYqi7hHBEVs",
     "youtubeId": "EYqi7hHBEVs",
     "note": "sternal recession dan pergerakan dada paradoksikal pada bayi."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 17,
   "domainId": "paeds-cardio",
   "title": "Identifying the Type of Respiratory Support",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Kenal pasti jenis sokongan pernafasan pada bayi/kanak-kanak, faham tahap sokongan dan implikasinya kepada rawatan fisioterapi.",
   "knowledge": [
    {
     "html": "Tangga sokongan (dari rendah ke tinggi):",
     "sub": [
      "Low-flow O2 (nasal cannula, facemask, headbox).",
      "High-Flow Nasal Cannula (HFNC): flow ~1–2 L/kg/min pada bayi; beri sedikit PEEP dan washout dead space.",
      "Nasal CPAP (bubble CPAP / ventilator CPAP): 5–8 cmH2O biasa; interface nasal prong atau mask.",
      "NIPPV / BiPAP: CPAP dengan nafas berpenekanan tambahan.",
      "Conventional mechanical ventilation melalui ETT: SIMV, A/C, PSV, PRVC.",
      "High Frequency Oscillatory Ventilation (HFOV): parameter MAP, amplitude (ΔP), frequency (Hz).",
      "Tracheostomy dengan / tanpa ventilator di rumah."
     ]
    },
    "Komponen dan alarm setiap sistem; keperluan humidification."
   ],
   "langkah": [
    "Kenal pasti alat dari interface, mesin dan skrin.",
    "Baca parameter utama (flow, FiO2, PEEP/MAP, PIP, rate).",
    "Tentukan tahap kebergantungan dan trend (meningkat atau berkurang).",
    "Implikasi physio: contoh HFOV — elak disconnection, physio biasanya terhad kepada positioning; CPAP — jaga seal dan kedudukan prong semasa rawatan.",
    "Dokumentasi jenis sokongan dan parameter."
   ],
   "handling": [
    "Semasa positioning, sokong litar dan prong supaya tidak tercabut atau menekan septum hidung.",
    "Pastikan bubble CPAP berbuih (tekanan dihantar) selepas rawatan."
   ],
   "redFlags": [
    "HFOV / FiO2 sangat tinggi / tidak stabil: rawatan hanya selepas berbincang dengan pakar.",
    "Desaturasi atau bradycardia semasa handling: berhenti, biar pulih, maklumkan."
   ],
   "kompeten": [
    "Kenal semua jenis sokongan di NICU/PICU HTA dengan betul.",
    "Ubah suai teknik rawatan mengikut jenis sokongan."
   ],
   "videos": [
    {
     "title": "Neonatal lungs: What happens on CPAP and High Flow Nasal Cannula?",
     "url": "https://www.youtube.com/watch?v=XyCfl3cco_o",
     "youtubeId": "XyCfl3cco_o",
     "note": "model paru bayi menunjukkan kesan CPAP vs HFNC."
    },
    {
     "title": "High Frequency Oscillatory Ventilation, Part II – Tala Talks NICU",
     "url": "https://www.youtube.com/watch?v=k63y5YWIcZo",
     "youtubeId": "k63y5YWIcZo",
     "note": "parameter HFOV (MAP, amplitude, Hz) dan bila digunakan."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 18,
   "domainId": "paeds-cardio",
   "title": "Identifying Different Types of Oxygen Therapy",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Kenal pasti alat penghantaran O2, anggaran FiO2 yang dihantar dan kesesuaiannya kepada pesakit.",
   "knowledge": [
    {
     "html": "Low-flow (FiO2 berubah ikut corak nafas):",
     "sub": [
      "Nasal cannula: bayi 0.1–2 L/min (ada low-flow meter); kanak-kanak hingga ~4 L/min; FiO2 ~24–40%.",
      "Simple face mask: 5–10 L/min (minimum 5 untuk elak rebreathing CO2); FiO2 ~35–55%.",
      "Headbox: flow cukup untuk washout CO2; FiO2 diukur dengan O2 analyser."
     ]
    },
    {
     "html": "High-flow / fixed:",
     "sub": [
      "Venturi mask: FiO2 tetap 24–60% mengikut warna adaptor.",
      "Non-rebreather mask: 10–15 L/min, beg kembung; FiO2 ~60–90%.",
      "HFNC: FiO2 dan flow diset berasingan."
     ]
    },
    "Target SpO2 mengikut unit (contoh: preterm biasanya 90–95% untuk kurangkan risiko ROP; kanak-kanak lain ≥92–94%).",
    "Bahaya O2: retinopathy of prematurity, oxygen toxicity, CO2 retention pada pesakit kronik, risiko kebakaran."
   ],
   "langkah": [
    "Kenal pasti alat, sumber (wall/tong), flow dan humidification.",
    "Semak kesesuaian saiz alat (prong, mask) dan kedudukan.",
    "Anggar FiO2 dan bandingkan dengan target SpO2.",
    "Semasa rawatan atau mobilisasi, pastikan bekalan O2 berterusan (tong mudah alih penuh).",
    "Dokumentasi alat, flow, FiO2 dan SpO2."
   ],
   "handling": [
    "Pasang dan betulkan nasal prong dengan tape tanpa menekan kulit.",
    "Semak tiub tidak terbelit semasa mobilisasi."
   ],
   "redFlags": [
    "SpO2 tidak mencapai target walaupun O2 dinaikkan: eskalasi.",
    "Preterm dengan SpO2 terlalu tinggi berpanjangan: maklumkan jururawat (risiko ROP)."
   ],
   "kompeten": [
    "Kenal semua alat O2 dan julat FiO2 masing-masing.",
    "Pastikan O2 berterusan dan tepat semasa rawatan."
   ],
   "videos": [
    {
     "title": "Oxygen Delivery Devices",
     "url": "https://www.youtube.com/watch?v=1BZXEL7a0TA",
     "youtubeId": "1BZXEL7a0TA",
     "note": "nasal cannula, simple mask, non-rebreather, venturi dan flow rate setiap satu."
    },
    {
     "title": "Giving Supplemental Oxygen (WHO Basic Emergency Care)",
     "url": "https://www.youtube.com/watch?v=YLB0BYq0JjQ",
     "youtubeId": "YLB0BYq0JjQ",
     "note": "cara memasang nasal cannula, simple mask dan non-rebreather."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 19,
   "domainId": "paeds-cardio",
   "title": "Neonatal Airway Clearance – Manual Technique / Gravity-Assisted Drainage Positioning (GADP)",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Bantu bersihkan sekresi pada neonat dengan teknik manual dan posisi yang selamat untuk sistem neurologi dan kardiovaskular yang masih rapuh.",
   "knowledge": [
    "Perbezaan fisiologi neonat: airway kecil (mudah tersumbat), collateral ventilation kurang, dinding dada compliant, risiko IVH dan GER, toleransi handling rendah.",
    "Modified GADP: tiada head-down tilt pada neonat preterm (terutamanya &lt;32 minggu atau dalam 72 jam pertama) kerana risiko IVH dan GER; gunakan posisi rata (supine, side-lying, prone) mengikut lobus terlibat.",
    {
     "html": "Teknik manual:",
     "sub": [
      "Percussion: contact heel percussion / guna facemask kecil berpadding atau alat percussor neonat, kadar ritmik, atas lapisan nipis.",
      "Vibration: getaran halus semasa ekspirasi dengan hujung jari / tapak tangan.",
      "Chest compression / expiratory flow increase (dengan berhati-hati)."
     ]
    },
    "Indikasi: sekresi tertahan, atelectasis lobar disahkan CXR, post-extubation collapse.",
    "Kontraindikasi: IVH akut / gred tinggi, preterm sangat rendah berat (&lt;1000 g) awal, osteopenia of prematurity / fraktur rusuk, coagulopathy / platelet rendah, PPHN, pneumothorax tanpa drain, ketidakstabilan kardiovaskular, kulit sangat rapuh."
   ],
   "langkah": [
    "Semak nota, CXR, kriteria kontraindikasi, platelet/koagulasi, bacaan sokongan respiratori; bincang dengan doktor/jururawat NICU.",
    "Rancang waktu rawatan (sebelum feeding atau ≥1 jam selepas feeding; aspirate NGT jika perlu ikut protokol).",
    "Baseline HR, SpO2, RR, suhu; pastikan monitor berfungsi.",
    "Posisi bayi untuk lobus terlibat dengan sokongan containment (nest, roll).",
    "Laksana percussion/vibration dalam tempoh pendek (contoh 1–2 minit setiap posisi), pantau berterusan.",
    "Ikuti dengan suction jika perlu (AP 20).",
    "Nilai semula auscultation, SpO2, WOB; kembalikan bayi ke posisi selesa dan tenang.",
    "Dokumentasi teknik, posisi, sekresi (jumlah, warna, kepekatan), toleransi."
   ],
   "handling": [
    "Satu tangan menyokong kepala dan badan (containment), satu tangan merawat.",
    "Tekanan percussion ringan; tempat sasaran hanya atas rusuk, elak tulang belakang, sternum, abdomen, kawasan line/drain.",
    "Bekerja dalam incubator: buka port sahaja, jaga suhu bayi."
   ],
   "redFlags": [
    "Hentikan jika: bradycardia, desaturasi berterusan, apnoea, perubahan warna, tanda stres (hiccups, finger splaying, gaze aversion yang berterusan).",
    "Selepas rawatan, pastikan bayi pulih ke baseline sebelum ditinggalkan."
   ],
   "kompeten": [
    "Saring kontraindikasi neonat secara konsisten.",
    "Teknik dan tekanan sesuai saiz bayi; pengendalian lembut dan containment baik.",
    "Tindak balas tepat kepada tanda stres atau kemerosotan."
   ],
   "videos": [
    {
     "title": "Airway Clearance Techniques: Infant CPT",
     "url": "https://www.youtube.com/watch?v=4W1PSPJReRI",
     "youtubeId": "4W1PSPJReRI",
     "note": "teknik percussion dan postural drainage pada bayi."
    },
    {
     "title": "Chest Physiotherapy – OPENPediatrics",
     "url": "https://www.youtube.com/watch?v=MGrsdLzhhvE",
     "youtubeId": "MGrsdLzhhvE",
     "note": "posisi dan teknik manual untuk kanak-kanak."
    }
   ],
   "videoTip": "",
   "extraNotes": [
    "Perhatian: video ini menunjukkan teknik umum untuk bayi. Untuk neonat preterm, kekalkan modified GADP tanpa head-down tilt seperti di atas."
   ]
  },
  {
   "no": 20,
   "domainId": "paeds-cardio",
   "title": "Suctioning Technique – Endotracheal Tube / Nasopharyngeal / Oral",
   "minTarget": {
    "O": 1,
    "A": null,
    "P": 4
   },
   "tujuan": "Keluarkan sekresi dari airway apabila pesakit tidak boleh batuk dengan berkesan, dengan risiko trauma dan hipoksia yang minimum.",
   "knowledge": [
    "Indikasi: sekresi kelihatan / kedengaran, desaturasi berkaitan sekresi, peningkatan peak pressure atau corak sawtooth pada graf ventilator, perlu sampel sputum.",
    "Saiz kateter: lebih kurang 2 × saiz ETT (contoh ETT 3.0 → 6 Fr; ETT 3.5 → 6–7 Fr), tidak melebihi separuh lumen ETT (AARC 2010).",
    "Tekanan suction (rujuk protokol unit): neonat ~60–100 mmHg (8–13 kPa); kanak-kanak ~80–120 mmHg; dewasa ≤150 mmHg.",
    "Tempoh: ≤10–15 saat setiap pass (neonat lebih singkat, ~5–10 saat); suction hanya semasa menarik keluar.",
    "Kedalaman: premeasured / shallow suction (hujung kateter sampai hujung ETT sahaja) diutamakan; deep suction hanya jika perlu.",
    "Normal saline instillation tidak disyorkan secara rutin.",
    "Closed (inline) vs open suction: closed kekalkan PEEP, kurang derecruitment.",
    "Nasopharyngeal: ukur dari hujung hidung ke tragus telinga; oral: dari bibir ke angle of jaw.",
    "Komplikasi: hipoksia, bradycardia, trauma mukosa, atelectasis, infeksi, peningkatan ICP, bronchospasm."
   ],
   "langkah": [
    "Nilai keperluan (bukan rutin mengikut jam).",
    "Kebersihan tangan, PPE (glove steril untuk open suction, apron, goggles, mask).",
    "Sediakan dan uji suction unit; pilih kateter dan tekanan; ukur kedalaman.",
    "Pre-oxygenate jika perlu ikut protokol (contoh naikkan FiO2 10–20% sementara pada neonat, bukan 100% secara automatik).",
    "Masukkan kateter tanpa suction hingga kedalaman diukur; tarik keluar sambil suction (boleh dengan putaran perlahan).",
    "Biarkan pesakit pulih antara pass; hadkan bilangan pass (biasanya ≤2–3).",
    "Turunkan semula FiO2 ke baseline selepas pulih.",
    "Bilas tiub suction; buang kateter mengikut kawalan infeksi.",
    "Nilai semula dan dokumentasi: jenis, saiz, tekanan, sekresi, toleransi."
   ],
   "handling": [
    "Teknik steril: tangan dominan steril pegang kateter, tangan lain kendali port / sambungan.",
    "Pegang ETT stabil di mulut/hidung semasa suction untuk elak extubation.",
    "Nasopharyngeal: masukkan mengikut lantai hidung, arah ke belakang (bukan ke atas); jangan paksa."
   ],
   "redFlags": [
    "Kontraindikasi/berhati-hati NPA: fraktur base of skull, kebocoran CSF, operasi nasal baru, coagulopathy teruk, stridor/epiglottitis, laryngospasm.",
    "Hentikan jika bradycardia, desaturasi tidak pulih, arrhythmia, darah segar dari airway."
   ],
   "kompeten": [
    "Pilih saiz, tekanan, kedalaman yang betul ikut umur dan ETT.",
    "Teknik aseptik dan pengurusan komplikasi tanpa prompt.",
    "Suction berdasarkan indikasi, bukan rutin."
   ],
   "videos": [
    {
     "title": "Endotracheal Suctioning for Preterm and Term Neonates (SQUH)",
     "url": "https://www.youtube.com/watch?v=vfFIk4VwG8c",
     "youtubeId": "vfFIk4VwG8c",
     "note": "langkah ET suction neonat mengikut polisi hospital."
    },
    {
     "title": "Demonstration on suctioning in a ventilated baby",
     "url": "https://www.youtube.com/watch?v=HFWwwTuWotA",
     "youtubeId": "HFWwwTuWotA",
     "note": "dua jururawat NICU, teknik dua orang."
    },
    {
     "title": "Nasopharyngeal and Oral Suctioning – OPENPediatrics",
     "url": "https://www.youtube.com/watch?v=TUxQCPhaYbc",
     "youtubeId": "TUxQCPhaYbc",
     "note": "suction pesakit tidak berintubasi."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 21,
   "domainId": "paeds-neuro",
   "title": "Manual Manipulation Technique for Torticollis",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Pulihkan panjang otot sternocleidomastoid (SCM) dan julat pergerakan leher pada bayi dengan congenital muscular torticollis (CMT), serta cegah plagiocephaly dan asimetri.",
   "knowledge": [
    "Postur tipikal CMT: kepala lateral flexion ke sisi terlibat, rotasi ke sisi bertentangan. Mungkin ada SCM tumour / nodul.",
    "Jenis: postural, muscular, SCM mass. Keterukan dan masa rujukan menentukan prognosis — rawatan awal (&lt;3 bulan) beri hasil terbaik (APTA CMT CPG 2018).",
    "Ukuran: passive cervical rotation (normal bayi ~100–110°) dan lateral flexion (~65–70°) dengan arthrodial protractor; Muscle Function Scale untuk active lateral flexion.",
    "Kondisi berkait: plagiocephaly, DDH (perlu saringan hip), asimetri muka.",
    "Punca bukan otot yang mesti disingkirkan: kelainan vertebra servikal, ocular (strabismus), neurologi (tumor fossa posterior), Sandifer (GER), infeksi."
   ],
   "langkah": [
    "Sejarah: kelahiran (breech, forceps, berat lahir), umur onset, posisi tidur, preference kepala.",
    "Observasi postur kepala, muka, bentuk kepala, nodul SCM; saring hip (Ortolani/Barlow mengikut umur, atau semak rekod).",
    "Ukur PROM rotasi dan lateral flexion bilateral; nilai AROM dan motor milestones.",
    {
     "html": "Manual stretching:",
     "sub": [
      "Lateral flexion: stabilkan bahu sisi terlibat, condongkan kepala ke sisi bertentangan.",
      "Rotation: stabilkan dada/bahu, putar dagu ke arah sisi terlibat.",
      "Pegangan perlahan, sustained, tanpa sakit (contoh 10–30 saat, beberapa ulangan, beberapa kali sehari mengikut toleransi)."
     ]
    },
    "Aktif: tummy time, visual/auditory tracking ke sisi terhad, righting reactions.",
    "Positioning dan handling: letak mainan dan arah suapan ke sisi yang menggalakkan rotasi; carry position.",
    "Ajar ibu bapa dan semak teknik mereka; nilai semula ROM berkala; rujuk jika tiada kemajuan (contoh selepas 6 bulan rawatan atau mengikut CPG)."
   ],
   "handling": [
    "Bayi dalam supine di atas riba / meja, kepala dan bahu disokong; dua orang jika bayi aktif.",
    "Tekanan perlahan, tangan stabil, perhatikan wajah bayi (menangis kuat = terlalu kuat).",
    "Jangan tarik secara tiba-tiba atau melibatkan traksi."
   ],
   "redFlags": [
    "Torticollis muncul lewat (selepas 6 bulan), sakit, tanda neurologi, strabismus, muntah: rujuk sebelum stretching.",
    "Hip tidak stabil: rujuk ortopedik."
   ],
   "kompeten": [
    "Ukuran ROM objektif dan boleh diulang.",
    "Teknik stretching selamat dan efektif; program rumah dipraktik oleh ibu bapa.",
    "Kenal pasti punca bukan otot dan rujuk dengan betul."
   ],
   "videos": [
    {
     "title": "Congenital Muscular Torticollis: Carries and Side Bends",
     "url": "https://www.youtube.com/watch?v=OAlAcHjVlLs",
     "youtubeId": "OAlAcHjVlLs",
     "note": "football carry dengan regangan dan weight shift — sesuai untuk ajar ibu bapa."
    },
    {
     "title": "Congenital Torticollis Treatment – Side Lying Hold",
     "url": "https://www.youtube.com/watch?v=8jRtUXctKeI",
     "youtubeId": "8jRtUXctKeI",
     "note": "pegangan side-lying untuk regangan lateral flexion."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 22,
   "domainId": "paeds-neuro",
   "title": "Manual Manipulation Technique for CTEV",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Membantu pembetulan clubfoot (Congenital Talipes Equinovarus) melalui manipulasi mengikut prinsip Ponseti, dan memastikan pematuhan bracing selepas pembetulan.",
   "knowledge": [
    "Komponen deformiti CAVE: Cavus, forefoot Adductus, hindfoot Varus, Equinus — dibetulkan mengikut turutan ini.",
    "Bezakan idiopathic CTEV vs postural talipes vs sindromik (arthrogryposis, spina bifida).",
    "Pirani score (0–6): hindfoot (posterior crease, empty heel, rigid equinus) dan midfoot (curvature lateral border, medial crease, lateral head of talus). Digunakan untuk pantau kemajuan dan keputusan tenotomy.",
    "Kaedah Ponseti: manipulasi + serial casting mingguan (biasanya 5–7 cast), percutaneous Achilles tenotomy (~80–90% kes), kemudian foot abduction brace (FAB) 23 jam sehari selama ~3 bulan, kemudian waktu tidur hingga umur 4–5 tahun.",
    "Prinsip penting: fulcrum ialah kepala talus (lateral); forefoot diabduksi dalam supinasi — jangan pronate; jangan tekan calcaneocuboid joint atau tolak tumit.",
    "Kaedah French functional (manipulasi harian + taping) sebagai alternatif di sesetengah pusat."
   ],
   "langkah": [
    "Assessment: sejarah kelahiran, saring hip dan tulang belakang, Pirani score kedua-dua kaki.",
    "Tenangkan bayi (feeding / susu semasa prosedur).",
    {
     "html": "Manipulasi (biasanya sebelum casting oleh pasukan ortopedik, atau mengikut peranan unit):",
     "sub": [
      "Cavus: supinate forefoot, angkat first metatarsal untuk selaraskan dengan hindfoot.",
      "Adductus + varus: ibu jari pada kepala talus sebagai fulcrum, abduct forefoot secara berperingkat dalam supinasi; calcaneus akan ikut berputar ke valgus dengan sendirinya.",
      "Equinus: dibetulkan terakhir (selepas abduction ~60–70°), selalunya melalui tenotomy."
     ]
    },
    "Pegang posisi yang dibetulkan beberapa saat, ulang secara perlahan.",
    "Selepas fasa casting: pastikan FAB dipakai dengan betul (abduction 60–70° sisi terlibat, 30–40° sisi normal, dorsiflexion ~10–15°), ajar ibu bapa pasang/tanggal, latihan regangan dan aktiviti.",
    "Pantau Pirani score, pematuhan brace dan tanda relaps (equinus kembali, supinasi dinamik)."
   ],
   "handling": [
    "Satu tangan stabilkan kepala talus (ibu jari lateral) dan tumit tidak dipegang; tangan lain manipulasi forefoot.",
    "Tekanan lembut dan sustained; elak tekanan kuat yang mencederakan kulit/physis.",
    "Semak kulit selepas buka cast atau brace."
   ],
   "redFlags": [
    "Pronation forefoot atau tekanan pada tumit boleh sebabkan rocker-bottom foot — jangan.",
    "Cast/brace: kulit lecet, kebiruan, bengkak — tanggal dan rujuk.",
    "Relaps, CTEV sindromik atau tidak responsif: rujuk ortopedik."
   ],
   "kompeten": [
    "Pirani score tepat dan konsisten.",
    "Manipulasi mengikut turutan CAVE dengan fulcrum yang betul.",
    "Edukasi brace yang membawa kepada pematuhan."
   ],
   "videos": [
    {
     "title": "Clubfoot Ponseti Manipulation Technique Step-by-Step",
     "url": "https://www.youtube.com/watch?v=WKFrGBKk04I",
     "youtubeId": "WKFrGBKk04I",
     "note": "langkah manipulasi Ponseti dan kedudukan fulcrum di talus."
    },
    {
     "title": "The Ponseti method of clubfoot treatment (Hope Walks)",
     "url": "https://www.youtube.com/watch?v=u-9GwHYBSYE",
     "youtubeId": "u-9GwHYBSYE",
     "note": "gambaran keseluruhan casting, tenotomy dan bracing."
    },
    {
     "title": "Pirani Score: full evaluation of a clubfoot in a 9-day-old newborn",
     "url": "https://www.youtube.com/watch?v=LmabXDpwia8",
     "youtubeId": "LmabXDpwia8",
     "note": "cara skor setiap komponen Pirani."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 23,
   "domainId": "paeds-neuro",
   "title": "Passive Movement and Positioning for Brachial Plexus / Erb's Palsy",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Kekalkan julat sendi, cegah kontraktur dan subluxation bahu, serta galakkan pemulihan motor pada bayi dengan brachial plexus birth injury (BPBI).",
   "knowledge": [
    "Klasifikasi: Erb's (C5–C6) — postur waiter's tip (shoulder adduction + internal rotation, elbow extension, forearm pronation, wrist flexion); extended Erb's (C5–C7); Klumpke (C8–T1, jarang); total plexus (C5–T1).",
    "Horner's syndrome (ptosis, miosis) menunjukkan penglibatan T1 / root avulsion — prognosis lebih teruk.",
    "Diagnosis pembeza: fraktur clavicle/humerus, septic arthritis, pseudoparalysis.",
    "Prognosis: pemulihan biceps (elbow flexion antigraviti) sebelum ~3 bulan petanda baik; tiada pemulihan → rujuk klinik brachial plexus / surgeon.",
    "Komplikasi: kontraktur internal rotation, glenohumeral dysplasia, posterior shoulder subluxation, elbow flexion contracture, developmental disregard.",
    "Alat ukur: Active Movement Scale (AMS 0–7), Toronto Test Score; Mallet scale untuk kanak-kanak lebih besar."
   ],
   "langkah": [
    "Sejarah kelahiran (shoulder dystocia, berat lahir), semak fraktur.",
    "Assessment: postur rehat, pergerakan spontan, AMS untuk setiap gerakan, refleks (Moro, grasp), sensasi kasar, Horner's, PROM bahu (terutamanya external rotation dengan scapula stabil).",
    "Fasa awal (minggu pertama, terutamanya jika ada fraktur): rehat dan positioning, elak tarikan pada lengan.",
    "Passive movement lembut setiap sendi (bahu, siku, forearm, wrist, jari) beberapa kali sehari; fokus external rotation dan abduction bahu dengan scapula distabilkan, supination forearm, wrist/finger extension.",
    "Positioning: elak berbaring atas lengan terlibat, lengan disokong di sisi badan dalam sedikit external rotation; wrist splint jika wrist drop.",
    "Galakkan pergerakan aktif melalui main, sensory stimulation, weight bearing di tangan (bila sesuai), kinesio taping (jika terlatih).",
    "Edukasi ibu bapa: memakai baju (masukkan lengan terlibat dahulu, keluarkan terakhir), mengangkat bayi tanpa tarik ketiak/lengan, program rumah.",
    "Ukur semula AMS berkala dan rujuk tepat pada masanya."
   ],
   "handling": [
    "Stabilkan scapula (tangan di lateral border/acromion) semasa external rotation untuk elak meregang sendi yang salah dan memastikan regangan pada glenohumeral.",
    "Gerakan perlahan dan dalam julat tanpa sakit; jangan paksa end-range.",
    "Bayi dalam supine yang selesa, ibu bapa boleh bantu tenangkan."
   ],
   "redFlags": [
    "Fraktur clavicle/humerus belum sembuh: tangguh ROM penuh, ikut arahan doktor.",
    "Bunyi \"clunk\" atau posterior shoulder prominence: syak subluxation — rujuk.",
    "Tiada biceps recovery menjelang ~3 bulan: rujuk klinik plexus."
   ],
   "kompeten": [
    "Klasifikasi lesi dan AMS dengan tepat.",
    "Passive movement dengan stabilisasi scapula yang betul.",
    "Program rumah yang selamat dan rujukan tepat masa."
   ],
   "videos": [
    {
     "title": "Brachial Plexus Injury: Range of Motion Exercises – Cincinnati Children's",
     "url": "https://www.youtube.com/watch?v=U4aOr1CXAGQ",
     "youtubeId": "U4aOr1CXAGQ",
     "note": "ROM pasif untuk bahu, siku, forearm dan wrist."
    },
    {
     "title": "Obstetric Brachial Plexus Palsy (OBPP) / Erb's Palsy",
     "url": "https://www.youtube.com/watch?v=geupq6MTrpU",
     "youtubeId": "geupq6MTrpU",
     "note": "anatomi plexus, klasifikasi dan pengurusan."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  },
  {
   "no": 24,
   "domainId": "paeds-neuro",
   "title": "Assessment of Scoliosis with Scoliometer",
   "minTarget": {
    "O": 1,
    "A": 1,
    "P": 3
   },
   "tujuan": "Saring dan pantau scoliosis dengan mengukur angle of trunk rotation (ATR) menggunakan scoliometer, untuk menentukan keperluan X-ray dan rujukan.",
   "knowledge": [
    "Scoliosis: lengkung lateral tulang belakang dengan rotasi vertebra; Cobb angle ≥10° pada X-ray.",
    "Jenis: idiopathic (infantile, juvenile, adolescent — paling biasa AIS), congenital, neuromuscular (CP, SMA, DMD), sindromik.",
    "Adams forward bend test: rib hump / lumbar prominence menunjukkan komponen rotasi.",
    "Threshold ATR: ≥5–7° lazimnya dirujuk untuk X-ray (5° lebih sensitif, 7° lebih spesifik — ikut protokol unit).",
    "Risser sign dan menarche: petanda baki pertumbuhan dan risiko progresi.",
    "Lengkung atipikal (left thoracic), sakit, defisit neurologi: syak punca sekunder."
   ],
   "langkah": [
    "Kanak-kanak tanpa baju (dengan chaperone / pakaian sesuai), tanpa kasut, berdiri tegak, kaki rapat.",
    "Observasi postur: aras bahu, scapula, waist crease, pelvis, plumb line dari C7, leg length.",
    "Adams test: bongkok ke hadapan perlahan, lutut lurus, lengan tergantung dan tapak tangan bertemu.",
    "Letak scoliometer melintang di atas tulang belakang dengan notch tengah pada spinous process; jangan tekan.",
    "Gerakkan scoliometer sepanjang aras thoracic, thoracolumbar, lumbar sambil kanak-kanak membongkok; catat bacaan maksimum dan aras.",
    "Ulang 2–3 kali untuk kebolehpercayaan; uji juga dalam duduk jika ada perbezaan panjang kaki (atau betulkan dengan blok).",
    "Rekod ATR dan aras, gambar postur (dengan izin), bandingkan dengan pengukuran lepas.",
    "Rujuk untuk X-ray / ortopedik jika melepasi threshold atau ada peningkatan ≥3°."
   ],
   "handling": [
    "Pemeriksa duduk/membongkok di belakang supaya mata sejajar dengan belakang kanak-kanak.",
    "Pegang scoliometer dengan ringan di kedua-dua hujung; pastikan sentiasa melintang.",
    "Arahan perlahan-lahan semasa bongkok supaya puncak rib hump tidak terlepas."
   ],
   "redFlags": [
    "Sakit belakang malam, defisit neurologi, perubahan bladder/bowel, left thoracic curve, café-au-lait spots, progresi pantas: rujuk segera."
   ],
   "kompeten": [
    "Posisi dan teknik scoliometer betul; bacaan boleh diulang (±2°).",
    "Tafsiran threshold dan keputusan rujukan yang tepat."
   ],
   "videos": [
    {
     "title": "Scoliometer / Adams Test – How To",
     "url": "https://www.youtube.com/watch?v=Ivmqk9EDRhM",
     "youtubeId": "Ivmqk9EDRhM",
     "note": "cara letak dan baca scoliometer semasa forward bend."
    },
    {
     "title": "How to Use a Scoliometer to Check for Scoliosis and Monitor Progression",
     "url": "https://www.youtube.com/watch?v=R6qsVYAvPIc",
     "youtubeId": "R6qsVYAvPIc",
     "note": "pengukuran ATR dan pemantauan progresi."
    },
    {
     "title": "Adam's Forward Bend Test Demonstration",
     "url": "https://www.youtube.com/watch?v=6QUufpstXwY",
     "youtubeId": "6QUufpstXwY",
     "note": "posisi pesakit dan pemerhatian rib hump."
    }
   ],
   "videoTip": "",
   "extraNotes": []
  }
 ],
 "normalValuesPaeds": [
  {
   "umur": "Neonat (0–1 bulan)",
   "rr": "30–60",
   "hr": "100–180"
  },
  {
   "umur": "Bayi (1–12 bulan)",
   "rr": "30–50",
   "hr": "100–160"
  },
  {
   "umur": "Toddler (1–3 tahun)",
   "rr": "24–40",
   "hr": "90–150"
  },
  {
   "umur": "Prasekolah (3–5 tahun)",
   "rr": "22–34",
   "hr": "80–140"
  },
  {
   "umur": "Sekolah (6–12 tahun)",
   "rr": "18–30",
   "hr": "70–120"
  },
  {
   "umur": "Remaja (>12 tahun)",
   "rr": "12–20",
   "hr": "60–100"
  }
 ],
 "normalValuesNote": "rujuk carta PEWS/NEWS hospital untuk julat rasmi",
 "references": [
  {
   "domain": "AP 1–5, 14–20",
   "html": "Main E, Denehy L. <em>Cardiorespiratory Physiotherapy: Adults and Paediatrics</em> (Elsevier)"
  },
  {
   "domain": "AP 1–5",
   "html": "Hough A. <em>Physiotherapy in Respiratory and Cardiac Care</em>"
  },
  {
   "domain": "AP 6",
   "html": "American Thoracic Society. ATS Statement: Guidelines for the Six-Minute Walk Test (2002)"
  },
  {
   "domain": "AP 7",
   "html": "Hodgson CL et al. Expert consensus and recommendations on safety criteria for active mobilization of mechanically ventilated critically ill adults. <em>Critical Care</em> (2014)"
  },
  {
   "domain": "AP 8",
   "html": "British Thoracic Society. Guideline on Pulmonary Rehabilitation in Adults (2013)"
  },
  {
   "domain": "AP 9",
   "html": "Skirven TM et al. <em>Rehabilitation of the Hand and Upper Extremity</em>"
  },
  {
   "domain": "AP 10",
   "html": "Butler DS. <em>The Sensitive Nervous System</em>; Shacklock M. <em>Clinical Neurodynamics</em>"
  },
  {
   "domain": "AP 11",
   "html": "Perry J, Burnfield JM. <em>Gait Analysis: Normal and Pathological Function</em>"
  },
  {
   "domain": "AP 12",
   "html": "Maitland's <em>Vertebral Manipulation</em>; IFOMPT International Framework for Examination of the Cervical Region (2020)"
  },
  {
   "domain": "AP 13",
   "html": "WHO Wheelchair Service Training Package (Basic)"
  },
  {
   "domain": "AP 19–20",
   "html": "AARC Clinical Practice Guideline: Endotracheal Suctioning of Mechanically Ventilated Patients with Artificial Airways (2010)"
  },
  {
   "domain": "AP 21",
   "html": "Kaplan SL et al. Physical Therapy Management of Congenital Muscular Torticollis: 2018 Evidence-Based Clinical Practice Guideline (APTA)"
  },
  {
   "domain": "AP 22",
   "html": "Ponseti IV. <em>Congenital Clubfoot: Fundamentals of Treatment</em>; Ponseti International Association manual"
  },
  {
   "domain": "AP 23",
   "html": "Rujukan klinik brachial plexus; Active Movement Scale (Clarke &amp; Curtis)"
  },
  {
   "domain": "AP 24",
   "html": "SOSORT guidelines on idiopathic scoliosis (2016); Bunnell WP, scoliometer (1984)"
  }
 ],
 "referencesIntro": "Senarai bacaan di bawah ialah sumber standard untuk setiap domain. Ia disusun tanpa semakan dalam talian, jadi sahkan edisi terkini sebelum dijadikan rujukan rasmi unit. Nilai numerik dalam nota ini adalah panduan umum; protokol NICU/PICU/ICU hospital mengatasi nota ini jika berbeza."
};
