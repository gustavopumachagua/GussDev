import React from "react";
import Lettie from "./Lettie";
import Lottiejs from "./Lottie";

const Hero = () => {
  return (
    <section
      id="home"
      className="xl:h-[110vh] flex items-center bg-LightBody dark:bg-DarkBody xl:bg-cover xl:bg-center xl:bg-no-repeat py-32 xl:py-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full flex-col md:flex-row xl:pb-12">
          <div className="flex-1 flex flex-col items-center xl:items-start xl:pb-6">
            <h1 className="hidden md:flex text-3xl text-LightText dark:text-DarkText leading-[44px] md:text-4xl md:leading-tight xl:text-5xl xl:leading-[1.2] font-bold md:tracking-[-2px] px-6 xl:px-18">
              Hola, Soy Gustavo!
            </h1>
          </div>
          <div className="hidden xl:flex flex-1 justify-center items-end h-full pb-1 xl:mb-16">
            <Lettie className="" />
          </div>
          <div className="xl:hidden flex flex-1 justify-center items-end h-full pb-1 w-full mt-10">
            <Lottiejs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
