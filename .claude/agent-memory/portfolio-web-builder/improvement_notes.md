---
name: improvement-notes
description: Daftar isu & potensi perbaikan yang ditemukan saat riset portofolio (belum dikerjakan)
metadata:
  type: project
---

Temuan riset (2026-06-24, belum ada perubahan diminta). Konfirmasi ulang sebelum bertindak — bisa sudah berubah.

**Why:** Hasil analisis read-only; jadi acuan jika user nanti minta perbaikan.

**How to apply:** Tawarkan ini sebagai opsi saat user minta improvement; verifikasi dulu kondisi file terkini.

Isu yang ditemukan:
- `server.js`: kredensial gmail (user/pass) hardcoded & kosong — harus pindah ke env var; ada `console.log(process.env.EMAIL_PASS)` yang membocorkan secret.
- Tidak ada section Contact yang dirender di `App.js` walau CSS-nya lengkap; form kontak/nodemailer jadi dead code.
- SEO/metadata `public/index.html` masih bawaan CRA: title "React App", description "Web site created using create-react-app", lang="en".
- Hanya satu media query (`min-width:1700px`) di App.css — responsivitas mobile/tablet bergantung penuh ke grid Bootstrap; banyak ukuran fixed (banner h1 65px, project image height 500px) berpotensi overflow di mobile.
- Footer copyright masih "2022".
- Kode: `import logo` tak terpakai di beberapa komponen; atribut JSX invalid `id` tanpa nilai (`<img ... id />`), `dataPeriod`/`data-rotate` di Banner tak terhubung ke logika typing; typo teks ("Frelanceer", "align-items" → "aligh-items").
- Aksesibilitas: banyak `alt=""` kosong, `target="_blank"` tanpa `rel="noopener noreferrer"`.
- Aset img/ banyak duplikat & sisa template (project-img1..3, header-img, contact-img) yang tak dipakai.

Lihat [[project-overview]] dan [[user-profile]].
