import React from "react";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import postgresql from "../assets/skills/postgresql.png";
import pandas from "../assets/skills/pandas.png";
import python from "../assets/skills/python.png";
import tailwind from "../assets/skills/tailwind.png";
import tensorflow from "../assets/skills/tensorflow.png";
import sql from "../assets/skills/sql.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: postgresql,
      title: "Postgresql",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: pandas,
      title: "Pandas",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: tensorflow,
      title: "Tensorflow",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      id="skills"
      className="xl:h-[100vh] flex items-center bg-LightBody dark:bg-DarkBody xl:bg-cover xl:bg-center xl:bg-no-repeat py-32 xl:py-0 overflow-hidden">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-LightText dark:text-DarkText">
        <div>
          <p className="text-4xl font-bold  p-2  text-center">Skills</p>
          <p className="py-6">
            I am a Front-end developer and Data Scientist with more than 2 years
            of experience in web development, experience in Paython, Pandas,
            Javascript, Reactjs. I am fascinated by web development, working
            with libraries like Reactjs and the use of Framework like
            TailwindCSS.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-16 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <LazyLoadImage
                width="100%"
                height="100%"
                effect="blur"
                src={src}
                alt="skills"
                className="w-20  mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
