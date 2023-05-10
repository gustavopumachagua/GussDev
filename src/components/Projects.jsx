import React, { useState, useEffect } from "react";
import { projectsData } from "../data";
import { projectsNav } from "../data";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(5);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 5);
  };

  const filteredProjects =
    item.name === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === item.name
        );

  return (
    <div>
      <nav className="mb-10 max-w-xl mx-auto">
        <ul className="flex flex-wrap justify-center space-x-4">
          {projectsNav.map((item, index) => (
            <li
              key={index}
              className={`capitalize cursor-pointer text-LightText dark:text-DarkText ${
                active === index ? "font-semibold" : ""
              }`}
              onClick={(e) => handleClick(e, index)}>
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {filteredProjects.slice(0, visibleProjects).map((item) => (
          <Project item={item} key={item.id} />
        ))}
      </section>
      {filteredProjects.length > visibleProjects && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-zinc-400 dark:bg-stone-700  btn py-2 px-4 rounded"
            onClick={handleLoadMore}>
            Cargar más{" "}
            <FaArrowAltCircleRight className="ml-2 text-LightText dark:text-DarkText" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
