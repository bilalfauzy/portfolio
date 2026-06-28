import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { projectsData } from "./projectsData";

export const Projects = ({ onProjectClick }) => {
  // Konfigurasi responsif carousel auto-play
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p className="project-intro">
                    Beberapa proyek yang pernah saya kerjakan sebagai fullstack &amp; mobile
                    developer. Klik kartu untuk melihat detail lengkapnya.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    transitionDuration={600}
                    keyBoardControl={true}
                    pauseOnHover={true}
                    removeArrowOnDeviceType={["mobile"]}
                    className="project-cards-slider"
                    itemClass="project-card-item"
                  >
                    {projectsData.map((project) => (
                      <article
                        key={project.id}
                        className="project-card"
                        onClick={() => onProjectClick(project.id)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Lihat detail proyek ${project.title}`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onProjectClick(project.id);
                          }
                        }}
                      >
                        <div className="project-card__media">
                          <img src={project.cover} alt={project.title} />
                          <span className="project-card__category">{project.category}</span>
                        </div>
                        <div className="project-card__body">
                          <h4 className="project-card__title">{project.title}</h4>
                          <p className="project-card__desc">{project.shortDesc}</p>
                          <div className="project-card__tags">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span key={tech} className="tech-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <span className="project-card__cta">Lihat Detail &rarr;</span>
                        </div>
                      </article>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img" />
    </section>
  );
};
