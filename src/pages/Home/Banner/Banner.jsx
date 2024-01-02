import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/download (16).jpg";
import img2 from "../../../assets/img2.avif";
import img3 from "../../../assets/img3.avif";
import "./Banner.css";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Carousel>
      <div className="banner-card">
        <img src={img1} />
        <div className="banner-text">
          <Fade>
            <h2 className="text lg:text-3xl text-lg font-bold ">
              "Unlock Your Musical Potential with Music King School!"
            </h2>
            <p>
              Welcome to Music King School, where dreams of becoming a musical
              maestro come true!  Whether you're a beginner with a passion
              for music or a seasoned musician looking to  refine your
              skills, Music King School is the ultimate destination for your
              musical journey.
            </p>
          </Fade>
        </div>
      </div>
      <div className="banner-card">
        <img src={img2} />
        <div className="banner-text">
          <Fade>
            <h2 className="text lg:text-3xl ">
              "Unlock Your Musical Potential with Music King School!"
            </h2>
            <p>
              Welcome to Music King School, where dreams of becoming a musical
              maestro come true! Whether you're a beginner with a passion
              for music or a seasoned musician looking to  refine your
              skills, Music King School is the ultimate destination for your
              musical journey.
            </p>
          </Fade>
        </div>
      </div>
      <div className="banner-card">
        <img src={img3} />
        <div className="banner-text">
          <Fade>
            <h2 className="text lg:text-3xl ">
              "Unlock Your Musical Potential with Music King School!"
            </h2>
            <p>
              Welcome to Music King School, where dreams of becoming a musical
              maestro come true!  Whether you're a beginner with a passion
              for music or a seasoned musician looking to  refine your
              skills, Music King School is the ultimate destination for your
              musical journey.
            </p>
          </Fade>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
