import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
const OurWork = () => {
  const workData = [
    {
      image: assets.work_mobile_app,
      title: "Mobile app marketing",
      pare: "We turn bold ideas into powerful digital solutions that connect...",
    },
    {
      image: assets.work_dashboard_management,
      title: "Dashboard management",
      pare: "We help you excute your plan and deliver results.",
    },
    {
      image: assets.work_fitness_app,
      title: "Fitness app promotion",
      pare: "We help you create a marketing strategy that drives results ",
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 
  xl:px-40 placeholder-teal-300 text-2xl-gray-700 dark:text-white"
    >
      <Title
        title={" Our latest work "}
        desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
      />

      <div className=" grid sm:grid-cols-3 gap-6 w-flll max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className=" hover:scale-101 duration-500 transition-all 
            cursor-pointer"
          >
            <img
              src={work.image}
              className=" w-full rounded-b-xl"
              alt="Our work"
            />
            <h3 className="mt-3 mb-3 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.pare}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
