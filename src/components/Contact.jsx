import React from "react";

// import contact data
import { contact } from "../data";

const Contact = () => {
  return (
    <section
      className="section bg-LightBody dark:bg-DarkBody xl:h-[120vh] flex items-center xl:bg-cover xl:bg-center xl:bg-no-repeat py-32 xl:py-0 overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto text-LightText dark:text-DarkText">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute text-LightText dark:text-DarkText before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">You can contact me by different means:</p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 ">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-DarkButton dark:text-LightButton rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1 text-LightText dark:text-DarkText">
                      {title}
                    </h4>
                    <p className="mb-1 text-LightText dark:text-DarkText">
                      {subtitle}
                    </p>
                    <p className="text-LightText dark:text-DarkText font-normal ">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input
                className="input text-white bg-LightText dark:bg-DarkButton"
                type="text"
                placeholder="Name"
              />
              <input
                className="input text-white bg-LightText dark:bg-DarkButton"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              className="input text-white bg-LightText dark:bg-DarkButton"
              type="text"
              placeholder="Affair"
            />
            <textarea
              className="textarea text-white bg-LightText dark:bg-DarkButton"
              placeholder="Message"
            ></textarea>
            <a
              href="mailto:rpumachaguahuertas@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn w-44 mx-auto lg:mx-0 bg-accent hover:bg-secondary-hover"
            >
              Send Message
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
