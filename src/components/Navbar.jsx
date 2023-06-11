import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {

  let [open, setOpen] = useState(false);

  return (

    <header id="navbar" className="bg-black sticky z-50 shadow-xl rounded-md w-full top-0 left-0">
      <nav className="container md:flex items-center w-full justify-between py-2 md:px-10 px-7">
        <div className="flex cursor-pointer text-left">
          <img className="w-10 h-10 border-2 border-gray-900 shadow-xl rounded-full mr-2" src="./phoenix.png" alt="logo"></img>
          <a className="transition delay-40 title-font font-bold text-2xl w-20 cursor-pointer text-white flex flex-row items-center hover:text-indigo-400 duration-500" href="#starter">Sam
          <i className="transition delay-40 fab fa-md fa-node-js m-1 mb-0 text-white cursor-pointer hover:text-indigo-400 duration-500"></i></a>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-9 top-4 cursor-pointer md:hidden'>
          <i class={open ? 'fa fa-close text-white' : 'fa-solid fa-bars text-white'}></i>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-14 transition-all duration-500 ease-in ${open ? 'top-14' : 'hidden'}`}>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <NavHashLink to="#" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-400 duration-200">
              Home
            </NavHashLink>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <NavHashLink to="#about" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-400  duration-200">
              About
            </NavHashLink>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <NavHashLink to="#skills" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-400  duration-200">
              Skills
            </NavHashLink>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <NavHashLink to="#education" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-400  duration-200">
              Education
            </NavHashLink>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <NavHashLink to="#projects" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-400  duration-200">
              Projects
            </NavHashLink>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <NavHashLink to="#contact" className="transition delay-40 font-black font-mono text-xl text-white border-b-2 border-transparent hover:text-indigo-400 hover:border-indigo-400  duration-200">
              Contact
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}