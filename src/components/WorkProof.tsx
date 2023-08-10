import React from "react";
import DragSlider from "./DragSlider";

const WorkProof = () => {
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
  return (
    <div className="container pt-[103px]">
      <h1 className="header-text">Proof of Work Success Stories</h1>
      <p className="subhead-text">
        Learn how proof of work has made an impact and changed their life
      </p>

      <DragSlider slidesPerView={2.3} delay={4000} pagination={true}>
        {proofers.map((proof) => (
          <div key={proof.profile} className="border-2 border-black min-w-[466px]">
            <img
              src={`/assets/repository/profiles/avatar-${proof.profile}.png`}
              alt=""
            />
          </div>
        ))}
      </DragSlider>
    </div>
  );
};

export default WorkProof;
