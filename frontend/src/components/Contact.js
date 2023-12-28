
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
        <div className ="container px-10 py-10 mb-20">

            <div className = "flex justify-center py-5">
            <a
              href="./resume.png"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Resume
            </a>
            </div>
            
            <p className = "text-center">Feel free to reach out about anything.</p>


            <div className = "py-5 text-gray-600 flex flex-row justify-center ">  

                <div className = "text-center">
                <h2 className="title-font font-semibold tracking-widest text-xs">
                    EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                aef3@williams.edu
                </a>
                </div>

                <div className = "px-5 text-center">
                <h2 className="title-font font-semibold tracking-widest text-xs">
                    PHONE
                </h2>
                <p className="leading-relaxed">
                +1 518 512 7155
                </p>
                </div>

            </div>


        </div>
    </section>
  );
}