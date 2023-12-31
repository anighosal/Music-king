import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import slide1 from "../../../assets/song1.avif";
import slide2 from "../../../assets/song2.jpeg";
import slide3 from "../../../assets/song3.avif";
import slide4 from "../../../assets/song4avif.avif";
import slide5 from "../../../assets/song5.avif";
import slide6 from "../../../assets/song6.avif";
import slide7 from "../../../assets/song7.avif";
import slide8 from "../../../assets/song8.avif";
import { Fade } from "react-awesome-reveal";

const ExtraSection = () => {
  return (
    <div className="lg:mx-[70px]">
      <Fade>
        <h2 className="text-center font-bold lg:text-3xl text-lg mb-10 mt-20 text-slate-800">
          ---- Our Programmes ----
        </h2>
      </Fade>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide1} alt="" />
          <p className="text-slate-800 text-center">Sydney, 11/02/2023</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide2} alt="" />
          <p className="text-slate-800 text-center">USA NewYork, 11/05/2023</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide3} alt="" />
          <p className="text-slate-800 text-center">Canada, 20/05/2022</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide4} alt="" />
          <p className="text-slate-800 text-center">London, 20/05/2021</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide5} alt="" />
          <p className="text-slate-800 text-center">Germany, 05/02/2021</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide6} alt="" />
          <p className="text-slate-800 text-center">Ireland, 05/02/2020</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide7} alt="" />
          <p className="text-slate-800 text-center">poland, 03/08/2019</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide8} alt="" />
          <p className="text-slate-800 text-center">Scotland, 03/08/2018</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px] hover:shadow-lg transition-transform transform hover:scale-105" src={slide1} alt="" />
          <p className="text-slate-800 text-center">Scotland, 03/08/2018</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ExtraSection;
