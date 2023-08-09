import React from "react";
import DragSlider from "./DragSlider";

export interface RepoI {
  thumbnail: string;
  title: string;
  profile: string;
}

const RepositoryOfWork = () => {
  const repository: RepoI[] = [
    {
      thumbnail: "carnal-masters.jpg",
      title: "Carnal Masters: A Sexual Health Platform Case Study",
      profile: "avatar-1",
    },
    {
      thumbnail: "carnal-masters.jpg",
      title: "Content Writing and Strategy Portfolio",
      profile: "avatar-1",
    },
    {
      thumbnail: "duo-lingojpg",
      title:
        "Mini-Product Analysis of Duolingo - the Gamified Language Learning Application.",
      profile: "avatar-1",
    },
    {
      thumbnail: "kee-vurds.png",
      title: "Building KeeVurds - A Startup Media Platform",
      profile: "avatar-5",
    },
    {
      thumbnail: "medium.jpg",
      title: "Top 10 Product Management Frameworks Every PM Should Know",
      profile: "avatar-2",
    },
    {
      thumbnail: "present-slide.jpg",
      title: "Present Slide - A Resource Hub For Students",
      profile: "avatar-4",
    },
    {
      thumbnail: "default.png",
      title:
        "Fun Things to do in Berkeley, CA That You’ll Keep Coming Back to | Roomi",
      profile: "avatar-5",
    },
    {
      thumbnail: "product-case.jpg",
      title:
        "Product Case Study - Leap Dash (Deepstash for Career-based content)",
      profile: "avatar-3",
    },
    {
      thumbnail: "default.png.jpg",
      title:
        "𝗣𝗥𝗔𝗝𝗪𝗔𝗟 on Instagram: 𝐋𝐢𝐟𝐞 𝐢𝐬 𝐭𝐨𝐨 𝐬𝐡𝐨𝐫𝐭 𝐭𝐨 𝐚𝐫𝐠𝐮𝐞, 𝐬𝐨 𝐣𝐮𝐬𝐭 𝐞𝐧𝐣𝐨𝐲 𝐞𝐯𝐞𝐫𝐲 𝐦𝐨𝐦𝐞𝐧𝐭… 🐎Edit- @i.hch12 ❤️",
      profile: "avatar-4",
    },
    {
      thumbnail: "soda.jpg",
      title: "Storyboard Template for a Soda Commercial",
      profile: "avatar-2",
    },
    {
      thumbnail: "street-food.jpg",
      title: "The Best Street Food in New York You Can Eat Anytime!",
      profile: "avatar-5",
    },
    {
      thumbnail: "thank-you.jpg",
      title: "Why You Should Start Supporting Local Businesses | Carrot",
      profile: "avatar-5",
    },
  ];
  return (
    <div className="pt-[103px]">
      <div className="max-w-[715px] my-0 mx-auto">
        <h1 className="header-text">
          World’s Only Repository of Proof of Work
        </h1>
        <p className="subhead-text">
          Take inspiration from the largest and the only repository of Proof of
          Work. Learn, take inspiration and create your own.
        </p>
      </div>

      
    </div>
  );
};

export default RepositoryOfWork;
