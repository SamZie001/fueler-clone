// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

export interface sliderI {
  slidesPerView: number;
  delay: number;
  pagination?: boolean;
  breakpoints?: any;
  direction?: string;
  children: JSX.Element[];
}

const DragSlider = ({
  children,
  breakpoints,
  slidesPerView,
  delay,
  direction,
  pagination
}: sliderI) => {
  return (
    <Swiper
      modules={[Autoplay, A11y, Pagination]}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      loop={true}
      grabCursor={true}
      breakpoints={breakpoints}
      dir={direction}
      // pagination={{dynamicBullets: pagination}}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DragSlider;
