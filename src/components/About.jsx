import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiFloatingCrystal } from "react-icons/gi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ImageDesktop from "../assets/perfil/perfil-desktop.svg";
import ImageMobile from "../assets/perfil/mobile.svg";

const About = () => {
  return (
    <section className="bg-LightBody dark:bg-DarkBody p-2 xl:py-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex">
            <LazyLoadImage
              src={ImageDesktop}
              alt="perfil"
              width="400"
              height="350"
              effect="blur"
              className="object-cover h-[350px] w-[400px] md:mx-auto lg:mx-20"
            />
          </div>
          <div className="xl:hidden flex">
            <LazyLoadImage
              src={ImageMobile}
              alt="perfil"
              width="400"
              height="300"
              effect="blur"
              className="object-cover h-[300px] w-[400px] md:mx-auto"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-4xl lg:text-5xl text-LightText dark:text-DarkText font-bold mb-3 text-center">
                Acerca de mí
              </h2>
              <p className="mb-4 text-lg text-LightText dark:text-DarkText text-center">
                <FaMapMarkerAlt className="inline-block mr-1" />
                Lima, Perú
              </p>
              <hr className="mb-8 opacity-5 " />
              <p className="mb-8 text-lg text-LightText dark:text-DarkText xl:px-12 text-center">
                Soy un Data Scientist con experiencia en la manipulación de
                datos y la creación de modelos predictivos para resolver
                problemas empresariales complejos{" "}
                <GiFloatingCrystal className="inline-block ml-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
