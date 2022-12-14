import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-4">
        <LazyLoadImage
          width="100%"
          height="100%"
          effect="blur"
          className="rounded-2xl h-36 w-36"
          src={item.image}
          alt="portfolio"
        />
      </div>
      <p className="capitalize text-LightText dark:text-DarkText text-sm mb-3">
        {item.category}
      </p>
      <h3 className="text-lg font-semibold capitalize mb-3 text-LightText dark:text-DarkText">
        {item.name}
      </h3>
      <div>{item.modal}</div>
    </div>
  );
};

export default Project;
