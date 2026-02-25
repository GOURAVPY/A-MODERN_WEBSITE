import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ContactUs = () => {

  const onSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f1c4b024-2172-4b90-a9e8-ce2c51c4b566");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResult(toast.success ? "Success!" : toast.error(data.message));
    } catch (error) {
      toast.success('your message is sent success fuly')
    }
  };

  return (
    <motion.div
      id="contact-us"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <motion.div variants={item}>
        <Title
          title="Reach out to us"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </motion.div>

      <motion.form
        variants={container}
        onSubmit={onSubmit}
        action="#"
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 w-full max-w-2xl"
      >
        <motion.div variants={item}>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>

        <motion.div variants={item}>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            id="message"
            name="message"
            row={8}
            placeholder="Enter your message"
            className="w-full p-3 h-34 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </motion.div>

        <motion.button
          variants={item}
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer transition-all"
        >
          Submit <img src={assets.arrow_icon} alt="" className="w-4" />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;