import React, { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";

const skillGroups = [
  {
    category: "Mobile",
    skills: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Room DB", "Retrofit", "MVVM / MVI"],
  },
  {
    category: "Frontend",
    skills: ["React JS", "JavaScript", "HTML / CSS", "Bootstrap", "Inertia.js"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "PHP", "Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["MySQL", "DBeaver", "Firebase", "PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "REST API", "Microsoft Office"],
  },
  {
    category: "Expertise",
    skills: ["Clean Code", "Clean Architecture", "Payment Gateway", "ERP Integration", "Warehouse Management"],
  },
];

const experiences = [
  {
    role: "Full Stack Developer · Project Leader",
    company: "PT. Adibayu Gajah Semakmur · PT. Aksamala Adi Andana",
    period: "Mar 2025 – Present",
    tags: ["MES", "Project Leader", "Implementator"],
    desc: "Memimpin pengembangan dan implementasi sistem MES (Manufacturing Execution System) untuk dua perusahaan manufaktur. Bertanggung jawab sebagai developer utama, project leader, dan implementator — mulai dari analisis kebutuhan, desain arsitektur sistem, pengembangan fitur, hingga deployment dan maintenance di lingkungan produksi.",
    highlights: [
      "Merancang dan mengembangkan Web MES end-to-end (frontend & backend)",
      "Memimpin tim dan koordinasi langsung dengan stakeholder pabrik",
      "Implementasi sistem di lantai produksi dan training operator",
      "Maintenance dan pengembangan fitur berkelanjutan",
      "Integrasi sistem dengan proses produksi dan manajemen gudang",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "PT. Wahana Datarindo Sempurna",
    period: "6 Bulan",
    tags: ["Web", "Gudang", "MES"],
    desc: "Membangun Web MES (Manufacturing Execution System) dan sistem manajemen gudang berbasis web menggunakan React, Node.js, dan PostgreSQL.",
    highlights: [
      "Pengembangan modul manajemen stok masuk dan keluar",
      "Membangun dashboard monitoring produksi real-time",
      "Desain dan implementasi REST API dengan Node.js & Express",
      "Pengelolaan database PostgreSQL dan optimasi query",
    ],
  },
  {
    role: "Freelance Android Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    tags: ["Mobile", "Android", "POS"],
    desc: "Mengembangkan aplikasi Android untuk berbagai klien, termasuk aplikasi Mobile POS (Point of Sale) untuk kebutuhan kasir, transaksi, dan laporan penjualan.",
    highlights: [
      "Membangun Mobile POS dengan Kotlin & Jetpack Compose",
      "Implementasi offline-first dengan Room DB dan sinkronisasi server",
      "Integrasi payment gateway dan printer Bluetooth thermal",
      "Laporan penjualan, mutasi kas, dan manajemen inventori",
    ],
  },
];

const ExpCard = ({ exp }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`exp-card${open ? " exp-card--open" : ""}`}>
      <button
        className="exp-card__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="exp-card__header-left">
          <h5 className="exp-card__role">{exp.role}</h5>
          <span className="exp-card__company">{exp.company}</span>
          <div className="exp-card__tags">
            {exp.tags.map((t) => (
              <span key={t} className="exp-card__tag">{t}</span>
            ))}
          </div>
        </div>
        <div className="exp-card__header-right">
          <span className="exp-card__period">{exp.period}</span>
          <span className="exp-card__chevron" aria-hidden="true">
            {open ? "▲" : "▼"}
          </span>
        </div>
      </button>

      {open && (
        <div className="exp-card__body">
          <p className="exp-card__desc">{exp.desc}</p>
          <ul className="exp-card__highlights">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="skill" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">

              {/* ── Experience (atas) ── */}
              <h2>Experience</h2>
              <p className="skill-intro">
                Pengalaman profesional sebagai software developer.
              </p>
              <div className="exp-cards">
                {experiences.map((exp, i) => (
                  <ExpCard key={i} exp={exp} />
                ))}
              </div>

              <hr className="skill-divider" />

              {/* ── Skills (bawah) ── */}
              <div id="skills" style={{ scrollMarginTop: "90px" }} />
              <h2>Skills</h2>
              <p className="skill-intro">
                Teknologi dan tools yang saya kuasai dalam pengembangan aplikasi web dan mobile.
              </p>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div key={group.category} className="skill-group">
                    <span className="skill-group__label">{group.category}</span>
                    <div className="skill-group__pills">
                      {group.skills.map((skill) => (
                        <span key={skill} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
