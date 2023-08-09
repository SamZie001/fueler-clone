import React, { useEffect, useState } from "react";
import DragSlider from "./DragSlider";

export interface RepoI {
  thumbnail: string;
  title: string;
  name: string;
  bgColor: string;
  profile: string;
}

const RepositoryOfWork = () => {
  const [currWidth, setCurrWidth] = useState(window.innerWidth);

  const [slideNumber, setSlideNumber] = useState(4.5);

  const repository: RepoI[] = [
    {
      thumbnail: "carnal-masters.jpg",
      title: "Carnal Masters: A Sexual Health Platform Case Study",
      profile: "avatar-4",
      name: "Harsh",
      bgColor: "fddae8",
    },
    {
      thumbnail: "default.png",
      title: "Content Writing and Strategy Portfolio",
      profile: "avatar-1",
      name: "Diksha",
      bgColor: "fde4e2",
    },
    {
      thumbnail: "duo-lingo.jpg",
      title:
        "Mini-Product Analysis of Duolingo - the Gamified Language Learning Application.",
      profile: "avatar-1",
      name: "Diksha",
      bgColor: "fff3dd",
    },
    {
      thumbnail: "kee-vurds.png",
      title: "Building KeeVurds - A Startup Media Platform",
      profile: "avatar-5",
      name: "Snugdha",
      bgColor: "fffee3",
    },
    {
      thumbnail: "medium.jpg",
      title: "Top 10 Product Management Frameworks Every PM Should Know",
      profile: "avatar-2",
      name: "Himanshu",
      bgColor: "#f0f7e2",
    },
    {
      thumbnail: "present-slide.png",
      title: "Present Slide - A Resource Hub For Students",
      profile: "avatar-4",
      name: "Harsh",
      bgColor: "d8f2e9",
    },
    {
      thumbnail: "default.png",
      title:
        "Fun Things to do in Berkeley, CA That You’ll Keep Coming Back to | Roomi",
      profile: "avatar-5",
      name: "Snugdha",
      bgColor: "e4f5fe",
    },
    {
      thumbnail: "product-case.jpg",
      title:
        "Product Case Study - Leap Dash (Deepstash for Career-based content)",
      profile: "avatar-3",
      name: "Ajeet",
      bgColor: "e4f5fe",
    },
    {
      thumbnail: "default.png",
      title:
        "𝗣𝗥𝗔𝗝𝗪𝗔𝗟 on Instagram: 𝐋𝐢𝐟𝐞 𝐢𝐬 𝐭𝐨𝐨 𝐬𝐡𝐨𝐫𝐭 𝐭𝐨 𝐚𝐫𝐠𝐮𝐞, 𝐬𝐨 𝐣𝐮𝐬𝐭 𝐞𝐧𝐣𝐨𝐲 𝐞𝐯𝐞𝐫𝐲 𝐦𝐨𝐦𝐞𝐧𝐭… 🐎Edit- @i.hch12 ❤️",
      profile: "avatar-4",
      name: "Harsh",
      bgColor: "f4e3fe",
    },
    {
      thumbnail: "soda.jpg",
      title: "Storyboard Template for a Soda Commercial",
      profile: "avatar-2",
      name: "Himanshu",
      bgColor: "fddae8",
    },
    {
      thumbnail: "street-food.jpg",
      title: "The Best Street Food in New York You Can Eat Anytime!",
      profile: "avatar-5",
      name: "Snugdha",
      bgColor: "fde4e2",
    },
    {
      thumbnail: "thank-you.jpeg",
      title: "Why You Should Start Supporting Local Businesses | Carrot",
      profile: "avatar-5",
      name: "Snugdha",
      bgColor: "dee2ff",
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

  useEffect(() => {
    if (currWidth < 767) {
      return setSlideNumber(1);
    }

    if (currWidth < 999) {
      return setSlideNumber(2.5);
    }

    if (currWidth <= 1029) {
      return setSlideNumber(3.5);
    }

    if (currWidth > 1280) {
      return setSlideNumber(5);
    }

    return setSlideNumber(4.5);
  }, [currWidth]);

  return (
    <div className="pt-[103px] px-0 md:px-2">
      <div className="max-w-[715px] my-0 mx-auto">
        <h1 className="header-text">
          World’s Only Repository of Proof of Work
        </h1>
        <p className="subhead-text">
          Take inspiration from the largest and the only repository of Proof of
          Work. Learn, take inspiration and create your own.
        </p>
      </div>

      <div className="mb-[27px]">
        <DragSlider slidesPerView={slideNumber} delay={2500}>
          {repository.map((item, ind) => (
            <div
              className={`p-[24px] flex flex-col gap-6 rounded-[14px] overflow-hidden bg-[#${item.bgColor}] border-[1px] border-black min-w-[254px] md:min-h-[300px]`}
              key={ind}
            >
              <img
                className="rounded-[14px] md:h-[129px]"
                src={`/assets/repository/thumbnails/${item.thumbnail}`}
                alt=""
              />
              <p className="font-semibold text-primary">
                {item.title.length > 25
                  ? `${item.title.slice(0, 25)}...`
                  : item.title}
              </p>
              <div className="flex justify-between">
                <span className="flex gap-2 items-center font-semibold">
                  <img
                    className="w-[40px]"
                    src={`/assets/repository/profiles/${item.profile}.png`}
                    alt=""
                  />
                  <span className="text-sm font-lighter">{item.name}</span>
                </span>
                <span className="inline-flex gap-3 items-center text-sm font-semibold">
                  <img className="w-[25px]" src="/assets/fire.png" alt="fire" />{" "}
                  0s
                </span>
              </div>
            </div>
          ))}
        </DragSlider>
      </div>

      <DragSlider
        slidesPerView={currWidth < 767 ? slideNumber : slideNumber - 0.3}
        delay={3300}
      >
        {repository.reverse().map((item, ind) => (
          <div
            className={`p-[24px] flex flex-col gap-6 rounded-[14px] overflow-hidden bg-[#${item.bgColor}] border-[1px] border-black min-w-[254px] md:min-h-[300px]`}
            key={ind}
          >
            <img
              className="rounded-[14px] md:h-[129px]"
              src={`/assets/repository/thumbnails/${item.thumbnail}`}
              alt=""
            />
            <p className="font-semibold text-primary">
              {item.title.length > 25
                ? `${item.title.slice(0, 25)}...`
                : item.title}
            </p>
            <div className="flex justify-between">
              <span className="flex gap-2 items-center font-semibold">
                <img
                  className="w-[40px]"
                  src={`/assets/repository/profiles/${item.profile}.png`}
                  alt=""
                />
                <span className="text-sm font-lighter">{item.name}</span>
              </span>
              <span className="inline-flex gap-3 items-center text-sm font-semibold">
                <img className="w-[25px]" src="/assets/fire.png" alt="fire" />{" "}
                0s
              </span>
            </div>
          </div>
        ))}
      </DragSlider>
    </div>
  );
};

export default RepositoryOfWork;
