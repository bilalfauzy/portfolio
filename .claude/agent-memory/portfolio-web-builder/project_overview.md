---
name: project-overview
description: Stack teknis, tema visual, dan struktur portofolio React di C:\laragon\www\portfolio
metadata:
  type: project
---

Portofolio ini adalah aplikasi **React (Create React App)**, BUKAN HTML/CSS/JS murni.

**Why:** Penting diketahui sebelum menawarkan perubahan — agent default-nya membuat HTML murni, tapi proyek ini pakai komponen React + Bootstrap.

**How to apply:** Untuk perubahan tampilan, edit komponen di `src/components/*.js` dan styling di `src/App.css` (665 baris, satu file global). Jangan menyarankan pendekatan HTML statis tanpa konteks ini.

- Stack: React 18, react-bootstrap + bootstrap 5.3, react-multi-carousel, react-on-screen (TrackVisibility), animate.css, react-bootstrap-icons. Backend kontak email: Express + nodemailer (`server.js`, port 5000).
- Deploy: gh-pages ke https://bilalfauzy.github.io/portfolio.
- Komponen yang dipakai (`App.js`): NavBar, Banner, Skills, Projects, Sertifikasi, Footer. Tidak ada section Contact yang dirender (meski CSS .contact ada).
- Tema visual: mendukung **light & dark theme** via CSS custom properties di `:root[data-theme="..."]` (App.css). Default **light** (di-set di `public/index.html` `<html data-theme="light">` agar tidak ada flash, lalu di-override localStorage). Toggle pill di NavBar (props `theme` + `toggleTheme` dari App.js, state + localStorage "theme"). Aksen utama gradient ungu-magenta `linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)` SAMA di kedua tema (identitas brand). Light: bg `#F5F5F7`/putih/lavender `#EEF0F8`, teks navy `#1A1A2E`. Dark: bg `#121212`, teks `#fff`/`#B8B8B8`. Font kustom "Centra". Banner punya typing animation.
- Origin: template "personal-portfolio-website" populer (struktur, nama class, dan banyak aset bawaan masih asli).

Lihat [[improvement-notes]] untuk daftar perbaikan yang diketahui.
