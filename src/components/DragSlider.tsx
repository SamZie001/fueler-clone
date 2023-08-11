// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

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
}: sliderI) => {
  return (
    <Swiper
      modules={[Autoplay, A11y]}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      loop={true}
      grabCursor={true}
      breakpoints={breakpoints}
      dir={direction}
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
