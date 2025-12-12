import React from 'react';
import resumeData from '../data/resumeData';
import Badge from './Badge';

export default function Projects() {
  const projectImages = [
    '/face recognition.jpg',
    '/Air Canvas.jpg',
    '/voice assistant.jpg',
    '/coffee shop.jpg',
    '/my-portfolio.jpg',
    '/coming-soon.jpg' // 6th project placeholder image
  ];

  const projectsWithExtra = [
    ...resumeData.projects,
    {
      name: 'Coffee Shop',
      desc: 'A live coffee shop project with full UI and ordering system.',
      tech: ['React', 'CSS', 'JavaScript'],
      link: 'https://chaluhoja.netlify.app/',
      live: true
    },
    {
      name: 'My Portfolio',
      desc: 'My personal portfolio showcasing projects and skills.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      link: 'https://pavanbhople.netlify.app/',
      live: true
    },
    {
      name: 'Coming Soon', // placeholder project
      desc: '',
      tech: [],
      link: '',
      live: false,
      placeholder: true // flag for placeholder image
    }
  ];

  return (
    <section
      id="projects"
      className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 backdrop-blur-md shadow-xl"
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-purple-400 drop-shadow-md">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projectsWithExtra.map((project, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:-translate-y-0.5 hover:rotate-0.5
              ${project.live 
                ? 'bg-black/40 border-2 border-green-400 shadow-2xl' 
                : 'bg-black/30 border border-white/20 hover:shadow-2xl'
              }`}
          >
            {/* Live Badge */}
            {project.live && (
              <span className="absolute top-1 right-1 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold z-10 shadow-md">
                LIVE
              </span>
            )}

            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={projectImages[index] || '/image.jpg'}
                alt={project.name}
                className={`w-full h-32 md:h-36 object-cover transition-transform duration-500 hover:scale-105 ${
                  project.live ? 'brightness-110' : 'opacity-90 hover:opacity-100'
                }`}
              />
              {project.live && (
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
              )}
            </div>

            {/* Project Content */}
            {!project.placeholder && (
              <div className="p-3 md:p-4 flex flex-col justify-between">
                <div>
                  <h3 className={`text-base md:text-lg font-semibold ${project.live ? 'text-green-400' : 'text-white'}`}>
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mt-1">{project.desc}</p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} highlighted>{tech}</Badge>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="mt-2">
                  <a
                    href={project.link || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-block px-3 py-1.5 text-xs md:text-sm rounded-xl transition-all duration-300 border ${
                      project.live 
                        ? 'bg-green-500 text-white border-green-400 hover:bg-green-600'
                        : 'border-white/20 hover:bg-white/10'
                    }`}
                  >
                    {project.live ? 'View Live' : 'View Project'}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
