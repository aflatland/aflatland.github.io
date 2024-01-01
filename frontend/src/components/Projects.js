import { ScissorsIcon } from '@heroicons/react/24/solid'
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-800 body-font">
      <div className="container mx-auto px-5 py-10 text-center lg:px-40">
        <div className="w-full mb-20">
          <ScissorsIcon className="w-10 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-medium title-font text-white mb-4">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto text-base leading-relaxed">
            I use machine learning to study sea ice drift and my current side quest is making a language learning GPT. Past projects are here too! Check them out below.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="p-4 sm:w-1/2">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="relative z-10 w-full px-8 py-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="text-sm font-medium title-font tracking-widest text-yellow-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg font-medium title-font text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
