import React, { useState, useEffect } from "react";

const PortfolioTool = () => {
  const [currWidth, setCurrWidth] = useState(window.innerWidth);

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
    <div className="pt-[64px]">
      <h1 className="header-text">
        #1 Portfolio tool for all your career needs
      </h1>
      <p className="subhead-text">
        Impress your clients with a customized portfolio for different needs.
        Avoid sending one portfolio to every client every time
      </p>

      <div className="container">
        <img
          className="my-0 mx-auto rounded-[21px]"
          src={`/assets/${
            currWidth <= 992 ? "portfolio-tool_sec-mbl" : "portfolio-tool_pri"
          }.webp`}
          alt=""
        />
        {/* <img src={"/assets/portfolio-tool_pri.webp"} alt="" /> */}
      </div>
    </div>
  );
};

export default PortfolioTool;
