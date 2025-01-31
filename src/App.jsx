import { useEffect } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Services from './components/Services/Services';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue2 via-dark2 to-dark1">
        <Hero />
        <About />
        <Services />
      </div>
      <div className="bg-gradient-to-bl from-dark1 via-dark2 to-blue2">
        <Project />
      </div>
      <Footer />
    </>
  );
}

export default App;
