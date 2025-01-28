import React, { useState } from 'react';
import heroImg from '../../assets/bangkit.jpg';
import Modal from './Modal';
import getImageUrl from '../../assets';

const Card = ({ title, description, image }) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden ease-in-out hover:shadow-xl hover:shadow-black/30 hover:scale-150 hover:z-10 transition-all duration-1000 rounded-md">
      <div className="h-72 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-xl font-bold text-white">{title}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: 'Abu Robocon Robot',
      description: 'Participated in the ABU Robocon Contest Indonesia 2024, developing robots based on the theme "Harvest Day" to simulate agricultural harvesting tasks.',
      category: 'Robotics',
      image: heroImg,
    },
    {
      title: 'Genetic Algorithm for Wireless Sensor Network Optimization',
      description: 'Optimized wireless sensor networks (WSNs) in Surabaya using genetic algorithms to improve energy efficiency and expand network coverage.',
      category: 'Machine Learning',
      image: heroImg,
    },
    {
      title: 'Smart Egg Incubator: Automated IoT Solution',
      description: 'Developed an IoT-based egg incubator enabling real-time monitoring of temperature and humidity to improve hatching success rates.',
      category: 'IoT',
      image: heroImg,
    },
    {
      title: 'Landing Page Surabaya Dev Community',
      description: 'Developed a responsive landing page for Surabaya Dev using HTML and Bootstrap 5, providing concise information about the community.',
      category: 'Web',
      image: heroImg,
    },
    {
      title: 'Line Follower Robot',
      description: 'Developed a line follower robot that autonomously follows a path using line-tracing technology with an Arduino Nano.',
      category: 'Robotics',
      image: heroImg,
    },
    {
      title: 'Munashoroh Website',
      description: 'Developed the Munashoroh website as a frontend developer using React.js and Tailwind CSS to ensure a modern, responsive user interface.',
      category: 'Web',
      image: heroImg,
    },
    {
      title: 'Automated Guided Vehicle Robot',
      description: `Developed a a line follower robot with a trolley-lifting mechanism`,
      category: 'Robotics',
      image: heroImg,
    },
    {
      title: 'FoodTopia: AI-Powered Nutrition App',
      description: 'An Android app designed to tackle nutritional challenges in Indonesia by offering personalized diet recommendations through machine learning, cloud infrastructure, and a responsive mobile interface.',
      category: 'Machine Learning',
      image: heroImg,
    },
    {
      title: 'Human Fall Detection Classification',
      description:
        'Developed a classification model to detect human falls by analyzing video frames. The dataset includes two motion categories: "fall" (e.g., backward falls, forward falls) and "non_fall" (e.g., walking, jumping). The model aims to improve safety insights by distinguishing between critical and non-critical movements.',
      category: 'Machine Learning',
      image: heroImg,
    },
    {
      title: 'Fixed Wing UAV for River Flood Response',
      description:
        'This project focuses on deploying a UAV (Unmanned Aerial Vehicle) team as first responders in river flood disaster areas. The UAV system enables monitoring, mapping, and delivery of emergency packages in disaster-stricken locations to reduce further risks. The project includes flight missions during the second selection stage (online) and final stage (on-site), where UAVs must provide live video feeds, take photos, and deliver emergency packages.',
      category: 'Robotics',
      image: heroImg,
    },
  ];

  return (
    <div className="min-h-screen bg-blue2 pt-24 pb-10 relative">
      <h1 className="text-4xl font-serif text-center">My Projects</h1>
      <nav className="mt-7">
        <div className="flex justify-center">
          <ul className="flex gap-4 text-light1 text-sm mx-5 md:mx-0 text-center">
            <li className="p-2 px-4 md:p-3 md:px-5 rounded-full bg-dark1 hover:scale-110 transition-all hover:shadow-xl duration-300 cursor-pointer my-auto">Robotics</li>
            <li className="p-2 px-4 md:p-3 md:px-5 rounded-full bg-dark1 hover:scale-110 transition-all hover:shadow-xl duration-300 cursor-pointer">Internet of Things</li>
            <li className="p-2 px-4 md:p-3 md:px-5 rounded-full bg-dark1 hover:scale-110 transition-all hover:shadow-xl duration-300 cursor-pointer">Machine Learning</li>
            <li className="p-2 px-4 md:p-3 md:px-5 rounded-full bg-dark1 hover:scale-110 transition-all hover:shadow-xl duration-300 cursor-pointer my-auto">Website</li>
          </ul>
        </div>
      </nav>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} description={project.description} image={getImageUrl('krai2.jpg')} />
          ))}
        </div>
      </div>

      <Modal />
    </div>
  );
};

export default Project;
