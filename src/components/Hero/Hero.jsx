import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import heroImg from '../../assets/bangkit.jpg';

const Hero = () => {
  return (
    <div className="flex items-center pt-20 md:pt-0 pb-10 md:pb-0 min-h-screen bg-light1">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full flex flex-col items-center justify-center text-center [text-shadow:_2px_2px_2px_rgb(0_0_0_/_0.5)] ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark2 leading-tight">
              Hi, I'm <span className="text-blue1">Fauzan</span>
            </h1>
            <h1 className="text-3xl font-bold text-blue1 mt-4">
              I'm&nbsp; a&nbsp;
              <ReactTyped style={{ color: '#212A31' }} backSpeed={50} strings={['Web Developer', 'Robotics and IoT Developer', 'AI/ML Developer', 'Developer.']} typeSpeed={80} typedRef={function noRefCheck() {}} />
            </h1>
            <div className="flex items-center justify-center mt-6 gap-2 py-2">
              <a href="">
                <FaGithub className="text-4xl hover:scale-150 transition-transform duration-300" />
              </a>
              <a href="">
                <FaLinkedin className="text-4xl hover:scale-150 transition-transform duration-300" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-[500px] md:w-96 aspect-9/16 overflow-hidden bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={heroImg} alt="Hero Illustration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

<div className="border-2 border-black rounded-md p-2 font-semibold bg-light1 hover:bg-light1/60 transform duration-500 hover:scale-110">
  <a href="#">Check Out My Resume</a>
</div>;
