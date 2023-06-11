import React from "react";
import { education } from "../data";

export default function Education() {
    return (
        <section id="education">

            <div className="container md:px-5 px-2 py-10 mx-auto text-center">
                <div className="text-center mb-10">
                    <i class="fas fa-2x fa-graduation-cap inline-block w-10 text-indigo-500" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Education
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Place where foundation stone of my knowledge got incubated...!!
                    </p>
                </div>

                <div className="flex flex-col md:m-4 m-2">
                    {education && education.map((edu) => (
                        <div id="edubox" className="p-4 md:w-3/4 w-full md:h-48 h-40 mx-auto">
                            <div className="transition ease-in-out delay-50 shadow inline-flex w-full h-full bg-white p-2 rounded hover:bg-gray-100 duration-500">
                                <img
                                    className="md:w-48 w-32 h-full object-left object-cover"
                                    src={edu.image}
                                    alt="education"
                                />
                                <span className="flex-grow flex flex-col md:pl-4 pl-2">
                                    <span className="title-font text-left text-blue-700 font-medium md:text-2xl text-sm md:mt-2 md:ml-3">
                                        {edu.title}
                                    </span>
                                    <span className="text-left text-gray-800 md:text-md text-sm uppercase md:m-3 m-1">
                                        {edu.desc}
                                    </span>
                                    <span className="md:text-lg text-sm text-pink-500 text-left font-small md:m-3 m-1">
                                        {edu.status}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}