import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>

      <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center lg:space-x-6">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 lg:mb-16 max-w-md w-full lg:w-1/3 rounded-lg shadow-lg bg-neutral-800 p-6 text-center lg:text-left"
          >
            {/* Image Section */}
            <img
              src={edu.image}
              alt={`${edu.institution} Logo`}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />

            {/* Text Details Section */}
            <h3 className="font-semibold text-xl text-white mb-2">
              {edu.institution}
            </h3>
            <p className="text-sm text-neutral-400 mb-1">
              {edu.degree} in {edu.fieldOfStudy}
            </p>
            <p className="text-sm text-purple-100 mb-2">{edu.graduationYear}</p>
            <p className="text-neutral-400 mb-4">{edu.description}</p>
            <div className="text-left">
              <h4 className="font-semibold text-md text-purple-500 mb-2">
                Key Courses:
              </h4>
              <ul className="list-disc list-inside text-neutral-300">
                {edu.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
