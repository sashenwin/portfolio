import { FaGithub, FaGlobe } from 'react-icons/fa';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h2 className="my-20 text-center text-5xl font-semibold text-sky-700">Projects</h2>
      <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap justify-center gap-6 px-4 py-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg  bg-gray-200 relative"
          >
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="font-bold text-xl mb-2 text-sky-600">
                  {project.title}
                </div>
                <div className="flex items-center space-x-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub link"
                    >
                      <FaGithub className="text-gray-600 hover:text-gray-200 cursor-pointer" />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Demo link"
                    >
                      <FaGlobe className="text-gray-600 hover:text-gray-200 cursor-pointer" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 text-base">{project.description}</p>
            </div>
            <div className="px-6 py-4 mt-4 flex flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-2 rounded bg-gray-700 px-2 py-1 text-sm font-medium text-sky-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;