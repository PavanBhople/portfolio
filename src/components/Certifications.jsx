import React from "react";
import Badge from "./Badge";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      name: "Wordpress Web Development for Absolute Beginner Zero to Hero",
      tech: ["Wordpress", "Web Development"],
      link: "/certificates/wordpress.pdf",
      preview: "/certificates/wordpress.pdf",
    },
    {
      name: "UI/UX Design With Figma (5+ Real World Projects)",
      tech: ["UI Design", "Figma", "UX"],
      link: "/certificates/figma.pdf",
      preview: "/certificates/figma.pdf",
    },
    {
      name: "Mastering Advanced ChatGPT Prompt Engineering",
      tech: ["ChatGPT", "AI", "Prompt Engineering"],
      link: "/certificates/chatgpt.pdf",
      preview: "/certificates/chatgpt.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-purple-400 drop-shadow-md">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden bg-black/30 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
          >
            {/* PDF Preview */}
            <div className="w-full h-40 bg-black/20 overflow-hidden border-b border-white/20">
              <embed
                src={`${cert.preview}#toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Certificate Content */}
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {cert.name}
              </h3>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {cert.tech.map((tech, i) => (
                  <Badge key={i} highlighted>{tech}</Badge>
                ))}
              </div>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block px-4 py-2 text-sm border border-white/20 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
