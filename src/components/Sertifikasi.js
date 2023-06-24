import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import serKot from "../assets/img/sertkotlin.png"
import serAnd from "../assets/img/sertandroid.png"
import colorSharp from "../assets/img/color-sharp.png"


export const Sertifikasi = () => {
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
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
    <section className="skill" id="sertifikasi">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Certification</h2>
                            <br/><br/>
                            <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme sertifikasi-slider" autoPlay ={true} rewind={true}>
                                <div className="item">
                                    <img src={serKot} alt="Image" className=''/>
                                    <h5>Memulai Pemrograman dengan Kotlin</h5>
                                </div>
                                <div className="item">
                                    <img src={serAnd} alt="Image" />
                                    <h5>Belajar Membuat Aplikasi Android untuk Pemula</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
  )
}
