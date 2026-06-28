import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/img/new_profile.jpeg";
import date from "../assets/img/calendar.svg";
import email from "../assets/img/emailimg.svg";
import phone from "../assets/img/callimg.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full Stack Developer",
    "Mobile Developer",
    "Warehouse Specialist",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I’m Bilal, `}
                    <span className="txt-rotate" dataPeriod="1000">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Software developer with 2 years of experience specializing
                    in full stack web development, Android mobile apps, and
                    warehouse management systems. I build scalable,
                    clean-architecture solutions — from requirements analysis
                    and REST API design to on-site deployment and
                    production-floor implementation.
                  </p>
                  <p>
                    My expertise covers MES and WMS development, ERP
                    integration, RFID systems, and payment gateway
                    implementation. I have hands-on experience leading
                    projects, coordinating with stakeholders, and delivering
                    end-to-end systems that run in real manufacturing
                    environments.
                  </p>
                  <div className="banner-stack">
                    <span className="banner-stack__group">
                      <strong>Web</strong>
                      Laravel · React · PHP · JavaScript · MySQL · DBeaver
                    </span>
                    <span className="banner-stack__group">
                      <strong>Mobile</strong>
                      Kotlin · Java · Jetpack Compose · Room DB · Retrofit · MVVM / MVI
                    </span>
                  </div>

                  <div className="banner-contact">
                    <div className="banner-contact__item">
                      <div className="banner-contact__icon">
                        <img src={date} alt="" />
                      </div>
                      <span>Cilacap, 13 Februari 2001</span>
                    </div>
                    <div className="banner-contact__item">
                      <div className="banner-contact__icon">
                        <img src={phone} alt="" />
                      </div>
                      <span>083865406407</span>
                    </div>
                    <div className="banner-contact__item">
                      <div className="banner-contact__icon">
                        <img src={email} alt="" />
                      </div>
                      <span>bilalfauzi01@gmail.com</span>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="banner-photo-wrapper">
                    <img src={myImg} alt="Bilal Nurul Fauzi" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
