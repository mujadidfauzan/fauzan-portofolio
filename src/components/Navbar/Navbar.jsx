import React, { useState, useEffect } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { IoMdClose } from 'react-icons/io';

const Navlinks = [
  { id: 1, name: 'ABOUT', link: 'about' },
  { id: 2, name: 'SKILLS', link: 'skills' },
  { id: 3, name: 'PROJECTS', link: 'projects' },
  { id: 4, name: 'CONTACT', link: 'contact' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowMenu(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      Navlinks.forEach(({ link }) => {
        const section = document.getElementById(link);
        if (section) {
          const offset = section.offsetTop - 100; // Sesuaikan offset jika ada navbar fixed
          const height = section.offsetHeight;

          // Periksa apakah sudah mencapai bagian paling bawah
          if (scrollPosition + windowHeight >= documentHeight - 10) {
            setActiveSection('contact'); // Pastikan section terakhir aktif
          } else if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(link);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center mx-auto py-3 fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] bg-light1/80 backdrop-blur-md border border-blue2 shadow-lg rounded-3xl transition-all duration-300 hover:opacity-100 opacity-80">
        <nav>
          <ul className="flex justify-center items-center gap-6">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="relative">
                <button onClick={() => handleScroll(link)} className={`text-sm font-medium transition-all duration-300 ${activeSection === link ? 'text-blue1 font-semibold' : 'text-dark2 hover:text-blue1'}`}>
                  {name}
                </button>
                {id < Navlinks.length && <span className="ml-4 text-gray-500">|</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="md:hidden w-full bg-light1 shadow-md py-4 px-5 flex justify-between items-center">
        <h1 className="text-xl font-bold font-serif text-blue1">Fauzan</h1>
        <button onClick={() => setShowMenu(!showMenu)} className="text-dark2 focus:outline-none">
          {showMenu ? <IoMdClose size={30} /> : <TfiMenu size={30} />}
        </button>
      </div>

      <div className={`fixed top-0 left-0 w-full h-screen bg-dark1/80 backdrop-blur-md flex justify-center items-center transform transition-all duration-500 ${showMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <ul className="text-center space-y-6">
          {Navlinks.map(({ id, name, link }) => (
            <li key={id}>
              <button onClick={() => handleScroll(link)} className="text-xl text-light1 font-medium hover:text-blue1 transition-all duration-300">
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
