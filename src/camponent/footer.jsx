import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <footer className="relative bg-white dark:bg-black text-gray-800 dark:text-gray-300 pt-24 pb-10 px-6 sm:px-12 lg:px-24 xl:px-40 overflow-hidden">

      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        
        {/* Left */}
        <div>
          <img
            src={theme === "light" ? assets.logo : assets.logo_dark}
            className="w-36 mb-6"
            alt="logo"
          />

          <p className="max-w-md text-gray-500 dark:text-gray-400 leading-relaxed">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-8 mt-8 text-sm font-medium">
            <li>
              <a className="hover:text-primary transition-colors duration-300" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors duration-300" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our newsletter
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-full p-1 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-gray-500 dark:text-gray-400">

        <p>
          © 2025 maazshaikh2079. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <img src={assets.facebook_icon} alt="facebook" className="w-5 opacity-70 hover:opacity-100 transition" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <img src={assets.twitter_icon} alt="twitter" className="w-5 opacity-70 hover:opacity-100 transition" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <img src={assets.instagram_icon} alt="instagram" className="w-5 opacity-70 hover:opacity-100 transition" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <img src={assets.linkedin_icon} alt="linkedin" className="w-5 opacity-70 hover:opacity-100 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;