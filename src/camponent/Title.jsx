import React from "react";
import { motion } from "motion/react";

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-medium m-[20px]"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }}
        viewport={{ once: true }}
        className="max-w-lg text-gray-500 dark:text-white/75"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default Title;