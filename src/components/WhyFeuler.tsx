import React from "react";

const WhyFeuler = () => {
  return (
    <div className="container pt-[103px] grid lg:grid-cols-2">
      <div className="relative">
        <img className="absolute top-[59px] left-[20px] w-[87px]" src="/assets/thunder_blue.png" alt="" />
        <img src="/assets/why_fueler-img.jpg" alt="" />
      </div>

      <div className="md:pl-24">
        <h1 className="mb-3 text-primary md:font-bold font-semibold md:text-[40px] text-[32px]">
          Why Fueler.io?
        </h1>
        <p className="mb-10 text-primary text-base">
          Your proof of work deserves a place where you can build an economy
          around your identity. Fueler.io turns your proof of work into social
          capital that brings you exciting opportunities
        </p>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-center gap-[35px]">
            <div className="w-[148px]">
              <img src="/assets/bulb.png" alt="bulb" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">
                All your work at a place
              </p>
              <p className="text-xs">
                Fueler.io gives you the opportunity to showcase all your hard
                work at single platform
              </p>
            </div>
          </li>

          <li className="flex justify-center gap-[35px]">
            <div className="w-[148px]">
              <img src="/assets/folder.png" alt="folder" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Beautiful documentation
              </p>
              <p className="text-xs">
                Start documenting your work in the most modern way and share
                wherever you want
              </p>
            </div>
          </li>

          <li className="flex justify-center gap-[35px]">
            <div className="w-[148px]">
              <img src="/assets/clock.png" alt="clock" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">
                Grow your online presence
              </p>
              <p className="text-xs">
                Fueler.io is a unique way to increase your online presence with
                the help your proof of work
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyFeuler;
