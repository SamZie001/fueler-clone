import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-[64px] pb-[26px]">
      <div className="container grid md:grid-cols-3 footer md:gap-5 gap-15 pb-14">
        <div className=" col-span-1">
          <img
            className="mb-[16px] md:w-[160px] w-[200px]"
            src="/assets/logo_registered.svg"
            alt="fueler logo"
          />
          <p className="text-[#2c2c2c] md:text-base text-md">
            Fueler is an online platform to help you showcase your work on the
            internet. It's like Github but for Generalist individuals.
          </p>
        </div>

        <div className="col-span-2 grid md:grid-cols-3 grid-cols-2 gap-5">
          <ul>
            <h2>Company</h2>
            <div className="footer-column">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Fueler Wiki</li>
              <li>Proof of work ideas</li>
              <li>Fueler Ambassador Program</li>
              <li>
                Write for us <span>New</span>
              </li>
            </div>
          </ul>

          <ul>
            <h2>Side Hustle</h2>
            <div className="footer-column">
              <li>DopeUI</li>
              <li>Creatons</li>
              <li>Podstack</li>
              <li>Kajookatli</li>
              <li>
                Valueread <span>New</span>
              </li>
              <li>SwiperSpace</li>
            </div>
          </ul>

          <ul>
            <h2>Use Case</h2>
            <div className="footer-column">
              <li>Designer</li>
              <li>Developer</li>
              <li>Marketer</li>
              <li>Writer</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-8">
          <img width={20} src="twitter.svg" alt="" />
          <img width={20} src="yt.svg" alt="" />
          <img width={13} src="ig.svg" alt="" />
          <img width={15} src="share.svg" alt="" />
        </div>
        <p className="text-primary text-xs font-semibold">
          Copyright © Kiwismedia Technologies Private Limited
        </p>
        <p className="text-primary text-xs font-semibold">
          Heartcrafted with ❤️ remotely in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
