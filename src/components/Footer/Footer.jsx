import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Rocket from './Rocket';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark1 text-light1 py-10">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 gap-2 text-center justify-center items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue1">Let's build something amazing together!</h1>
          </div>
          <Rocket />

          <div className="text-center ">
            <h2 className="text-xl font-semibold text-light1 mb-3">Connect with Me</h2>
            <div className="flex justify-center  space-x-4">
              <a href="https://github.com/mujadidfauzan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue1 transition duration-300 text-2xl">
                <FaGithub />
              </a>
              <a href="https://id.linkedin.com/in/mujadid-fauzan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue1 transition duration-300 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/mujadidfauzan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue1 transition duration-300 text-2xl">
                <FaInstagram />
              </a>
              <a href="mailto:mujadidfauzan29@gmail.com" className="text-gray-400 hover:text-blue1 transition duration-300 text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-5 text-center text-sm text-gray-500">© {new Date().getFullYear()} Fauzan's Portfolio. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
