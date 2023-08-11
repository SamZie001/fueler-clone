import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export const CTA1 = () => {
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
        window.innerWidth > 1023
          ? "/assets/hero-left.png"
          : "/assets/hero-top__mobile.png";
      setImageSource1(newImageSource1);

      const newImageSource2 =
        window.innerWidth > 1023
          ? "/assets/hero-right.png"
          : "/assets/hero-btm__mobile.png";
      setImageSource2(newImageSource2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container relative bg-gradient-to-r from-secondary-100 to-secondary-lightPink rounded-3xl">
      <div className="flex gap-4 lg:flex-row flex-col justify-between items-center">
        <div className="absolute top-0 right-[-18px] ">
          <img
            className="transform z-0 lg:scale-90 scale-50"
            src="/assets/thunder_white.png"
            alt=""
          />
        </div>

        <div>
          <img className="transform scale-75" src={imageSource1} alt="hero" />
        </div>

        <div className="flex flex-col flex-1 gap-8 items-center min-w-[330px]">
          <h2 className="header-text">Show your work and make more money</h2>
          <p className="text-center md:text-base font-light text-sm">
            New age portfolio tool for creators and knowledge workers
          </p>
          <button className="btn">Get started - It's free</button>
          <div className="grid grid-cols-2 items-center place-items-center justify-items-center md:gap-4">
            <img
              src="/assets/generalists.png"
              alt=""
              className="lg:scale-100 scale-75"
            />
            <p className="text-xl font-bold md:font-normal">
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

export const CTA2 = () => {
  const [currWidth, setCurrWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCurrWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="container py-[103px]">
      <div className="overflow-hidden flex lg:flex-row flex-col items-center justify-between relative bg-gradient-to-r from-secondary-100 to-secondary-lightPink rounded-3xl">
        {currWidth > 1024 && (
          <div className="flex-1 transform translate-y-[15%]">
            <img src="/assets/cta_right.png" alt="" />
          </div>
        )}

        <div
          className={`lg:max-w-[50%] max-w-[90%] py-[24px] flex flex-col items-center justify-center ${
            currWidth < 1024 && "absolute"
          }`}
        >
          <p className="header-text">
            Creating portfolio made simple for{" "}
            <TypeAnimation
              sequence={[
                "",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Product Manager",
                2000,
                "Community Manager",
                2000,
                "Content Writer",
                2000,
                "Copywriter",
                2000,
                "Marketer",
                2000,
                "Growth Hacker",
                2000,
                "Video Editors",
                2000,
                "Designer",
                2000,
                "Developer",
                2000,
              ]}
              speed={20}
              deletionSpeed={5}
              className="text-secondary-pink md:font-bold font-semibold md:text-[40px] text-[32px]"
              repeat={Infinity}
            />
          </p>
          <p className="mb-3 text-primary lg:text-[18px] text-sm text-center">
            Trusted by 27700+ Generalists. Try it now, free to use
          </p>
          <button className="btn">Start making more money</button>
        </div>

        <div className="flex-1">
          <img
            className={`${currWidth > 1024 && "transform translate-y-[15%]"}`}
            src={
              currWidth <= 1024
                ? "/assets/btm-CTA__mobile.png"
                : "/assets/cta_left.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
