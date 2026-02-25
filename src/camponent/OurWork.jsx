import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "framer-motion";

const OurWork = () => {
  const workData = [
    {
      image: assets.work_mobile_app,
      title: "Mobile App Marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect brands with people.",
    },
    {
      image: assets.work_dashboard_management,
      title: "Dashboard Management",
      desc: "We help you execute your vision with data-driven digital systems.",
    },
    {
      image: assets.work_fitness_app,
      title: "Fitness App Promotion",
      desc: "Strategic marketing solutions designed to scale and perform.",
    },
  ];

  return (
    <section
      id="our-work"
      className="relative w-full py-24 px-6 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black text-gray-800 dark:text-white overflow-hidden"
    >
      <Title
        title="Our Latest Work"
        desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto mt-16">
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Hover Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-sm leading-relaxed">
                  {work.desc}
                </p>
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold tracking-tight">
              {work.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;