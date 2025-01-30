import React from 'react';
import aboutImg from '../../assets/about.jpg';
import cvPdf from '../../assets/cv/my_cv.pdf';
import { FiDownload, FiCode, FiCpu } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="min-h-screen pt-24 pb-10 px-4">
      <h1 className="text-3xl md:text-5xl  font-bold text-center mb-16 text-light1">About Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="relative group flex justify-center items-center">
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl transform perspective-1000 rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
            <img src={aboutImg} alt="Mujadid Fauzan" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>

        <div className="space-y-8 text-light1">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">Robotics Engineer & AI Enthusiast</h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm <span className="text-accent font-semibold">Mujadid Fauzan Salim Tamin</span>, a passionate Robotics and AI Engineering student at Universitas Airlangga, specializing in intelligent systems and human-machine
                collaboration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-dark1/40 rounded-xl border border-light1/10">
                  <h3 className="font-bold mb-2">Robotics</h3>
                  <p className="text-sm">
                    Head of Programming, ABU Robocon Indonesia 2024
                    <br />
                    GCS Operator, Kontes Robot Terbang Indonesia 2024
                  </p>
                </div>

                <div className="p-4 bg-dark1/40 rounded-xl border border-light1/10">
                  <FiCpu className="text-accent text-2xl mb-2" />
                  <h3 className="font-bold mb-2">Technical Expertise</h3>
                  <p className="text-sm">
                    Machine Learning • Full-Stack Dev
                    <br />
                    IoT Systems • Embedded Programming
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                My work focuses on creating <span className="text-accent">AI-driven solutions</span> that bridge theoretical concepts with real-world applications, from competition robots to intelligent agricultural systems.
              </p>
            </div>
          </div>

          <div className="inline-block relative border">
            <a href={cvPdf} download="cv-mujadid" className="flex items-center gap-2 px-8 py-3 bg-accent text-light1 rounded-full font-bold transition-all duration-300 hover:px-12">
              <FiDownload className="text-xl animate-bounce" />
              View Full Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default About;
