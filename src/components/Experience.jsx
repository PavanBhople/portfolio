import React from "react";
import resumeData from "../data/resumeData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-purple-400 mb-10 drop-shadow-md">
        Work Experience
      </h2>

      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-black/30 border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-purple-400">
              {exp.role}
            </h3>
            <p className="text-white/80 font-medium">{exp.company}</p>
            <p className="text-white/60 text-sm mt-1">{exp.period}</p>

            <ul className="list-disc list-inside mt-3 text-white space-y-1 text-sm md:text-base">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
