import React from 'react';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import heroImg from '../../assets/bangkit.webp';

const Hero = () => {
  return (
    <div id="hero" className="flex items-center pt-20 md:pt-0 pb-10 md:pb-0 min-h-screen">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light1 leading-tight">Hi, I'm Fauzan</h1>
            <h1 className="text-3xl font-bold text-light1 mt-4">
              I'm&nbsp; a&nbsp;
              <ReactTyped style={{ color: '#D3D9D4' }} backSpeed={20} strings={['Web Developer', 'Robotics Engineer', 'AI/ML Developer', 'IoT Enthusiast']} typeSpeed={50} loop />
            </h1>
            <p className="text-lg text-light1 mt-6 max-w-md">Deep passion for innovation and technology.</p>

            <div className="flex items-center justify-center mt-8 gap-6">
              <motion.a whileHover={{ scale: 1.2, rotate: 15 }} href="https://github.com/mujadidfauzan" target="_blank" rel="noopener noreferrer" className="text-4xl text-light1 hover:text-blue1 transition-colors duration-300">
                <FaGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: 15 }} href="https://id.linkedin.com/in/mujadid-fauzan" target="_blank" rel="noopener noreferrer" className="text-4xl text-light1 hover:text-blue1 transition-colors duration-300">
                <FaLinkedin />
              </motion.a>
            </div>

            <motion.div initial={{ y: 0 }} animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="mt-12 flex flex-col items-center gap-2 text-light1">
              <span className="text-sm">Scroll Down</span>
              <FaArrowDown className="text-xl" />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center items-center">
            <div className="relative h-[500px] md:w-96 aspect-9/16 overflow-hidden rounded-2xl transform perspective-1000 rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
              <img src={heroImg} alt="Fauzan" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-48 h-48 bg-blue1/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue1/5 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default Hero;
