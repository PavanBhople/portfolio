// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import resumeData from "../data/resumeData";

// Typing texts (outside component for ESLint safety)
const typingTexts = [
  "Network Engineer",
  "Frontend Developer",
  "Graphic Designer",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  // Typing animation
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 120;
    const erasingSpeed = 70;
    const delayBetween = 1000;

    let timer;

    if (charIndex < typingTexts[textIndex].length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        const eraseTimer = setInterval(() => {
          setDisplayText((prev) => {
            if (prev.length === 0) {
              clearInterval(eraseTimer);
              setTextIndex((i) => (i + 1) % typingTexts.length);
              setCharIndex(0);
              return "";
            }
            return prev.slice(0, -1);
          });
        }, erasingSpeed);
      }, delayBetween);
    }

    return () => clearTimeout(timer);
  }, [charIndex, textIndex]);

  return (
    <header className="w-full">
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-5 md:px-12 py-6 bg-black/60 backdrop-blur-md border-b border-white/10 rounded-b-3xl shadow-lg">
        
        {/* Profile */}
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <img
            src="/DP.jpg"
            alt="Profile"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-full border-2 border-white/50 shadow-xl"
          />

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {resumeData.name}
            </h1>
            <p className="text-purple-400 text-base sm:text-lg mt-1 font-mono min-h-[24px]">
              {displayText}
            </p>
          </div>
        </div>

        {/* Resume + Social */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/resume/Pavan_Bhople_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="inline-flex items-center gap-2 border border-purple-500 rounded-md px-5 py-2 text-sm text-purple-400 hover:bg-purple-500 hover:text-white transition"
          >
            <FiDownload /> Resume
          </a>

          <div className="flex gap-4 text-xl">
            <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href={resumeData.contact.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href={resumeData.contact.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href={resumeData.contact.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href={resumeData.contact.facebook} target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="bg-black/70 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4 lg:hidden">
          <span className="text-white font-semibold">Menu</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center gap-8 py-4">
          {navLinks.map((nav) => (
            <a
              key={nav.name}
              href={nav.link}
              className="text-gray-300 hover:text-purple-400 font-medium relative group"
            >
              {nav.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-4 py-6 bg-black/90">
            {navLinks.map((nav) => (
              <a
                key={nav.name}
                href={nav.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 text-lg"
              >
                {nav.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
