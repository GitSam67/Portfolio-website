import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

export default function Achievements() {
  return (
    <section id="achievements" className="text-gray-300 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 text-indigo-500" />
          <h1 className="sm:text-4xl text-3xl blue-700 font-medium title-font mb-4 text-white">
            My Certifications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Some hard earned credentials in my hand...!!   
          </p>
        </div>
          <div className="md:flex w-full justify-center align-items-center md:mb-0">
            <div className="rounded-lg md:w-1/3 w-5/6 md:h-64 h-48 md:mr-10 mx-auto md:mb-0 mb-5">
                <img className="w-full h-full rounded-lg shadow-xl border-2 border-blue-300 object-fit object-center" src="./Microsoft-Certification.jpeg" alt="certificate"></img>
            </div>
            <div className="rounded-lg md:w-1/3 w-5/6 md:h-64 h-48 md:mr-10 mx-auto md:mb-0 mb-5">
                <img className="w-full h-full rounded-lg shadow-xl border-2 border-blue-300 object-fit object-center" src="./Hackathon-Certificate.jpeg" alt="certificate"></img>
            </div>
            <div className="rounded-lg md:w-1/3 w-5/6 md:h-64 h-48 mx-auto md:mb-0 mb-5">
                <img className="w-full h-full rounded-lg shadow-xl border-2 border-blue-300 object-fit object-center" src="./Guvi-Certification.jpeg" alt="certificate"></img>
            </div>
          </div>
          <div className="md:flex w-full md:px-10 justify-center align-items-center md:mt-10 mb-30">
            <div className="rounded-lg md:w-1/3 w-5/6 md:h-64 h-48 md:mx-10 mx-auto md:mb-0 mb-5">
                <img className="w-full h-full rounded-lg shadow-xl border-2 border-blue-300 object-fit object-center" src="./Server_Auth.jpeg" alt="certificate"></img>
            </div>
            <div className="rounded-lg md:w-1/3 w-5/6 md:h-64 h-48 md:mx-0 mx-auto md:mb-0 mb-5">
                <img className="w-full h-full rounded-lg shadow-xl border-2 border-blue-300 object-fit object-center" src="./Coursera-Certificate.jpeg" alt="certificate"></img>
            </div>
          </div>
      </div>
    </section>
  );
}