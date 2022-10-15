import React from "react";
import CV from "../assets/pdf/Ansel-Cv.pdf";
import Lettie from "./Lettie";
import Lottiejs from "./Lottie";

const Hero = () => {
  return (
    <section
      id="home"
      className="xl:h-[110vh] flex items-center bg-LightBody dark:bg-DarkBody xl:bg-cover xl:bg-center xl:bg-no-repeat py-32 xl:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full flex-col md:flex-row xl:pb-12">
          <div className="flex-1 flex flex-col items-center xl:items-start xl:pb-6">
            <p className="text-lg text-LightText dark:text-DarkText text-md mb-[16px] xl:ml-10 xl:py-2 xl:mt-24 text-center">
              Hi, I'm Gustavo! ✌
            </p>
            <h1 className="hidden md:flex text-4xl text-LightText dark:text-DarkText leading-[44px] md:text-5xl md:leading-tight xl:text-7xl xl:leading-[1.2] font-bold md:tracking-[-2px] px-6 xl:px-18">
              Web developer Frond-End.
            </h1>
            <p className="hidden md:flex pt-4 pb-8 md:py-2 xl:py-2 xl:ml-10 xl:pl-20 max-w-[480px] text-base text-center  text-LightText dark:text-DarkText px-6 ">
              I consider myself a fan of technology.
            </p>
            <a
              href={CV}
              download
              className="btn btn-md bg-accent dark:bg-stone-700 md:btn-lg md:mt-5 xl:mt-4 xl:ml-64 "
            >
              Download CV
            </a>
          </div>
          <div className="hidden xl:flex flex-1 justify-center items-end h-full pb-1 xl:mb-16">
            <Lettie className="" />
          </div>
          <div className="xl:hidden flex  flex-1 justify-center items-end h-full pb-1  w-full mt-10">
            <Lottiejs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
