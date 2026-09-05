import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/heroimage.png";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const roles = ["Developer", "Ideator","UI/UX Designer", "Compère", "Strategic Thinker"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(async () => {
      await controls.start({ opacity: 0 });
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      await controls.start({ opacity: 1 });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-gray-200 pb-24 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-6 text-4xl font-medium tracking-tight lg:mt-16 lg:text-7xl text-sky-600">
              Sashen Windsor
            </h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={controls}
              className="bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {roles[currentRoleIndex]}
            </motion.span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-700">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:ml-24">
          <div className="flex justify-center">
            <img src={profilePic} alt="Sashen Windsor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
