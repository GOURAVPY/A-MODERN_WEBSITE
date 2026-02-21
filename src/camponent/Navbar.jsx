import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleButton from "./themeToglebotton";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpne, setSidebarOpne] = useState(false);

  return (
    <div
      className=" flex justify-between items-center px-4 sm:px-12
     lg:px-24 xl:px-40 py-4 sticky top-0 z-20
      backdrop-blur-xl 
       font-medium bg-white/50 
       dark:bg-gray-900
       "
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="logo"
      />

      <div
        className={`text-gray dark:text-white sm:text-sm ${!sidebarOpne ? "max-sm:w-0 overflow-hidden " : "max-sm:w-60 max-sm:pl-10 "}
      max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
      max-sm:h-full max-sm:flex-col max-sm:bg-[#5044E5] max-sm:text-white 
      max-sm:pt-20 flex sm:items-center gap-7  transition-all `}
      >
        <img
          src={assets.close_icon}
          className=" w-5 absolute right-4 top-6 sm:hidden"
          alt=""
          onClick={() => setSidebarOpne(false)}
        />

        <a
          onClick={() => setSidebarOpne(false)}
          href="#"
          className=" sm:hover:border-b "
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpne(false)}
          href="#services"
          className=" sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpne(false)}
          href="#our-wark"
          className=" sm:hover:border-b"
        >
          Our Wark
        </a>
        <a
          onClick={() => setSidebarOpne(false)}
          href="#contact-us "
          className=" sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleButton theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu"
          onClick={() => setSidebarOpne(true)}
          className="w-8 sm:hidden "
        />
        <a
          href="#conteact-us"
          className=" text-sm max-sm:hidden flex items-center gap-2 bg-[#5044E5] text-white px-6 py-2 rounded-full 
        cursor-pointer hover:scale-103 transition-all "
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
