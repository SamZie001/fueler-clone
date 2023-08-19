// @ts-nocheck
import React, { useState } from "react";

interface Accordions {
  topic: string;
  desc: string;
  bg: string;
}

const Features = () => {
  const [active, setActive] = useState(null);
  const [img, setImg] = useState("img-1");
  const [points, setPoints] = useState<Accordions[]>([
    {
      topic: "Specially Built for Generalists",
      desc: "Your proof of work is the the best way to show your multi-skilled individuality to the world",
      bg: "#defffd",
    },
    {
      topic: "Plug it to your social profile",
      desc: "Try plugging in your Fueler.io profile on the bio of your social profiles and more",
      bg: "#ebdbff",
    },
    {
      topic: "For commissioned projects",
      desc: "You can also share your Fueler.io link while applying for commissioned Project",
      bg: "#ffdbdc",
    },
    {
      topic: "Collaboration for next project",
      desc: "Share your Fueler.io link with collaborator to help them understand you better through your work",
      bg: "#fffadc",
    },
    {
      topic: "Externship, Internship, and Jobs",
      desc: "Share your Fueler.io link while applying for jobs, internship or freelancing to stand out from the crowd.",
      bg: "#e7ffe3",
    },
  ]);

  const handleToggle = (i: number) => {
    setImg(`img-${i + 1}`);
    if (active === i) {
      return setActive(null);
    }

    setActive(i);
  };

  return (
    <div className="container pt-[103px]">
      <div className="header-text">
        <h1 className="header-text">
          Why builders, makers and creators love fueler.io
        </h1>
      </div>

      <div className="flex pt-[72px] justify-between gap-10">
        <div className="flex-1">
          {points.map((point, index) => (
            <div
              key={index}
              className={`relative  rounded-3xl text-primary py-5 px-[36px] transition-background`}
              style={{
                backgroundColor: active === index ? point.bg : "transparent",
              }}
            >
              <img
                className={`absolute top-5 left-[-28px] bg-white transform rotate-[-20deg] max-w-max p-[10px] rounded-xl shadow-lg ${
                  active === index ? "block" : "hidden"
                }`}
                src={`/assets/accordion/icon-${index + 1}.png`}
                width={49}
                alt=""
              />

              {/* topic div */}
              <div
                className="pb-5 cursor-pointer flex justify-between items-center"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-[21px] font-semibold">{point.topic}</h2>
                <label className="toggles">
                  <input type="checkbox" checked={active === index} />
                </label>
              </div>

              {/* description div */}
              <div
                className={`${
                  active === index ? "show-content" : "def-content"
                } text-sm`}
              >
                {point.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 hidden lg:block">
          <img src={`/assets/accordion/${img}.webp`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
