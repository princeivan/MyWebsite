import { FaNodeJs, FaPython } from "react-icons/fa";
import { RiJavascriptLine, RiReactjsLine } from "react-icons/ri";
import {
  SiDjango,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPostgresql,
} from "react-icons/si";
import { DiRedis, DiDjango } from "react-icons/di";
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
    <div className="mb-3 border-b border-neutral-800 pb-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-18 text-center text-4xl m-4"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 pb-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 pb-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 pb-4"
        >
          <FaPython className="text-7xl text-cyan-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 pb-4"
        >
          <SiMysql className="text-7xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 pb-4"
        >
          <SiDjango className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 pb-4"
        >
          <SiOracle className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 pb-4"
        >
          <SiPostgresql className="text-7xl text-purple-900" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
