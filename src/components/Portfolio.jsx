import React, { lazy, Suspense } from "react";

// Lazy load the Projects component
const Projects = lazy(() => import("./Projects"));

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-LightBody dark:bg-DarkBody">
      <div className="container mx-auto px-4 py-16 text-LightText dark:text-DarkText">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Mi lista de proyectos</h2>
          <p className="text-lg mb-8">
            Algunos proyectos realizados con Python, Pandas, Scikit learn y
            Matplotlib.
          </p>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
      </div>
    </section>
  );
};

// Custom LoadingSpinner component
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    </div>
  );
};

export default Portfolio;
