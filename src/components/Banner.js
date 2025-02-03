import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import myImg from "../assets/img/bilal.jpg";
import date from "../assets/img/calendar.svg";
import locImg from "../assets/img/lokasiimg.svg";
import email from "../assets/img/emailimg.svg";
import phone from "../assets/img/callimg.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Mahasiswa", "Android Developer", "Mobile Developer"];
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
                  <span className="tagline">Welcome to my Portfolio..</span>
                  <h1>
                    {`Hi! I'm Bilal Nurul Fauzi, `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Engineer", "Web Developer", "Android Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Hi! I’m a passionate Software Engineer, Web Developer, and
                    Android Developer with 2 years of experience in building web
                    and mobile applications. I have completed my Bachelor’s
                    degree in Informatics from Universitas Teknologi Yogyakarta,
                    and I’m always eager to take on new challenges in the tech
                    industry. My expertise includes Node.js, Laravel, Express
                    Js, MySQL, PostgreSQL, and Firebase for backend development,
                    React.js, Inertia for client side modern web applications,
                    and Kotlin, Java, and Jetpack Compose for crafting
                    high-performance Android apps. I thrive on solving complex
                    problems, learning new technologies, and building
                    innovative, scalable, and user-friendly applications. I also
                    have strong knowledge of REST API development, warehouse
                    management systems, RFID systems, Payment Gateways,
                    Authentication, OAuth, and database management. I thrive on
                    solving complex problems, learning new technologies, and
                    building innovative, scalable, and user-friendly
                    applications. I’m currently Open to new opportunities and
                    excited to contribute my skills to impactful projects. Let’s
                    connect and build something amazing together! 🚀
                  </p>
                  <Row className="row-info">
                    <p>
                      <img src={date} /> Cilacap, 13 Februari 2001
                    </p>
                  </Row>
                  {/* <Row className="row-info">
                    <p>
                      <img src={locImg} /> Jakarta, Indonesia
                    </p>
                  </Row> */}
                  <Row className="row-info">
                    <p>
                      <img src={phone} /> 083865406407
                    </p>
                  </Row>
                  <Row className="row-info">
                    <p>
                      <img src={email} /> bilalfauzi01@gmail.com
                    </p>
                  </Row>
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
                  <img src={myImg} alt="Header Img" id />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
