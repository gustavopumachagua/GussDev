import React from "react";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section  flex items-center bg-LightBody dark:bg-DarkBody text-LightText dark:text-DarkText xl:bg-cover xl:bg-center xl:bg-no-repea overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center  ">
          <h2 className="section-title before:content-portfolio relative before:absolute text-LightText dark:text-DarkText before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Project List
          </h2>
          <p className="subtitle">
            Some projects made with Reactjs, tailwindcss, HTML, CSS, javascript.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
