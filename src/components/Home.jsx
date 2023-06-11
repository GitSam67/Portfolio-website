import React from "react";
import {TypeAnimation} from "react-type-animation";

export default function Home() {
  return (
    <section id="home">
      <div className="container mx-auto mt-5 mb-20 flex md:px-10 px-2 md:pt-14 pt-16 pb-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-full mb-16 md:mb-0 flex flex-col mx-auto items-center text-center">
          <h1 className="title-font text-2xl md:text-4xl md:mb-4 mb-10 tracking-wider font-bold text-white">
            Welcome to, <br/>
            <span className="text-indigo-400 tracking-wider">Samanuay</span> <span className="text-indigo-400 tracking-wider">Nambiar's</span> <br/>
            landing page...!! &#128075;
            <br className="hidden lg:inline-block" /><br className="hidden lg:inline-block" />
          </h1>
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 title-font md:text-4xl text-2xl mb-4 font-extrabold">
            <TypeAnimation
              sequence={[
                'Passionate Backend developer', 
                1000,
                'MERN Stack developer',
                1000,
                'Tech Enthusiast',
                1000,
                'Problem Solver',
                1000,
                'A True Explorer',
                1000,
              ]}
              speed={70}
              wrapper="b"
              repeat={Infinity}
              />
            </h3>
          <p className="mb-8 leading-relaxed">
          </p>
          <div id="homsoc" className="flex justify-center">
            <div className="transition delay-20 md:h-10 md:w-10 h-8 w-8 rounded-full bg-black text-indigo-200 mx-2 flex flex-row items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer duration-300">
              <a className="md:text-lg text-md" href="https://www.linkedin.com/in/samanuay-nambiar-31852b233/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> </a>
            </div>
            <div className="transition delay-20 md:h-10 md:w-10 h-8 w-8 rounded-full bg-black text-indigo-200 mx-2 flex flex-row items-center justify-center hover:bg-black hover:text-white cursor-pointer duration-300">
              <a className="md:text-lg text-md" href="https://github.com/GitSam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> </a>
            </div>
            <div className="transition delay-20 md:h-10 md:w-10 h-8 w-8 rounded-full bg-black text-indigo-200 mx-2 flex flex-row items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer duration-300">
              <a className="md:text-lg text-md" href="https://twitter.com/SamanuayN" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i> </a>
            </div>
            <div className="transition delay-20 md:h-10 md:w-10 h-8 w-8 rounded-full bg-black text-indigo-200 mx-2 flex flex-row items-center justify-center hover:bg-pink-500 hover:text-white cursor-pointer duration-300">
              <a className="md:text-lg text-md" href="https://www.instagram.com/samanuaynambiar/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> </a>
            </div>
            <div className="transition delay-20 md:h-10 md:w-10 h-8 w-8 rounded-full bg-black text-indigo-200 mx-2 flex flex-row items-center justify-center hover:bg-black hover:text-white cursor-pointer duration-300">
              <a className="md:text-lg text-md" href="https://dev.to/devsam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-dev"></i> </a>
            </div>
            </div>
            <p className="mb-20 leading-relaxed">
          </p>
        </div>
      </div>
    </section>
  );
}