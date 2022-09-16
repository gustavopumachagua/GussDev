import React, { useState } from "react";
import Socials from "./Socials";
import DarkMode from "./DarkMode";

// import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

// import navigation data
import { navigation } from "../data";

// import framer
import { motion } from "framer-motion";

// import Link
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-LightText"
      >
        <MenuAlt3Icon className="w-8 h-8 text-DarkButton dark:text-LightButton" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-slate-500 dark:bg-DarkButton fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8 text-DarkButton dark:text-LightButton" />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li
              key={idx}
              className="mb-8 dark:text-white text-black cursor-pointer"
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl transition-all duration-300 capitalize"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <Socials />
        <div className="my-8">
          <DarkMode />
        </div>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
