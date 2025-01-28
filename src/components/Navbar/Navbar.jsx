import React, { useState } from 'react';
import { TfiMenu } from 'react-icons/tfi';

const Navlinks = [
  {
    id: 1,
    name: 'ABOUT',
    link: '/#',
  },
  {
    id: 2,
    name: 'SERVICES',
    link: '/#services',
  },
  {
    id: 3,
    name: 'PORTOFOLIO',
    link: '/#portofolio',
  },
  {
    id: 4,
    name: 'CONTACT',
    link: '/#contact',
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="relative z-[1]">
      <div className="fixed md:border-2 border-blue2 bg-light1 md:top-5 md:left-1/2 md:-translate-x-1/2 w-full md:w-[500px] md:py-0 shadow-xl md:rounded-3xl">
        <nav className="hidden md:block ">
          <ul className="flex justify-center items-center gap-4">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="py-3">
                <a href={link} className="text-sm text-dark/60 font-semibold font-serif hover:text-dark border-b border-light1 hover:border-dark  transition-all duration-500">
                  {name}
                </a>
                {id < 4 && <span className="ml-4 text-gray-800">|</span>}
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile view  */}
        <div className="md:hidden ">
          <div className="flex justify-between py-3 px-2 z-10">
            {/* Mobile Hamburger icon */}
            <h1 className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent text-xl font-bold font-serif">Fauzan</h1>

            <TfiMenu onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
          </div>
          <div className={`w-full -z-10 bg-gradient-to-r from-slate-300 to-slate-500 transition-all duration-500 ease-in absolute ${showMenu ? 'top-[50px]' : 'top-[-490px]'}`}>
            <ul className="flex flex-col justify-center items-center gap-4">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-3">
                  <a href={link} className="text-sm font-medium font-serif hover:text-light1 hover:border-b-2 border-light1 transition-colors duration-500  ">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
