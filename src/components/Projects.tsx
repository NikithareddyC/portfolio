import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Job Aggregator Dashboard',
    description: 'Real-time job scraper aggregating 1,500+ positions from 8 platforms. Automated scraping every 15 minutes with intelligent deduplication, built with FastAPI and deployed on Railway.',
    tech: ['Python', 'FastAPI', 'Playwright', 'PostgreSQL', 'Docker', 'Railway'],
    link: 'https://job-search-dashboard.vercel.app/',
    github: 'https://github.com/nikitharreddy/job-aggregator',
    stats: ['8 Platforms', '1,500+ Jobs', '15m Updates'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold mb-4 text-lg">Featured Work</p>
          <h2 className="text-6xl font-bold text-white">Projects & Products</h2>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500 transition group">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">{project.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">{project.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex gap-6 flex-1">
                    {project.link && (
                      <Link href={project.link} target="_blank" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition group/link">
                        <span>Live Demo</span>
                        <FaExternalLinkAlt size={16} className="group-hover/link:translate-x-1 transition" />
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white font-semibold transition">
                        <FaGithub size={16} />
                        <span>GitHub</span>
                      </Link>
                    )}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500">
                    {project.stats.map((stat, i) => (
                      <span key={i} className="border-l border-gray-700 pl-4 first:border-0">{stat}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
