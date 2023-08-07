// @ts-nocheck
import React, { useRef } from "react";

const Header = () => {
  const navList = useRef(null);

  const toggleMenu = () => {
    if (navList.current) {
      if (navList.current.classList.contains("hidden")) {
        navList.current.classList.remove("drop-out");
        navList.current.classList.remove("hidden");
        navList.current.classList.add("drop-in");
      } else {
        navList.current.classList.remove("drop-in");
        navList.current.classList.add("drop-out");
        navList.current.classList.add("hidden");
      }
    }
  };
  return (
    <nav className="py-4 font-semibold text-gray-700 container flex justify-between items-center relative pb-10">
      <a href="/">
        <img className="logo" src="/assets/fueler_logo.svg" alt="fueler" />
      </a>

      <div
        className="z-10 bg-white hidden md:flex md:items-center md:justify-between md:p-0 pr-24 rounded-2xl px-5 py-3 md:gap-20 md:static absolute top-20 right-0"
        ref={navList}
      >
        <ul className="nav-list md:flex gap-10">
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Project Ideas</a>
          </li>
          <li>
            <a href="/#">Discover</a>
          </li>
          <li>
            <div>
              <a href="/#">Resources</a>
              <i className="fa-solid fa-caret-down ml-2"></i>
            </div>
          </li>
          <li>
            <a href="/#">Premium</a>
          </li>
        </ul>

        <div className="md:flex grid md:gap-5 justify-items-start">
          <button className="hover:text-secondary-pink transition ease-in-out duration-200 md:p-0 pb-2">
            Login
          </button>
          <button className="btn">Register</button>
        </div>
      </div>

      <div className="flex justify-end cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 "
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
