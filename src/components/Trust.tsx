import React from "react";
import DragSlider from "./DragSlider";

const Trust = () => {
  const communities = [
    "designers",
    "Stoa",
    "product-folks",
    "Scenes",
    "blue-learn",
    "Crework",
    "MarkitUp",
    "growth-school",
    "dc-logo",
  ];
  const tweets = [1, 2, 3, 4, 5, 6, 7, 8];
  const breakPts = {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1140: {
      slidesPerView: 3.4,
      spaceBetween: 20,
    },
  };
  return (
    <div className="container pt-[103px]">
      <div className="mb-[103px]">
        <h1 className="header-text">
          Trusted by the folks from the amazing communities
        </h1>

        <div className="flex flex-wrap justify-center gap-[16px] items-center mt-10">
          {communities.map((pic, ind) => (
            <img
              key={ind}
              width={85}
              className="rounded-full"
              src={`/assets/repository/communities/${pic}.png`}
              alt=""
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="header-text">Here’s what the best are saying</h1>

        <DragSlider
          slidesPerView={1}
          delay={3300}
          breakpoints={breakPts}
          pagination={true}
        >
          {tweets.map((item) => (
            <img
              key={item}
              src={`/assets/repository/tweets/advice_${item}.png`}
              alt=""
            />
          ))}
        </DragSlider>
      </div>
    </div>
  );
};

export default Trust;
