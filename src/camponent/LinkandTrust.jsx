import React from "react";
import assets, { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const LinkandTrust = () => {
  return (
    <div className="flex flex-col text-2xl items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:bg-black dark:text-white/80">
      <h3 className="font-semibold text-center">Trusted by leading companies</h3>

      <div className="flex items-center justify-center flex-wrap gap-10 m-1">
        {company_logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="Logo"
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15, // staggered effect
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkandTrust;