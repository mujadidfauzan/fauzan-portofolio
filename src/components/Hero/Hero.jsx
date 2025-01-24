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
              <ReactTyped style={{ color: '#212A31' }} backSpeed={50} strings={['Web Developer', 'Robotics and IOT Developer', 'AI/ML Developer', 'Developer..']} typeSpeed={80} typedRef={function noRefCheck() {}} />
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
            <div className="w-80 md:w-96 aspect-9/16 overflow-hidden bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={heroImg} alt="Hero Illustration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <section className="bg-blue1 min-h-screen flex items-center">
  <div className="mx-auto px-6 md:px-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-light1 leading-tight">
          Hi, I'm <span className="text-">Fauzan</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          A passionate <span className="font-semibold">Fullstack Web Developer</span> who builds scalable, user-friendly websites and applications.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded-md shadow hover:bg-blue-600 transition duration-300">
            View My Work
          </a>
          <a href="#contact" className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-md shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300">
            Get in Touch
          </a>
        </div>
//       </div>

//       {/* Kanan: Gambar atau Ilustrasi */
}
//       <div className="flex justify-center">
//         <img src="https://via.placeholder.com/400" alt="Hero Illustration" className="w-full max-w-sm sm:max-w-md" />
//       </div>
//     </div>
//   </div>
// </section>; */}
