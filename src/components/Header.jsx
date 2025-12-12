// // src/components/Header.jsx
// import React, { useState, useEffect } from "react";
// import { FiDownload } from "react-icons/fi";
// import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
// import resumeData from "../data/resumeData";

// export default function Header() {
//   const navLinks = [
//     { name: "Home", link: "#home" },
//     { name: "About", link: "#about" },
//     { name: "Education", link: "#education" },
//     { name: "Skills", link: "#skills" }, // Updated link to match SkillsAquarium section id
//     { name: "Projects", link: "#projects" },
//     { name: "Certifications", link: "#certifications" },
//     { name: "Contact", link: "#contact" },
//   ];

//   // Typing Animation
//   const typingTexts = ["Network Engineer", "Frontend Developer", "Graphic Designer"];
//   const [displayText, setDisplayText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const typingSpeed = 150;
//     const erasingSpeed = 80;
//     const delayBetween = 1000;

//     let timer;

//     if (charIndex < typingTexts[textIndex].length) {
//       timer = setTimeout(() => {
//         setDisplayText((prev) => prev + typingTexts[textIndex][charIndex]);
//         setCharIndex((prev) => prev + 1);
//       }, typingSpeed);
//     } else {
//       timer = setTimeout(() => {
//         const eraseTimer = setInterval(() => {
//           setDisplayText((prev) => {
//             if (prev.length === 0) {
//               clearInterval(eraseTimer);
//               setTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
//               setCharIndex(0);
//               return "";
//             }
//             return prev.slice(0, -1);
//           });
//         }, erasingSpeed);
//       }, delayBetween);
//     }

//     return () => clearTimeout(timer);
//   }, [charIndex, textIndex]);

//   return (
//     <header className="w-full">
//       {/* Top Section: Profile Left + Social/Resume Right */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-6 md:px-12 bg-black/50 backdrop-blur-md border-b border-white/10 rounded-b-3xl shadow-lg">
        
//         {/* Left: Profile */}
//         <div className="flex items-center gap-6">
//           <div className="relative w-36 h-36 md:w-48 md:h-48 flex-shrink-0">
//             <img
//               src="/DP.jpg"
//               alt="Profile"
//               className="w-full h-full object-cover rounded-full border-2 border-white/50 shadow-xl"
//             />
//           </div>

//           {/* Name + Typing */}
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
//               {resumeData.name}
//             </h1>
//             <p className="text-purple-400 text-lg md:text-xl mt-1 font-mono">{displayText}</p>
//           </div>
//         </div>

//         {/* Right: Resume + Social */}
//         <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
//           {/* Resume Button */}
//           <a
//             href="/resume/Pavan_Bhople_Resume.pdf"
//             target="_blank"
//             rel="noreferrer"
//             download="Pavan_Bhople_Resume"
//             className="inline-flex items-center gap-2 border border-purple-500 rounded-md px-5 py-2 text-sm text-purple-400 hover:bg-purple-500 hover:text-white transition-transform transform hover:-translate-y-1 shadow-md"
//           >
//             <FiDownload /> Resume
//           </a>

//           {/* Social Icons */}
//           <div className="flex gap-4 text-2xl mt-2 md:mt-0">
//             <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-transform hover:-translate-y-1"><FaLinkedin /></a>
//             <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-transform hover:-translate-y-1"><FaGithub /></a>
//             <a href={resumeData.contact.whatsapp} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-transform hover:-translate-y-1"><FaWhatsapp /></a>
//             <a href={resumeData.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-transform hover:-translate-y-1"><FaInstagram /></a>
//             <a href={resumeData.contact.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-transform hover:-translate-y-1"><FaFacebook /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section: Navigation Bar */}
//       <nav className="flex justify-center gap-6 py-4 bg-black/60 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-md">
//         {navLinks.map((nav) => (
//           <a
//             key={nav.name}
//             href={nav.link}
//             className="text-gray-300 font-medium text-base md:text-lg relative group hover:text-purple-400 transition"
//           >
//             {nav.name}
//             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
//           </a>
//         ))}
//       </nav>
//     </header>
//   );
// }


// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import resumeData from "../data/resumeData";

// ✅ FIX: Move typingTexts outside component (ESLint + Netlify build success)
const typingTexts = ["Network Engineer", "Frontend Developer", "Graphic Designer"];

export default function Header() {
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  // Typing Animation States
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 150;
    const erasingSpeed = 80;
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
              setTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
              setCharIndex(0);
              return "";
            }
            return prev.slice(0, -1);
          });
        }, erasingSpeed);
      }, delayBetween);
    }

    return () => clearTimeout(timer);
  }, [charIndex, textIndex]); // ✔ typingTexts removed → stable deps (no ESLint error)

  return (
    <header className="w-full">
      {/* Top Section: Profile Left + Social Right */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-6 md:px-12 bg-black/50 backdrop-blur-md border-b border-white/10 rounded-b-3xl shadow-lg">
        
        {/* Left: Profile */}
        <div className="flex items-center gap-6">
          <div className="relative w-36 h-36 md:w-48 md:h-48 flex-shrink-0">
            <img
              src="/DP.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-2 border-white/50 shadow-xl"
            />
          </div>

          {/* Name + Typing Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {resumeData.name}
            </h1>
            <p className="text-purple-400 text-lg md:text-xl mt-1 font-mono">
              {displayText}
            </p>
          </div>
        </div>

        {/* Right: Resume + Social Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          {/* Resume Button */}
          <a
            href="/resume/Pavan_Bhople_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="Pavan_Bhople_Resume"
            className="inline-flex items-center gap-2 border border-purple-500 rounded-md px-5 py-2 text-sm text-purple-400 hover:bg-purple-500 hover:text-white transition-transform transform hover:-translate-y-1 shadow-md"
          >
            <FiDownload /> Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-2 md:mt-0">
            <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-transform hover:-translate-y-1"><FaLinkedin /></a>
            <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-transform hover:-translate-y-1"><FaGithub /></a>
            <a href={resumeData.contact.whatsapp} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-transform hover:-translate-y-1"><FaWhatsapp /></a>
            <a href={resumeData.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-transform hover:-translate-y-1"><FaInstagram /></a>
            <a href={resumeData.contact.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-transform hover:-translate-y-1"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-center gap-6 py-4 bg-black/60 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-md">
        {navLinks.map((nav) => (
          <a
            key={nav.name}
            href={nav.link}
            className="text-gray-300 font-medium text-base md:text-lg relative group hover:text-purple-400 transition"
          >
            {nav.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
}

