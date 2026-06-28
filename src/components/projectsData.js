// Data sumber tunggal untuk seluruh proyek.
// Dipakai bersama oleh Projects.js (carousel) dan ProjectDetail.js (halaman detail).

// MES
import mesCover    from "../assets/img/mes/mes_stockpage.png";
import mesFgpage   from "../assets/img/mes/mes_fgpage.png";
import mesMtpage   from "../assets/img/mes/mes_mtpage.png";
import mesStpage   from "../assets/img/mes/mes_stpage.png";
import mesStockpage from "../assets/img/mes/mes_stockpage.png";

// POS
import posCover      from "../assets/img/pos/pos_home.jpeg";
import posConfirm    from "../assets/img/pos/pos_confirmpay.jpeg";
import posForm       from "../assets/img/pos/pos_formtrans.jpeg";
import posHome       from "../assets/img/pos/pos_home.jpeg";
import posInventory  from "../assets/img/pos/pos_inventory.jpeg";
import posKas        from "../assets/img/pos/pos_kas.jpeg";
import posMore       from "../assets/img/pos/pos_more.jpeg";
import posMutasi     from "../assets/img/pos/pos_mutasi.jpeg";
import posReceipt    from "../assets/img/pos/pos_receipt.jpeg";
import posTrans      from "../assets/img/pos/pos_transaksi.jpeg";

// SFA
import sfaCover      from "../assets/img/sfa/sfa_home.jpeg";
import sfaHome       from "../assets/img/sfa/sfa_home.jpeg";
import sfaLogin      from "../assets/img/sfa/sfa_login.jpeg";
import sfaMform      from "../assets/img/sfa/sfa_mformvisit.jpeg";
import sfaMvisit     from "../assets/img/sfa/sfa_mvisit.png";
import sfaReport     from "../assets/img/sfa/sfa_report.png";
import sfaVisit      from "../assets/img/sfa/sfa_visit.png";

// Dentist
import dentCover    from "../assets/img/dentist/dent_home.jpg";
import dentHome     from "../assets/img/dentist/dent_home.jpg";
import dentLogin    from "../assets/img/dentist/dent_login.jpg";
import dentLayanan  from "../assets/img/dentist/dent_layanan.jpg";
import dentDokter   from "../assets/img/dentist/dent_dokter.jpg";
import dentPay1     from "../assets/img/dentist/dent_pay1.jpg";
import dentPay2     from "../assets/img/dentist/dent_pay2.jpg";
import dentPay3     from "../assets/img/dentist/dent_pay3.jpg";
import dentRegis    from "../assets/img/dentist/dent_regis.jpg";

