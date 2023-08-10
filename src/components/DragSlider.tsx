// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export interface sliderI {
  slidesPerView: number;
  delay: number;
  pagination?: boolean;
  breakpoints?: any;
  children: JSX.Element[];
}

const DragSlider = ({
  children,
  breakpoints,
  slidesPerView,
  delay,
  pagination,
}: sliderI) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      // spaceBetween={50}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      pagination={pagination ? { clickable: true, dynamicBullets: true } : {}}
      loop={true}
      grabCursor={true}
      breakpoints={breakpoints}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

DragSlider.defaultProps = {
  breakpoints: {},
  pagination: true, // Example of another prop with default value
};

export default DragSlider;
