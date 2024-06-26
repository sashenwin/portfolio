import { EXPERIENCES } from "../constants";
import { FiCodesandbox } from "react-icons/fi";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-gray-200 pb-40 lg:mb-35">
      <h2
        className="mb-20 text-center text-5xl font-semibold text-sky-700"
      >
        Experience
      </h2>

      <div className="relative lg:px-10">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full"></div>

        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className={`relative mb-8 lg:mb-16 flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`hidden lg:flex absolute ${
                index % 2 === 0 ? "right-1/2" : "left-1/2"
              } transform ${
                index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"
              } lg:w-8 lg:h-8 lg:rounded-full lg:bg-sky-600 lg:top-1/2 lg:-mt-4 items-center justify-center shadow-xl`}
            >
              <h1 className="text-white text-lg font-semibold"><FiCodesandbox /></h1>
            </div>

            <div
              className={`w-full px-4 lg:px-0 lg:max-w-sm flex ${
                index % 2 === 0 ? "lg:ml-12 lg:order-2" : "lg:order-1"
              } items-center justify-center`}
            >
              <div className="relative max-w-sm w-full rounded-lg shadow-lg bg-gray-200 p-6">
                <p className="text-sm text-gray-700 mb-2">
                  {experience.year}
                </p>
                <h6 className="font-semibold text-xl text-sky-600 mb-2">
                  {experience.role}
                </h6>
                <span className="text-sky-700 text-m font-bold">
                  {experience.company}
                </span>
                <p className="mt-2 text-gray-500">
                  {experience.description}
                </p>
                <div className="mt-4 flex flex-wrap">
                  {experience.skills.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-2 rounded bg-gray-700 px-2 py-1 text-sm font-medium text-sky-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
