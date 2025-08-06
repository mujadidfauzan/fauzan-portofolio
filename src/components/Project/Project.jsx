import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import projects from './ProjectList';

const Card = ({ title, description, image, techStack, longDesc, link }) => {
  return (
    <div className="group relative items-center justify-center overflow-hidden ease-in-out hover:shadow-xl hover:shadow-black/30 md:hover:scale-125 hover:z-10 transition-all duration-1000 rounded-md">
      <div className="h-72 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image[0]} alt="" />
      </div>
      <div className="absolute inset-0 bg-black/50 md:bg-black/0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex md:translate-y-[50%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-xl font-bold text-white">{title}</h1>
        <p className="mb-3 text-lg italic text-white opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">{description}</p>
        <Modal title={title} desc={description} img={image} techStack={techStack} longDesc={longDesc} link={link} />
      </div>
    </div>
  );
};

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = projects.filter((project) => selectedCategory === 'All' || project.category === selectedCategory);

  const categories = ['All', 'Robotics', 'IoT', 'Machine Learning', 'Web Apps'];

  const loadMoreProjects = () => {
    setVisibleProjects(visibleProjects + 6);
  };

  return (
    <div id="projects" className="min-h-screen pt-24 pb-10 relative">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-light1">My Projects</h1>

      <nav className="mt-7">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:flex gap-4 text-light1 text-sm mx-5 md:mx-0 text-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-2 px-4 md:p-3 md:px-5 rounded-full transition-all border-2 shadow-xl duration-300 cursor-pointer
                  ${selectedCategory === category ? 'bg-blue1 scale-110 shadow-2xl border-accent' : 'bg-dark1 hover:scale-110 border-divght1 hover:shadow-2xl'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLargeScreen
            ? filteredProjects.map((project, index) => <Card key={index} title={project.title} description={project.description} image={project.image} techStack={project.techStack} longDesc={project.longDescription} link={project.link} />)
            : filteredProjects
                .slice(0, visibleProjects)
                .map((project, index) => <Card key={index} title={project.title} description={project.description} image={project.image} techStack={project.techStack} longDesc={project.longDescription} link={project.link} />)}
        </div>
      </div>

      {!isLargeScreen && (
        <div className="flex justify-center mt-6">
          {visibleProjects < filteredProjects.length && (
            <button onClick={loadMoreProjects} className="p-3 px-6 bg-blue1 text-white rounded-full shadow-xl transition-all hover:bg-dark2">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Project;
