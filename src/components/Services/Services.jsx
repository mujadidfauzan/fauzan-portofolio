import React from 'react';
import Marquee from 'react-fast-marquee';

const Services = () => {
  const svgs = import.meta.glob('/src/assets/logo/*.svg', { eager: true });

  const svgArray = Object.entries(svgs)
    .map(([key, value]) => ({
      name: parseInt(key.split('/').pop().replace('.svg', ''), 10),
      component: value.default,
    }))
    .sort((a, b) => Number(a.name) - Number(b.name));

  return (
    <div id="skills" className="min-h-screen space-y-10 pt-24 pb-10 ">
      <h1 className="text-3xl md:text-5xl  font-bold text-center mb-16 text-light1">My Skills</h1>

      <Marquee speed={50} pauseOnHover gradient={true} gradientColor="#D3D9D4" className="hover:cursor-pointer z-0 bg-light1">
        {svgArray.map((svg, index) => (
          <div key={index} className="h-16 aspect-square mx-8 my-3">
            <img src={svg.component} className="h-full w-full" alt={svg.name} />
          </div>
        ))}
      </Marquee>

      <div className=" flex flex-col items-center px-4">
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl text-light1">
          {/* Card 1 */}
          <div className="bg-dark2 shadow-lg rounded-xl p-6 w-64 flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold">Robotics</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>C/C++</li>
              <li>Robot Operating System</li>
              <li>Microcontroller</li>
              <li>Machine Vision</li>
            </ul>
          </div>

          <div className="bg-dark2 shadow-lg rounded-xl p-6 w-64 flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold">Machine Learning</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Python</li>
              <li>Tensorflow</li>
              <li>PyTorch</li>
              <li>Scikit-learn</li>
              <li>MLOps</li>
            </ul>
          </div>

          <div className="bg-dark2 shadow-lg rounded-xl p-6 w-64 flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold">Fullstack Web</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>HTML/CSS</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="bg-dark2 shadow-lg rounded-xl p-6 w-64 flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold">Internet of Things</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Embedded System</li>
              <li>MQTT</li>
              <li>Sensor Integration</li>
              <li>PCB Design</li>
            </ul>
          </div>
        </div>
      </div>

      <Marquee speed={50} pauseOnHover gradient={true} direction="right" gradientColor="#D3D9D4" className="hover:cursor-pointer z-0 bg-light1">
        {svgArray.map((svg, index) => (
          <div key={index} className="h-16 aspect-square mx-8 my-3">
            <img src={svg.component} className="h-full w-full" alt={svg.name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Services;
