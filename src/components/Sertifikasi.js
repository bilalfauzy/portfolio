import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp2 from "../assets/img/color-sharp2.png";

import serKot from "../assets/img/sertkotlin.png";
import serAnd from "../assets/img/sertandroid.png";

// eslint-disable-next-line import/no-webpack-loader-syntax
import pdfKotlin  from "../assets/pdf/sertifikat kursus kotlin-1.pdf";
import pdfAndroid from "../assets/pdf/sertifikat kursus android-1.pdf";
import pdfBackend from "../assets/pdf/sertifikat kursus backend-1.pdf";
import pdfJs      from "../assets/pdf/sertifikat kursus javascript.pdf";
import pdfAws     from "../assets/pdf/sertifikat_cloud_aws.pdf";

const certs = [
  {
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding Academy",
    category: "Mobile",
    icon: "📱",
    preview: serKot,
    pdf: pdfKotlin,
  },
  {
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    issuer: "Dicoding Academy",
    category: "Mobile",
    icon: "🤖",
    preview: serAnd,
    pdf: pdfAndroid,
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Academy",
    category: "Backend",
    icon: "⚙️",
    preview: null,
    pdf: pdfBackend,
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Academy",
    category: "Web",
    icon: "🌐",
    preview: null,
    pdf: pdfJs,
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    category: "Cloud",
    icon: "☁️",
    preview: null,
    pdf: pdfAws,
  },
];

const responsive = {
  desktop:  { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  tablet:   { breakpoint: { max: 1024, min: 600 },  items: 2 },
  mobile:   { breakpoint: { max: 600,  min: 0 },    items: 1 },
};

export const Sertifikasi = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const close = (e) => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="sertifikasi-section" id="sertifikasi">
      <div className="container">
        <h2 className="sertifikasi-section__title">Certifications</h2>
        <p className="sertifikasi-section__intro">
          Sertifikat yang saya peroleh dari kursus dan pelatihan profesional.
        </p>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
          keyBoardControl={true}
          pauseOnHover={true}
          transitionDuration={500}
          itemClass="cert-card-item"
        >
          {certs.map((cert, i) => (
            <div
              key={i}
              className="cert-card"
              onClick={() => setActive(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") setActive(cert); }}
              aria-label={`Lihat sertifikat ${cert.title}`}
            >
              <div className="cert-card__media">
                {cert.preview ? (
                  <img src={cert.preview} alt={cert.title} />
                ) : (
                  <div className="cert-card__placeholder">
                    <span>{cert.icon}</span>
                  </div>
                )}
                <span className="cert-card__category">{cert.category}</span>
              </div>
              <div className="cert-card__body">
                <p className="cert-card__title">{cert.title}</p>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <span className="cert-card__cta">Lihat Sertifikat →</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <img className="background-image-right" src={colorSharp2} alt="" />

      {/* PDF / Image Modal */}
      {active && (
        <div className="cert-modal" onClick={() => setActive(null)}>
          <div className="cert-modal__inner" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal__header">
              <div>
                <span className="cert-modal__badge">{active.category}</span>
                <h4 className="cert-modal__title">{active.title}</h4>
                <p className="cert-modal__issuer">{active.issuer}</p>
              </div>
              <button
                className="cert-modal__close"
                onClick={() => setActive(null)}
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>

            <div className="cert-modal__body">
              {active.preview ? (
                <img
                  src={active.preview}
                  alt={active.title}
                  className="cert-modal__img"
                />
              ) : (
                <iframe
                  src={active.pdf}
                  title={active.title}
                  className="cert-modal__pdf"
                />
              )}
            </div>

            <div className="cert-modal__footer">
              <a
                href={active.pdf}
                target="_blank"
                rel="noreferrer"
                className="cert-modal__link"
              >
                Buka / Unduh PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
