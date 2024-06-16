import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4 py-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-800"
          >
            <img className="w-full" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {project.title}
              </div>
              <p className="text-gray-400 text-base">{project.description}</p>
            </div>
            <div className="px-6 py-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
