import { RiReactjsLine } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { SiGit } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-gray-200 pb-24">
      <h2
        className="my-20 text-center text-5xl font-semibold text-sky-700"
      >
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <FaJava className="text-6xl text-cyan-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <RiAngularjsFill className="text-6xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <FaHtml5 className="text-6xl text-amber-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <FaCss3Alt className="text-6xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <IoLogoJavascript className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <RiTailwindCssFill className="text-6xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <SiMysql className="text-6xl text-sky-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <PiFigmaLogoDuotone className="text-6xl text-gray-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-400 p-4"
        >
          <SiGit className="text-6xl text-orange-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
