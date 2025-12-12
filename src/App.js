// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsAquarium from './components/SkillsAquarium';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import resumeData from './data/resumeData';
import Contact from './components/Contact';


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70" />
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/60 animate-pulse"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <Header />
        <About />
        <Education />
        <Experience />
        <Projects />
        <SkillsAquarium />
        <Certifications />
        <Contact /> 
        <Footer />
      </div>
    </div>
  );
}
