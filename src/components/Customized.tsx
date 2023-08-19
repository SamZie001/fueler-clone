import React, { useState, useEffect } from "react";

const Customized = () => {
  const [section, setSection] = useState(1);
  const [imgSrc, setImgSrc] = useState("create-bucket");
  const [title, setTitle] = useState("Create a Custom Portfolio");
  const [desc, setDesc] = useState(
    "Custom Portfolio helps you create multiple landing pages for your work while applying for internships, freelancing, or jobs."
  );
  const [list, setList] = useState([
    "Custom Portfolio for multiple work type",
    "Learn Multiple skills and create",
    "Monetize your work portfolio",
  ]);

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

  useEffect(() => {
    if (section === 1) {
      setImgSrc("create-bucket");
      setTitle("Create a Custom Portfolio");
      setDesc(
        "Custom Portfolio helps you create multiple landing pages for your work while applying for internships, freelancing, or jobs."
      );
      setList([
        "Custom Portfolio for multiple work type",
        "Learn Multiple skills and create",
        "Monetize your work portfolio",
      ]);
    }
    if (section === 2) {
      setImgSrc("select-add_work");
      setTitle("Select the Work");
      setDesc(
        "Pick all the works, around a particular need and get an instantly dynamic generated landing page for selected works."
      );
      setList([
        "Instant Dynamic Portfolio",
        "Skills-based work portfolio",
        "Hassle-free work portfolio",
      ]);
    }
    if (section === 3) {
      setImgSrc("publish-share");
      setTitle("Let’s see the magic");
      setDesc(
        "Time to see the magic happening, just hit the button and get a brand new need specific work portfolio."
      );
      setList([
        "One-click work portfolio",
        "Attract multiple opportunities",
        "Need-based work portfolio",
      ]);
    }
  }, [section]);

  return (
    <div className="container pt-[103px]">
      <h1 className="header-text">Customized Portfolio</h1>
      <p className="subhead-text">
        Create multiple landing pages for your different types of work
      </p>

      <div className="border-[1px] rounded-2xl p-[40px]">
        {currWidth > 600 && (
          <div className="grid grid-cols-3 text-center gap-[24px] border-b-2 border-[#f8f8f8] ">
            <p
              className={`${
                section === 1 && "border-b-[3px] border-secondary-200"
              } py-5 cursor-pointer`}
              onClick={() => setSection(1)}
            >
              Create a Custom Portfolio
            </p>
            <p
              className={`${
                section === 2 && "border-b-[3px] border-secondary-200"
              } py-5 cursor-pointer`}
              onClick={() => setSection(2)}
            >
              Select & Add Work
            </p>
            <p
              className={`${
                section === 3 && "border-b-[3px] border-secondary-200"
              } py-5 cursor-pointer`}
              onClick={() => setSection(3)}
            >
              Publish & Share
            </p>
          </div>
        )}
        {currWidth <= 600 && (
          <div className="grid grid-cols-3 text-center gap-[24px]">
            <button
              className={`${
                section === 1 ? "bg-primary" : "bg-[#f8f8f8]"
              } py-2 border-[1px] rounded-lg text-[#8f92a1]`}
              onClick={() => setSection(1)}
            >
              Step 1
            </button>
            <button
              className={`${
                section === 2 ? "bg-primary" : "bg-[#f8f8f8]"
              } py-2 border-[1px] rounded-lg text-[#8f92a1]`}
              onClick={() => setSection(2)}
            >
              Step 2
            </button>
            <button
              className={`${
                section === 3 ? "bg-primary" : "bg-[#f8f8f8]"
              } py-2 border-[1px] rounded-lg text-[#8f92a1]`}
              onClick={() => setSection(3)}
            >
              Step 3
            </button>
          </div>
        )}
        <div className="pt-[24px] flex justify-between gap-[15px] md:flex-row flex-col-reverse">
          <div className="flex-1 pt-8">
            <h2 className=" text-primary md:font-bold font-semibold md:text-[28px] text-[32px] mb-3">
              {title}
            </h2>
            <p className="text-[#8b87a3] mb-6">{desc}</p>
            <ul className=" mb-12">
              {list.map((item, index) => (
                <li
                  className="text-[#8b87a3] text-sm font-[500] mb-2 list-disc ml-4"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn">Create my profile</button>
          </div>
          <div className="flex-1">
            <img src={`/assets/repository/customP/${imgSrc}.png`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customized;
