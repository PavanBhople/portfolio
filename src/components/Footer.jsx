// src/components/Footer.jsx
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 py-12 text-center border-t border-white/10 bg-gradient-to-t from-black/90 via-black/60 to-black/80 backdrop-blur-md">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6 text-xl">
        {/* Contact Icons */}
        <a href="mailto:youremail@example.com" className="hover:text-purple-400 transition-colors duration-300"><FiMail /></a>
        <a href="tel:+91XXXXXXXXXX" className="hover:text-purple-400 transition-colors duration-300"><FiPhone /></a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-300"><FiMapPin /></a>

        {/* Social Icons */}
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-300"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-300"><FaLinkedin /></a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-300"><FaInstagram /></a>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 p-3 rounded-full bg-purple-600/30 hover:bg-purple-600/50 transition-colors duration-300 text-white shadow-lg"
        title="Back to Top"
      >
        <FiArrowUp />
      </button>

      {/* Footer Text */}
      <p className="text-gray-300 text-sm md:text-base">
        © 2025 Pavan Bhople. All rights reserved. Designed with ❤️ and React
      </p>

      {/* Neon Glow Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-60 animate-pulse" />
    </footer>
  );
}
