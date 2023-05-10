import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import excel from "../assets/skills/excel.png";
import power_bi from "../assets/skills/PowerBI.jpg";
import matplotlib from "../assets/skills/matplotlib.png";
import numpy from "../assets/skills/numpy.png";
import postgresql from "../assets/skills/postgresql.png";
import pandas from "../assets/skills/pandas.png";
import python from "../assets/skills/python.png";
import scikit_learn from "../assets/skills/scikit_learn.png";
import tensorflow from "../assets/skills/tensorflow.png";
import sql from "../assets/skills/sql.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: excel,
      title: "Excel",
      style: "bg-orange-500",
    },
    {
      id: 2,
      src: power_bi,
      title: "Power BI",
      style: "bg-blue-500",
    },
    {
      id: 3,
      src: matplotlib,
      title: "Matplotlib",
      style: "bg-yellow-500",
    },
    {
      id: 4,
      src: numpy,
      title: "Numpy",
      style: "bg-blue-600",
    },
    {
      id: 5,
      src: scikit_learn,
      title: "Scikit learn",
      style: "bg-sky-400",
    },
    {
      id: 6,
      src: postgresql,
      title: "Postgresql",
      style: "bg-gray-400",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "bg-pink-400",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "bg-gray-400",
    },
    {
      id: 9,
      src: pandas,
      title: "Pandas",
      style: "bg-gray-400",
    },
    {
      id: 10,
      src: tensorflow,
      title: "Tensorflow",
      style: "bg-gray-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-10 xl:py-0 bg-LightBody dark:bg-DarkBody">
      <div className="max-w-screen-lg mx-auto px-4 text-LightText dark:text-DarkText">
        <h2 className="text-4xl font-bold text-center mb-6 text-LightText dark:text-DarkText">
          Tecnologías y Herramientas
        </h2>
        <p className="text-center mb-12">
          Conocimientos en matemáticas y estadística. Habilidades en lenguajes
          de programación como Python y SQL. Capacidad para recopilar, limpiar,
          transformar y visualizar datos. Habilidades en la construcción y
          aplicación de modelos de aprendizaje automático.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`text-center rounded-lg p-4 hover:scale-105 duration-500 ${style}`}>
              <LazyLoadImage
                width={80}
                height={80}
                effect="blur"
                src={src}
                alt={title}
                className="mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
