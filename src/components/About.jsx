import React from "react";

// import img
import ImageDesktop from "../assets/perfil/perfil-desktop.svg";
import ImageMobile from "../assets/perfil/mobile.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <section className="bg-LightBody dark:bg-DarkBody p-2 xl:py-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row ">
          <div className="hidden xl:flex">
            <LazyLoadImage
              width="100%"
              height="100%"
              effect="blur"
              className="  object-cover h-[350px] w-[400px] md:mx-auto lg:mx-20 "
              src={ImageDesktop}
              alt="perfil"
            />
          </div>
          <div className="xl:hidden flex">
            <LazyLoadImage
              width="100%"
              height="100%"
              effect="blur"
              className=" object-cover h-[300px] w-[400px] md:mx-auto   "
              src={ImageMobile}
              alt="perfil"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl text-LightText dark:text-DarkText lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block text-center">
                GussDev
              </h2>
              <p className="mb-4 text-LightText dark:text-DarkText text-center">
                Data Scientist
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-LightText dark:text-DarkText text-center xl:px-20">
                I live in Lima - Peru and I am passionate about programming. I
                am a beginner in the programming universe, a bug hunter and the
                more I learn and the more I get angry, the more I love it. ✌
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
