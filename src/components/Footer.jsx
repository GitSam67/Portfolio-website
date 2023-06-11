import React from "react";

export default function Footer() {
    return (

        <section id="footer" className="bg-black">
            <div className="container md:px-5 pt-5 py-2 mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 items-center text-center mx-auto">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-5"><span className="font-sans">Sam's Portfolio</span></h2>
                        <h6 className="text-center text-white mb-10 px-7"><p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Exploring 🚀. . .</p></h6>
                    </div>

                <div className="md:w-1/3 items-center text-center mx-auto">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font md:mr-20 text-white mb-4"><i class="fas fa-chevron-right mr-2"></i>Quick links</h2>
                    <div id="quick" className="flex flex-col text-left md:ml-20 mb-10">
                        <a className="transition delay-40 title-font font-medium text-white py-2 w-fit hover:text-purple-600 duration-300" href="#home"><i class="fas fa-chevron-circle-right"></i> home</a>
                        <a className="transition delay-40 title-font font-medium text-white py-2 w-fit hover:text-purple-600 duration-300" href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
                        <a className="transition delay-40 title-font font-medium text-white py-2 w-fit hover:text-purple-600 duration-300" href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
                        <a className="transition delay-40 title-font font-medium text-white py-2 w-fit hover:text-purple-600 duration-300" href="#projects"><i class="fas fa-chevron-circle-right"></i> projects</a>
                    </div>
                </div>

                <div class="md:w-1/3 items-center text-white mx-auto">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Contact info</h2>
                    <p className="py-1"> <i class="fas fa-phone text-white mr-2"></i><a href="tel:+91 937-582-9419">+91 937-582-9419</a></p>
                    <p className="py-1"> <i class="fas fa-envelope text-white mr-2 "></i><a href="mailto:samanuaynr67@gmail.com">samanuaynr67@gmail.com</a></p>
                    <p className="py-1"> <i class="fas fa-map-marked-alt text-white mr-2"></i>  Vadodara, India-390021</p>
                    <div id="social" class="flex flex-wrap">
                        <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-600 duration-400" href="https://www.linkedin.com/in/samanuay-nambiar-31852b233/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> </a>
                        <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-600 duration-400" href="https://github.com/GitSam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> </a>
                        <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-600 duration-400" href="mailto:samanuaynr67@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i> </a>
                        <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-600 duration-400" href="https://twitter.com/SamanuayN" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i> </a>
                        <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-purple-600 duration-400" href="https://dev.to/devsam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-dev"></i> </a>
                    </div>
                </div>
                </div>
                <h1 class="w-10/12 mx-auto py-2 text-center title-font font-medium border-t-2 border-gray-600">Designed with <i class="fas fa-heart pulse text-red-700"></i> by <a href="https://www.linkedin.com"> Samanuay</a></h1>
            </div>

        </section>
    )
}