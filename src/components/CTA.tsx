import React, { useState, useEffect } from "react";

const CTA = () => {
  const [imageSource1, setImageSource1] = useState(
    window.innerWidth > 800
      ? "/assets/hero-left.png"
      : "/assets/hero-top__mobile.png"
  );
  const [imageSource2, setImageSource2] = useState(
    window.innerWidth > 800
      ? "/assets/hero-right.png"
      : "/assets/hero-btm__mobile.png"
  );

  useEffect(() => {
    const handleResize = () => {
      const newImageSource1 =
        window.innerWidth > 800
          ? "/assets/hero-left.png"
          : "/assets/hero-top__mobile.png";
      setImageSource1(newImageSource1);

      const newImageSource2 =
        window.innerWidth > 800
          ? "/assets/hero-right.png"
          : "/assets/hero-btm__mobile.png";
      setImageSource2(newImageSource2);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-[90%] my-0 mx-auto relative  bg-gradient-to-r from-secondary-100 to-secondary-lightPink rounded-3xl">
      <div className="flex gap-4 md:flex-row flex-col justify-between items-center container">
        <div className="absolute top-0 right-[-18px] ">
          <img
            className="transform z-0 md:scale-90 scale-50"
            src="/assets/thunder_white.png"
            alt=""
          />
        </div>

        <div>
          <img className="transform scale-75" src={imageSource1} alt="hero" />
        </div>

        <div className="flex flex-col flex-1 gap-8 items-center">
          <h2 className="header-text">Show your work and make more money</h2>
          <p className="text-center md:text-base font-light text-sm">
            New age portfolio tool for creators and knowledge workers
          </p>
          <button className="btn">Get started - It's free</button>
          <div className="grid grid-cols-2 items-center justify-items-center md:gap-4 transform md:translate-y-[40px]">
            <img
              src="/assets/generalists.png"
              alt=""
              className="md:scale-100 scale-75"
            />
            <p className="text-sm md:font-medium font-light">
              Join 27500+ Generalists
            </p>
          </div>
        </div>

        <div>
          <img className="transform scale-75" src={imageSource2} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
