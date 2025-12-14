import React from "react";
import resumeData from "../data/resumeData";

export default function About() {
  return (
    <section
      id="about"
      className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-purple-400 mb-10 drop-shadow-md">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <p className="text-white text-base md:text-lg leading-relaxed text-justify">
            {resumeData.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-2">
                Professional Skills
              </h3>
              <ul className="list-disc list-inside text-white text-sm md:text-base space-y-1">
                {Object.entries(resumeData.professionalSkills).map(
                  ([category, skills], i) => (
                    <li key={i}>
                      <span className="font-semibold">{category}:</span>{" "}
                      {skills.join(", ")}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-2">
                Hobbies
              </h3>
              <ul className="list-disc list-inside text-white text-sm md:text-base space-y-1">
                {resumeData.hobbies.map((hobby, i) => (
                  <li key={i}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ Resume Download Button */}
          <div className="pt-4">
            <a
              href="/resume/Pavan_Bhople_Resume.pdf"
              download="Pavan_Bhople_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-lg"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="/about.jpg"
            alt="About Me"
            className="w-full h-full object-cover rounded-3xl border border-white/20 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
