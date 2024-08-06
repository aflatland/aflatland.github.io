import { PencilIcon } from '@heroicons/react/24/solid'
import React from "react";
import { posts } from "../data";

export default function Blog() {

    return (
        <section id="blog" className="text-gray-300 bg-gray-900 body-font">
          <div className="container mx-auto px-5 py-10 text-center lg:px-40">
            <div className="w-full mb-20">
              <PencilIcon className="w-10 mx-auto mb-4" />
              <h1 className="text-3xl sm:text-4xl font-medium title-font text-gray-100 mb-4">
                Blog
              </h1>

            </div>
          
          </div>
        </section>
      );
}
