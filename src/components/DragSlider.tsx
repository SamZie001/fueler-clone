// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export interface sliderI {
  slidesPerView: number;
  delay: number;
  children: JSX.Element[];
}

const DragSlider = ({ children, slidesPerView, delay }: sliderI) => {
  return (
    <Swiper
      modules={[Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      loop={true}
      grabCursor={true}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DragSlider;
