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

const ExtraSection = () => {
  return (
    <>
      <h2 className="text-center font-bold text-2xl text-blue-800 mb-7">
        ---- Our Programmes ----
      </h2>

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
          <img className="h-[300px]" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[300px]" src={slide1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ExtraSection;
