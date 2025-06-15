import React, { useState } from 'react';
import { Heart, Activity, Calendar, Users, Moon, Sun, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import OurMission from './components/OurMission';
import HowItWorks from './components/HowItWorks';
import DownloadSection from './components/DownloadSection';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section2 from './components/Section2';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </Navbar>
        <main>
          <Hero />
          <Features />
          <OurMission />
          <Section2 />
          <Results />
          <HowItWorks />
          <DownloadSection />
          <Testimonials />
          <FAQ />
          <Pricing />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;