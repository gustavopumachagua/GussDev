import React, { useEffect, useState } from "react";

// import components
import Logo from "../assets/logo.svg";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import DarkMode from "../components/DarkMode";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-LightNavBar/95 dark:bg-DarkNavBar/95 h-20" : "h-24"
      } flex items-center fixed top-0 w-full  z-10 transition-all duration-300 bg-LightNavBar dark:bg-DarkNavBar `}
    >
      <div className="container mx-auto h-full flex items-center justify-between ">
        {/* logo */}
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        {/* nav */}
        <div className="hidden xl:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden xl:block">
          <Socials />
        </div>
        {/*DarkMode*/}
        <div className="hidden xl:block">
          <DarkMode />
        </div>
        {/* nav mobile*/}
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
