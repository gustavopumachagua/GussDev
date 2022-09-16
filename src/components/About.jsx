import React from "react";

// import img
import Image from "../assets/perfil/peep-49 1.svg";

const About = () => {
  return (
    <section className="bg-LightBody dark:bg-DarkBody p-10" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row lg:gap-24">
          <img
            className=" object-cover h-[500px] w-[400px] md:mx-auto lg:mx-0 "
            src={Image}
            alt="perfil"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl text-LightText dark:text-DarkText lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                GussDev
              </h2>
              <p className="mb-4 text-LightText dark:text-DarkText">
                Freelance Frontend Web Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-LightText dark:text-DarkText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
