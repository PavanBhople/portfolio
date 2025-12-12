import React from "react";
import resumeData from "../data/resumeData";

export default function Education() {
  return (
    <section
      id="education"
      className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-purple-400 mb-10 drop-shadow-md">
        Education
      </h2>

      <div className="space-y-8">
        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-black/30 border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-purple-400">
              {edu.degree}
            </h3>
            <p className="text-white/80 font-medium">{edu.institute}</p>
            <p className="text-white/60 text-sm mt-1">{edu.year}</p>
            {edu.cgpa && (
              <p className="text-white/60 text-sm mt-1">CGPA: {edu.cgpa}</p>
            )}
            {edu.percentage && (
              <p className="text-white/60 text-sm mt-1">
                Percentage: {edu.percentage}%
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
