import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-[64px] pb-[26px]">
      <div className="container flex flex-col md:flex-row footer gap-[57px]">
        <div className="md:w-[253px]">
          <img
            className="mb-[16px] md:w-[160px] w-[200px]"
            src="/assets/logo_registered.svg"
            alt="feuler logo"
          />
          <p className="text-[#2c2c2c] md:text-base text-md">
            Fueler is an online platform to help you showcase your work on the
            internet. It's like Github but for Generalist individuals.
          </p>
        </div>

        <div className="grid grid-cols-4">
          <ul>
            <h2>Company</h2>
            <div className="footer-column">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Feuler Wiki</li>
              <li>Proof of work ideas</li>
              <li>Feuler Ambassador Program</li>
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
    </footer>
  );
};

export default Footer;
