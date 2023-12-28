
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative h-screen bg-gray-400">
        <div className ="container px-10 py-10 mb-20">

            <div className = "flex justify-center py-5">
            <a
              href="./resume.png"
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Resume
            </a>
            </div>
            
            <p className = "text-center">Feel free to reach out about anything.</p>


            <div className = "py-5 text-gray-700 flex flex-row justify-center ">  

                <div className = "text-center">
                <h2 className="title-font font-semibold tracking-widest text-xs">
                    EMAIL
                </h2>
                <div className="leading-relaxed">
                aef3@williams.edu
                </div>
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