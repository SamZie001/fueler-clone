// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DragSlider = ({ images, slidesPerView, imgWidths }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {images.map((img, ind) => (
        <SwiperSlide key={ind}>
          <img
            className="cursor-grab my-0 mx-auto"
            
            width={imgWidths}
            src={`/assets/workers/${img.srcExt}.png`}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DragSlider;
