import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 min-h-screen">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi I'm Annabel!
          </h1>
          <h1 className="title-font font-semibold tracking-widest text-xs">
            CONTACT
          </h1>
          <div className="flex space-x-4 divide-x-2 divide-gray-500">
            <p>annabelflatland@gmail.com</p>
            <p className="pl-2">+1 518 512 7155</p>
          </div>
          <p className="mb-8 leading-relaxed mt-6">
            I recently graduated from Williams College with a double major in Computer Science and Geosciences. Here are some of the projects I've worked on.
          </p>
          <div className="flex justify-center mb-6">
            <a
              href="./documents/resume.pdf"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-md md:w-1/2 w-1/2">
          <img
            className="rounded"
            alt="profile"
            src="./images/norway_profile.jpg"
          />
        </div>
      </div>
    </section>
  );
}
