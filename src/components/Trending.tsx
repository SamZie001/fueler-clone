import React, { useEffect, useState } from "react";
import DragSlider from "./DragSlider";

const Trending = () => {
  const [currWidth, setCurrrWidth] = useState(window.innerWidth);
  const count = [1, 2, 3];

  useEffect(() => {
    const handleResize = () => setCurrrWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="container pt-[103px]">
      <h1 className="header-text">Trending profiles of the month</h1>
      <p className="subhead-text">
        Be original. Be an example. Lead by example.
      </p>
      {currWidth >= 600 && (
        <div
          className={`grid ${
            currWidth <= 768 ? "grid-cols-1" : "grid-cols-3"
          } gap-10 py-10 place-items-center`}
        >
          {count.map((count) => (
            <div className="shadow-xl" key={count}>
              <img
                src={`/assets/repository/trending/card-${count}.png`}
                alt=""
              />
            </div>
          ))}
        </div>
      )}

      {currWidth < 600 && (
        <DragSlider slidesPerView={1} delay={3500}>
          {count.map((count) => (
            <div className="shadow-xl" key={count}>
              <img
                src={`/assets/repository/trending/card-${count}.png`}
                alt=""
              />
            </div>
          ))}
        </DragSlider>
      )}
    </div>
  );
};

export default Trending;
