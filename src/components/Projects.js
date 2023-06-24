import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import homeUser from "../assets/img/home.jpg"
import pilihTgl from "../assets/img/pilihtgl.jpg"
import bayar from "../assets/img/bayar.jpg"
import bayar2 from "../assets/img/bayar2.jpg"
import loginPage from "../assets/img/login.jpg"
import regis from "../assets/img/regis.jpg"
import midtrans1 from "../assets/img/midtrans1.jpg"
import midtrans2 from "../assets/img/midtrans2.jpg"
import profile from "../assets/img/profile.jpg"
import detailRes from "../assets/img/detailres.jpg"
import loginEnkrip from "../assets/img/login.jpeg"
import regisEnk from "../assets/img/regis.jpeg"
import homeEnk from "../assets/img/home.jpeg"
import enkTeks from "../assets/img/enkripteks.jpeg"
import enkGambar from "../assets/img/enkripgambar.jpeg"
import listEnk from "../assets/img/listenkrip.jpeg"
import listRes from "../assets/img/listres.jpg"

import loginSis from "../assets/img/loginsis.png"
import regisSis from "../assets/img/regissis.png"
import homeSis from "../assets/img/homesis.png"
import suratMas from "../assets/img/suratmasuk.png"
import suratKel from "../assets/img/suratkeluar.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const dentistApp = [
    loginPage,
    regis,
    homeUser,
    pilihTgl,
    bayar,
    midtrans1,
    midtrans2,
    bayar2,
    listRes,
    detailRes,
    profile
  ]

  const enkripAppimg = [
    loginEnkrip,
    regisEnk,
    homeEnk,
    enkTeks,
    enkGambar,
    listEnk
  ]

  const suratAppimg = [
    loginSis,
    regisSis,
    homeSis,
    suratMas,
    suratKel
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br/><br/>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Aplikasi Reservasi Dokter Gigi berbasis Mobile</p>
                      <p>Merupakan aplikasi yang berfungsi untuk melakukan reservasi dokter gigi pada suatu klinik gigi. Fitur utama aplikasi yaitu login, register, pembuatan reservasi oleh user, pembayaran. Fitur login register menggunakan firebase authentication. Fitur pembayaran menggunakan layanan midtrans sandbox. Pada aplikasi juga terdapat user admin. Admin memiliki tugas untuk menambah, mengupdate, menghapus data dokter dan jadwal, dan juga melakukan konfirmasi reservasi pasien. Aplikasi ini merupakan tugas capstone saya pada semester 6.</p>
                      <p>Teknologi yang digunakan:</p>
                      <p>Bahasa: Kotlin <br/>Framework: Jetpack Compose <br/>Autentikasi: Firebase Authentication <br/>Payment gateway: Midtrans <br/>Database: Firebase Firestore</p>
                      <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme project-slider" autoPlay ={true} rewind={true}>
                        {dentistApp.map((image, index) => (
                          <div key={index}>
                          <img src={image} alt={`carousel-${index}`} className="project-carousel-image" />
                          </div>
                        ))}
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Aplikasi Enkripsi berbasis Mobile menggunakan Algoritma AES</p>
                      <p>Merupakan aplikasi yang berfungsi untuk melakukan enkripsi teks atau gambar menjadi chiper menggunakan algoritma AES. Fungsi login dan register menggunakan firebase authentication. Data pada aplikasi disimpan pada firebase firestore.</p>
                      <p>Teknologi yang digunakan:</p>
                      <p>Bahasa: Kotlin <br/>Framework: Jetpack Compose <br/>Autentikasi: Firebase Authentication <br/>Database: Firebase Firestore</p>
                      <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme project-slider" autoPlay ={true} rewind={true}>
                        {enkripAppimg.map((image, index) => (
                          <div key={index}>
                          <img src={image} alt={`carousel-${index}`} className="project-carousel-image" />
                          </div>
                        ))}
                      </Carousel>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Aplikasi Surat Masuk Surat Keluar berbasis Mobile</p>
                      <p>Merupakan aplikasi aplikasi untuk mengelola surat masuk dan surat keluar, terdapat 2 halaman yaitu surat masuk dan surat keluar. Data surat didapatkan dari dari database MySql menggunakan rest API.</p>
                      <p>Teknologi yang digunakan:</p>
                      <p>Bahasa: Java <br/>Rest client: Retrofit <br/>Rest server: Codeigniter 3 <br/>Database: MySql</p>
                      <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme project-slider" autoPlay ={true} rewind={true}>
                        {suratAppimg.map((image, index) => (
                          <div key={index}>
                          <img src={image} alt={`carousel-${index}`} className="project-carousel-image" />
                          </div>
                        ))}
                      </Carousel>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
