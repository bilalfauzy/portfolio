import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { projectsData } from "./projectsData";

export const ProjectDetail = ({ projectId, onBack }) => {
  const project = projectsData.find((p) => p.id === projectId);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  if (!project) {
    return (
      <section className="project-detail">
        <Container>
          <button className="detail-back" onClick={onBack}>
            &larr; Kembali ke Portfolio
          </button>
          <p>Proyek tidak ditemukan.</p>
        </Container>
      </section>
    );
  }

  const isMobile = project.category === "Mobile";

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: isMobile ? 4 : 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: isMobile ? 3 : 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: isMobile ? 2 : 1,
    },
  };

  return (
    <section className="project-detail">
      <Container>
        <button className="detail-back" onClick={onBack}>
          &larr; Kembali ke Portfolio
        </button>

        <div className="detail-header">
          <span className="detail-category">{project.category}</span>
          <h1 className="detail-title">{project.title}</h1>
        </div>

        <Row className="detail-content">
          <Col lg={8} className="detail-main">
            <div className="detail-block">
              <h3 className="detail-section-title">Tentang Proyek</h3>
              <p className="detail-desc">{project.fullDesc}</p>
            </div>
            <div className="detail-block">
              <h3 className="detail-section-title">Fitur Utama</h3>
              <ul className="detail-features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={4} className="detail-side">
            <div className="detail-block">
              <h3 className="detail-section-title">Tech Stack</h3>
              <div className="detail-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge tech-badge--lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Screenshot carousel */}
        <div className="detail-block">
          <h3 className="detail-section-title">Screenshot</h3>
          <p className="detail-screenshot-hint">Klik gambar untuk melihat lebih besar</p>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            pauseOnHover={true}
            className="detail-screenshot-slider"
            itemClass="detail-screenshot-item"
          >
            {project.screenshots.map((src, index) => (
              <div
                key={index}
                className="detail-screenshot"
                onClick={() => setLightbox(src)}
                role="button"
                tabIndex={0}
                aria-label={`Buka screenshot ${index + 1}`}
                onKeyDown={(e) => { if (e.key === "Enter") setLightbox(src); }}
              >
                <img src={src} alt={`${project.title} screenshot ${index + 1}`} />
                <div className="detail-screenshot__zoom">&#x2B;</div>
              </div>
            ))}
          </Carousel>
        </div>

        <button className="detail-back detail-back--bottom" onClick={onBack}>
          &larr; Kembali ke Portfolio
        </button>
      </Container>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox__close"
              onClick={() => setLightbox(null)}
              aria-label="Tutup"
            >
              ✕
            </button>
            <img src={lightbox} alt="Preview" className="lightbox__img" />
          </div>
        </div>
      )}
    </section>
  );
};
