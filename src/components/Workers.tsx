import React, { useEffect, useState } from "react";
import DragSlider from "./DragSlider";

export interface workerI {
  srcExt: string;
}

const Workers = () => {
  const [currWidth, setCurrWidth] = useState(window.innerWidth);
  const workers: workerI[] = [
    {
      srcExt: "content_writer",
    },
    {
      srcExt: "communit_manager",
    },
    {
      srcExt: "product_manager",
    },
    {
      srcExt: "marketer",
    },
    {
      srcExt: "NoCode",
    },
    {
      srcExt: "finance_analyst",
    },
    {
      srcExt: "video_editors",
    },
    {
      srcExt: "designer",
    },
    {
      srcExt: "copywriter",
    },
    {
      srcExt: "developer",
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
      <h1 className="header-text">
        Powering the next generation of knowledge workers
      </h1>
      <p className="subhead-text">
        Fueler is an online portfolio tool for individuals good at multiple
        skills
      </p>

      <div>
        {currWidth > 768 && (
          <div className="flex flex-wrap items-center justify-center gap-10 px-[77px]">
            {workers.map((img, ind) => (
              <img
                key={ind}
                width={180}
                src={`/assets/workers/${img.srcExt}.png`}
                alt=""
              />
            ))}
          </div>
        )}

        <div className="mb-10">
          {currWidth <= 768 && (
            <DragSlider slidesPerView={currWidth < 600 ? 1.5 : 1} delay={2100}>
              {workers.slice(0, 5).map((wrk, ind) => (
                <img
                  className={`${currWidth > 600 ? "mx-auto my-0" : "ml-2"}`}
                  width={currWidth < 600 ? "auto" : "90%"}
                  key={ind}
                  src={`/assets/workers/${wrk.srcExt}.png`}
                  alt=""
                />
              ))}
            </DragSlider>
          )}
        </div>

        <div className="mb-10">
          {currWidth <= 768 && (
            <DragSlider slidesPerView={currWidth < 600 ? 1.5 : 1} delay={1500}>
              {workers.slice(5, 10).map((wrk, ind) => (
                <img
                  className={`${currWidth > 600 ? "mx-auto my-0" : "ml-2"}`}
                  width={currWidth < 600 ? "auto" : "90%"}
                  key={ind}
                  src={`/assets/workers/${wrk.srcExt}.png`}
                  alt=""
                />
              ))}
            </DragSlider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workers;
