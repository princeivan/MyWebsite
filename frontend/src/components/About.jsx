import { useEffect, useState } from "react";
import Profile2 from "../assets/profile2.jpg";
import { motion } from "framer-motion";

const About = () => {
  const [aboutdata, setAboutdata] = useState([]);

  useEffect(() => {
    getAboutData();
  }, []);

  async function getAboutData() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/about/");
      const data = await res.json();

      setAboutdata(data);
    } catch (error) {}
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-18 text-center text-4xl">
        About <span className=" text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-[250px] h-[300px] rounded-2xl"
              src={`http://127.0.0.1:8000${aboutdata[0]?.image}`}
              alt=""
            />
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {aboutdata[0]?.body}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
