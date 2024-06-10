import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
motion;

const Contact = () => {
  const [contactdata, setContactdata] = useState([]);

  useEffect(() => {
    getContactData();
  }, []);

  async function getContactData() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/my-contact/");
      const data = await res.json();

      setContactdata(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="border-b border-neutral-900 pb-18">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl "
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          +{contactdata[0]?.Phone_No}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {contactdata[0]?.Email}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {contactdata[0]?.Address}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
