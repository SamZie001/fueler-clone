import React from "react";
import Header from "./components/Header";
import CTA from "./components/CTA";
import Workers from "./components/Workers";
import PortfolioTool from "./components/PortfolioTool";
import RepositoryOfWork from "./components/RepositoryOfWork";
import Guide from "./components/Guide";
import WorkProof from "./components/WorkProof";

function App() {
  return (
    <div>
      <Header />
      <CTA />
      <div className="my-[99px] mx-auto grid place-items-center gap-[56px]">
        <h1 className="header-text">As featured on</h1>
        <div className="md:flex grid gap-5">
          <img src="/assets/bwm-logo.png" alt="bwm" />
          <img src="/assets/starter-story-logo.png" alt="" />
        </div>
      </div>
      <Workers />
      <PortfolioTool />
      <RepositoryOfWork />
      <Guide />
      <WorkProof />
    </div>
  );
}

export default App;
