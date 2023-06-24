import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import ukflag from "../assets/img/ukflag.png"
import kotlin from "../assets/img/ktln.png"
import jetpack from "../assets/img/jetpack.png"
import react from "../assets/img/react.png"
import retrofit from "../assets/img/retrofit.png"
import git from "../assets/img/git.jpg"
import firebase from "../assets/img/firebase.png"
import mysql from "../assets/img/mysql.png"
import office from "../assets/img/office.jpg"


export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <br/><br/>
                            <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider" autoPlay ={true} rewind={true}>
                                <div className="item">
                                    <img src={ukflag} alt="Image"/>
                                    <h5>Bahasa Inggris</h5>
                                </div>
                                <div className="item">
                                    <img src={kotlin} alt="Image" />
                                    <h5>Kotlin</h5>
                                </div>
                                <div className="item">
                                    <img src= {jetpack} alt="Image" />
                                    <h5>Jetpack Compose</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={retrofit} alt="Image" />
                                    <h5>Rest API</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={firebase} alt="Image" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image" />
                                    <h5>MySql</h5>
                                </div>
                                <div className="item">
                                    <img src={office} alt="Image" />
                                    <h5>Microsoft Office</h5>
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