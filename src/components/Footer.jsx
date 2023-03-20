import React from "react";

// import social data
import { social } from "../data";

// import logo
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-LightFooter dark:bg-DarkFooter py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-8 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className=" LightSocial dark:DarkSocial"
                  href={href}
                  key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-LightText dark:text-DarkText  font-semibold  text-[16px]">
            &copy; 2023 GussDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
