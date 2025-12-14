// src/components/Footer.jsx
import React from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-16 px-4 py-10 sm:py-12 text-center border-t border-white/10 bg-gradient-to-t from-black/90 via-black/60 to-black/80 backdrop-blur-md">
      
      {/* Icons Section */}
      <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 text-lg sm:text-xl mb-6">
        {/* Contact Icons */}
        <a
          href="mailto:youremail@example.com"
          className="hover:text-purple-400 transition-colors duration-300"
          aria-label="Email"
        >
          <FiMail />
        </a>
        <a
          href="tel:+91XXXXXXXXXX"
          className="hover:text-purple-400 transition-colors duration-300"
          aria-label="Phone"
        >
          <FiPhone />
        </a>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
          aria-label="Location"
        >
          <FiMapPin />
        </a>

        {/* Social Icons */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-xs sm:text-sm md:text-base">
        © 2025 <span className="text-white font-medium">Pavan Bhople</span>.  
        All rights reserved. Designed with ❤️ and React.
      </p>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 p-3 rounded-full bg-purple-600/30 hover:bg-purple-600/50 transition-all duration-300 text-white shadow-lg backdrop-blur-md"
        title="Back to Top"
        aria-label="Back to top"
      >
        <FiArrowUp className="text-lg sm:text-xl" />
      </button>

      {/* Neon Glow Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 sm:w-1/2 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-60 animate-pulse" />
    </footer>
  );
}
