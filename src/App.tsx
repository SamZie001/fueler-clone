import React from "react";
import Header from "./components/Header";
import { CTA1, CTA2 } from "./components/CTA";
import Workers from "./components/Workers";
import PortfolioTool from "./components/PortfolioTool";
import RepositoryOfWork from "./components/RepositoryOfWork";
import Guide from "./components/Guide";
import WorkProof from "./components/WorkProof";
import Footer from "./components/Footer";
import Trust from "./components/Trust";
import WhyFeuler from "./components/WhyFeuler";
import Features from "./components/Features";
import Trending from "./components/Trending";
import Customized from "./components/Customized";

function App() {
  return (
    <div>
      <Header />
      <CTA1 />
      <div className="my-[99px] mx-auto grid place-items-center gap-[56px]">
        <h1 className="header-text">As featured on</h1>
        <div className="flex md:flex-row flex-col items-center gap-5">
          <img src="/assets/bwm-logo.png" alt="bwm" />
          <img src="/assets/starter-story-logo.png" alt="" />
        </div>
      </div>
      <Workers />
      <PortfolioTool />
      <RepositoryOfWork />
      <Guide />
      <WorkProof />
      <Trust />
      <WhyFeuler />
      <Features />
      <Trending />
      <Customized />
      <CTA2 />
      <Footer />
    </div>
  );
}

export default App;