export const projectsData = [
  {
    id: "web-mes",
    title: "Web MES / App Gudang",
    category: "Web",
    shortDesc: "Manufacturing Execution System & manajemen gudang berbasis web real-time.",
    cover: mesCover,
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "REST API", "Bootstrap"],
    fullDesc:
      "Web MES (Manufacturing Execution System) adalah platform web yang menghubungkan proses produksi di lantai pabrik dengan manajemen gudang secara real-time. Sistem ini memantau jalannya order produksi, mencatat pergerakan stok bahan baku dan barang jadi, serta menyediakan dashboard untuk pengawasan kinerja produksi. Bagian manajemen gudang menangani penerimaan barang, penyimpanan, picking, hingga pengiriman, lengkap dengan pelacakan lokasi rak.",
    features: [
      "Monitoring order produksi secara real-time",
      "Manajemen stok masuk dan keluar (inbound & outbound)",
      "Pelacakan lokasi penyimpanan barang per rak/bin",
      "Dashboard analitik produksi dan inventaris",
      "Manajemen hak akses multi-peran (operator, supervisor, admin)",
      "Ekspor laporan ke format Excel dan PDF",
    ],
    screenshots: [mesFgpage, mesMtpage, mesStpage, mesStockpage],
  },
  {
    id: "mobile-pos",
    title: "Mobile POS",
    category: "Mobile",
    shortDesc: "Aplikasi Point of Sale Android untuk kasir, transaksi, dan laporan penjualan.",
    cover: posCover,
    techStack: ["Kotlin", "Jetpack Compose", "Room DB", "Retrofit", "MVVM"],
    fullDesc:
      "Mobile POS adalah aplikasi Point of Sale berbasis Android yang dirancang untuk membantu pelaku usaha ritel mengelola proses penjualan secara cepat dan akurat. Aplikasi ini memungkinkan kasir melakukan transaksi penjualan, mengelola katalog produk, mencetak struk, serta menghasilkan laporan penjualan harian maupun bulanan. Dibangun dengan arsitektur MVVM dan penyimpanan lokal Room agar tetap beroperasi saat offline, kemudian menyinkronkan data ke server saat kembali online.",
    features: [
      "Transaksi penjualan dengan keranjang dinamis dan perhitungan otomatis",
      "Manajemen produk: tambah, ubah, hapus, dan pencarian katalog",
      "Mode offline-first dengan sinkronisasi otomatis ketika online",
      "Cetak struk via printer Bluetooth thermal",
      "Laporan kas, mutasi, dan penjualan harian/bulanan",
      "Multi-metode pembayaran (tunai, QRIS, kartu)",
    ],
    screenshots: [posHome, posForm, posTrans, posConfirm, posReceipt, posKas, posMutasi, posInventory, posMore],
  },
  {
    id: "mobile-sfa",
    title: "Mobile SFA",
    category: "Mobile",
    shortDesc: "Sales Force Automation untuk tracking salesman, order, dan kunjungan lapangan.",
    cover: sfaCover,
    techStack: ["Kotlin", "Google Maps SDK", "Retrofit", "Room DB", "Firebase", "MVVM"],
    fullDesc:
      "Mobile SFA (Sales Force Automation) adalah aplikasi Android untuk mengotomatisasi aktivitas tim penjualan di lapangan. Aplikasi membantu salesman merencanakan rute kunjungan, melakukan check-in di lokasi pelanggan dengan validasi GPS, mencatat order langsung dari lapangan, serta memantau target penjualan. Manajer dapat melacak posisi dan aktivitas salesman secara real-time. Aplikasi memakai mode offline-first sehingga order tetap dapat dibuat di area tanpa sinyal.",
    features: [
      "Perencanaan rute dan jadwal kunjungan (visit plan)",
      "Check-in/check-out kunjungan dengan validasi GPS",
      "Pencatatan order langsung dari lapangan",
      "Pelacakan posisi salesman secara real-time di peta",
      "Monitoring pencapaian target penjualan per salesman",
      "Mode offline-first dengan sinkronisasi otomatis",
    ],
    screenshots: [sfaLogin, sfaHome, sfaVisit, sfaMvisit, sfaMform, sfaReport],
  },
  {
    id: "mobile-dentist",
    title: "Klinik Gigi App",
    category: "Mobile",
    shortDesc: "Aplikasi mobile klinik gigi untuk booking dokter, jadwal, dan pembayaran online.",
    cover: dentCover,
    techStack: ["Kotlin", "Jetpack Compose", "Retrofit", "Firebase", "Midtrans", "MVVM"],
    fullDesc:
      "Klinik Gigi App adalah aplikasi Android yang memudahkan pasien dalam mengakses layanan klinik gigi secara digital. Pasien dapat mendaftar, memilih dokter dan layanan, memesan jadwal konsultasi, serta melakukan pembayaran secara online melalui integrasi payment gateway Midtrans. Aplikasi juga menyediakan riwayat kunjungan dan notifikasi pengingat jadwal.",
    features: [
      "Registrasi dan autentikasi pasien",
      "Pilih dokter dan layanan klinik",
      "Booking jadwal konsultasi secara online",
      "Pembayaran online via Midtrans (transfer, QRIS, kartu)",
      "Riwayat kunjungan dan detail transaksi",
      "Notifikasi pengingat jadwal",
    ],
    screenshots: [dentHome, dentLogin, dentRegis, dentLayanan, dentDokter, dentPay1, dentPay2, dentPay3],
  },
];
