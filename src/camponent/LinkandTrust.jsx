import React from "react";
import assets, { company_logos } from "../assets/assets";

const LinkandTrust = () => {
  return (
    <div className=" flex flex-col text-2xl items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:bg-black dark:text-white/80">
      <h3 className="font-semibold">Trusted by leading companies</h3>
      <div className=" flex items-center justify-center flex-wrap gap-10 m-1">
        {company_logos.map((logo, id) => (
          <img
            key={id}
            src={logo}
            alt="Logo"
            className=" max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default LinkandTrust;
