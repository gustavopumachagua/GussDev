import React from "react";

// import icons
import { social } from "../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6 ">
      {social.map((item, index) => {
        return (
          <li className="flex justify-center items-center" key={index}>
            <a
              target="_blank"
              rel="noreferrer"
              className="LightSocial dark:DarkSocial"
              href={item.href}
              alt={item.alt}
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
