import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePicture.png";
import { motion } from "framer-motion";
import CV from "../assets/CV.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const onButtonClick = () => {
  fetch(CV).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);

      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "SASHEN_WINDSOR.pdf";
      alink.click();
    });
  });
};



const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Sashen Windsor
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <button
              className="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center"
              onClick={onButtonClick}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              whileHover={{
                scale: 1.1,
                translateY: -10,
                transition: { duration: 0.3 },
              }}
              src={profilePic}
              alt="Sashen Windsor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
