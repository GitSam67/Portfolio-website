import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-300 bg-gray-900 body-font">
      <div className="container md:px-20 px-2 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 text-indigo-500" />
          <h1 className="sm:text-4xl text-3xl blue-700 font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Gallery of cool product stuffs built by me...!
          </p>
        </div>
        <Carousel className="md:w-5/6 w-full md:px-20 px-5 pt-10 pb-2 mx-auto bg-gray-800 rounded-lg">
            {projects.map((project) => (
              <div
                key={project.image}>
                <div className="slider flex relative rounded-lg shadow-xl">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full rounded-lg object-fit object-center"
                    src={project.image}
                  />
                  <div className="md:px-32 px-10 py-10 md:pt-20 h-full relative z-10 w-full border-2 rounded-lg border-blue-400 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="title-font md:text-xl font-medium text-blue-400 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed md:text-lg">{project.description}</p>
                    <div className="flex w-full justify-center align-items-center mt-7 mb-0">
                      <a href={project.link} target="_blank">
                        <button className="px-3 py-2 font-bold text-md bg-white text-black rounded-lg mr-5 hover:bg-gray-800 hover:text-blue-400"><i className="fa fa-eye text-md"></i> View</button>
                      </a>
                      <a href={project.GithubLink} target="_blank">
                        <button className="px-3 py-2 font-bold text-md bg-white text-black rounded-lg hover:bg-gray-800 hover:text-blue-400"><i className="fas fa-code text-md"></i> Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* <div className="flex flex-wrap -m-5 rounded-lg">
            {projects.map((project) => (
              <div
                key={project.image}
                className="sm:w-1/2 w-1/2 p-4">
                <div className="flex relative h-80 rounded-lg">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full rounded-lg object-fit object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-blue-400 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                    <div className="flex w-full justify-center align-items-center mt-7 mb-0">
                      <a href={project.link} target="_blank">
                        <button className="px-3 py-2 font-bold text-md bg-white text-black rounded-lg mr-5 hover:bg-gray-800 hover:text-blue-400"><i className="fa fa-eye text-md"></i> View</button>
                      </a>
                      <a href={project.GithubLink} target="_blank">
                        <button className="px-3 py-2 font-bold text-md bg-white text-black rounded-lg hover:bg-gray-800 hover:text-blue-400"><i className="fas fa-code text-md"></i> Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </Carousel>
      </div>
    </section>
  );
}