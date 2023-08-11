import React, { useEffect, useState } from "react";
import DragSlider from "./DragSlider";

const WorkProof = () => {
  const [currWidth, setCurrWidth] = useState(window.innerWidth);
  const proofers = [
    {
      name: "Aanchal Creates",
      desc: "If I've ever got to work in some of the best startups like 'Josh Talk India' was because of my Proof of work.",
      profile: "6",
    },
    {
      name: "Souptik Debnath",
      desc: "I was creating proof of my work, which really helped me to land potential clients",
      profile: "7",
    },
    {
      name: "Mehul Kundu",
      desc: "I love the Fueler Bucket feature, which allows me to send the specific work that the prospect is looking for.",
      profile: "8",
    },
    {
      name: "Tripti Garg",
      desc: "Start believing in yourself and just follow what people on the next level are doing in the niche that you've chosen. Don't copy, but emulate.",
      profile: "9",
    },
    {
      name: "Santhosh Nayak",
      desc: "I used to struggle a lot when it came to landing opportunities before I discovered Fueler.",
      profile: "10",
    },
    {
      name: "Sweta Shaw",
      desc: "Learning → Implementing → Proof of work is all I needed to land opportunities.",
      profile: "11",
    },
  ];
  const cards = [1, 2, 3, 4, 5];
  const breakPts = {
    1000: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1140: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
  };

  useEffect(() => {
    const handleResize = () => setCurrWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="container pt-[103px]">
      <h1 className="header-text">Proof of Work Success Stories</h1>
      <p className="subhead-text">
        Learn how proof of work has made an impact and changed their life
      </p>

      <div className="mb-[103px]">
        <DragSlider
          slidesPerView={1}
          delay={5000}
          pagination={true}
          breakpoints={breakPts}
        >
          {proofers.map((proof) => (
            <div
              key={proof.profile}
              className="md:h-[202px] md:text-left text-center relative flex items-center p-[24px] gap-10 overflow-hidden flex-col md:flex-row bg-gradient-to-r from-secondary-100 to-secondary-lightPink rounded-2xl"
            >
              <img
                className="absolute top-2 left-2 w-[43px]"
                src="/assets/thunder_blue.png"
                alt=""
              />
              <img
                className="rounded-full"
                width={138}
                src={`/assets/repository/profiles/avatar-${proof.profile}.png`}
                alt=""
              />
              <div className="flex flex-col md:items-start items-center">
                <p className="text-primary font-bold mb-2">{proof.name}</p>
                <p className="text-primary text-xs mb-2">{proof.desc}</p>
                <button className="btn">Read More</button>
              </div>
            </div>
          ))}
        </DragSlider>
      </div>

      <div>
        <h1 className="header-text">
          The Only “Proof of Work” Profile You Need
        </h1>
        <p className="subhead-text">
          Here are the possible scenarios to get the most out of your proof of
          work profile
        </p>

        {currWidth > 768 && (
          <div className="pyramid">
            {cards.map((card) => (
              <img
                key={card}
                src={`/assets/repository/proofs/card-${card}.png`}
                alt=""
              />
            ))}
          </div>
        )}

        {currWidth <= 768 && (
          <DragSlider slidesPerView={1} delay={3000}>
            {cards.map((card) => (
              <img
                key={card}
                src={`/assets/repository/proofs/card-${card}.png`}
                alt=""
              />
            ))}
          </DragSlider>
        )}
      </div>
    </div>
  );
};

export default WorkProof;
