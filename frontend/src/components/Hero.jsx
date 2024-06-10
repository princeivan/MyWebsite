import { useEffect, useState } from "react";
import Profile_image from "../assets/profile3.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [heroSection, setHeroSection] = useState([]);

  useEffect(() => {
    getMydata();
  }, []);

  async function getMydata() {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const data = await res.json();

    setHeroSection(data);
  }

  return (
    <div className="boder-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-4xl font-thin tracking-tight lg:mt-6 lg:text-6xl"
            >
              {heroSection[0]?.name}
            </motion.h1>
            ;
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" pb-2 bg-gradient-to-r from-pink-300 vie-slate-400 to-green-500 bg-clip-text text-4xl tacking-tight text-transparent"
            >
              {heroSection[0]?.title}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {heroSection[0]?.body}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-[250px] h-[300px] rounded-xl"
              src={`http://localhost:8000${heroSection[0]?.image}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
