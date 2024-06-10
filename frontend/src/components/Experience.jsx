import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const [experiencedata, setExperiencedata] = useState([]);

  useEffect(() => {
    getExperienceData();
  }, []);

  async function getExperienceData() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/experience/");
      const data = await res.json();
      // console.log(data);
      setExperiencedata(data);
    } catch (error) {}
  }

  return (
    <div className="border-b border-neutral-900 pb-2">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-19 mt-4 mb-4 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {experiencedata &&
          experiencedata?.map((experience, index) => (
            <div key={index} className="mb-88 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className=" mb-6 w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.title} -
                  <span className="text-sm text-neutral-300">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.Roles}</p>
                {experience.Technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-800"
                    key={index}
                  >
                    {tech.title}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
