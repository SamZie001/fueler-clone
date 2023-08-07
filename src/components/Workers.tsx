import React, { useEffect, useState } from "react";
import DragSlider from "./DragSlider";

export interface workerI {
  srcExt: string;
}

const Workers = () => {
  const [currWidth, setCurrWidth] = useState(window.innerWidth);
  const workers: workerI[] = [
    {
      srcExt: "communit_manager",
    },
    {
      srcExt: "content_writer",
    },
    {
      srcExt: "copywriter",
    },
    {
      srcExt: "designer",
    },
    {
      srcExt: "developer",
    },
    {
      srcExt: "finance_analyst",
    },
    {
      srcExt: "marketer",
    },
    {
      srcExt: "NoCode",
    },
    {
      srcExt: "product_manager",
    },
    {
      srcExt: "video_editors",
    },
  ];

  useEffect(() => {
    const handleSwitch = () => {
      setCurrWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleSwitch);

    return () => {
      window.removeEventListener("resize", handleSwitch);
    };
  });
  return (
    <div>
      <h1 className="header-text mb-3">
        Powering the next generation of knowledge workers
      </h1>
      <p className="mb-10 text-center text-primary">
        Fueler is an online portfolio tool for individuals good at multiple
        skills
      </p>

      {currWidth > 768 && (
        <div className="flex flex-wrap items-center justify-center gap-10 px-[77px]">
          {workers.map((img, ind) => (
            <img
              key={ind}
              width={190}
              src={`/assets/workers/${img.srcExt}.png`}
              alt=""
            />
          ))}
        </div>
      )}

      <div className="mb-10">
        {currWidth <= 768 && (
          <DragSlider
            images={workers.slice(0, 5)}
            slidesPerView={1}
            imgWidths={"90%"}
          />
        )}
      </div>

      <div>
        {currWidth <= 768 && (
          <DragSlider
            images={workers.slice(5, 10)}
            slidesPerView={1}
            imgWidths={"90%"}
          />
        )}
      </div>
    </div>
  );
};

export default Workers;
