import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ServiseCard = ({ Service, index }) => {
  const cardRef = useRef(null);

  // Mouse position inside card
  const [hovered, setHovered] = useState(false);

  // Motion values for smooth spring animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });
  const glowX = useSpring(0, { stiffness: 150, damping: 25 });
  const glowY = useSpring(0, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse position inside card
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt: -15deg → +15deg
    rotateY.set(((x - centerX) / centerX) * 15);
    rotateX.set(-((y - centerY) / centerY) * 15);

    // Glow follows mouse
    glowX.set(x);
    glowY.set(y);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMouseEnter = () => setHovered(true);

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl dark:shadow-white/10 bg-white dark:bg-gray-900 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: 1000,
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {/* Glow Background */}
      <motion.div
        className={`pointer-events-none blur-3xl rounded-full w-[400px] h-[400px] absolute z-0 transition-opacity duration-500 mix-blend-lighten
          ${hovered ? "opacity-70" : "opacity-0"}`}
        style={{
          left: glowX,
          top: glowY,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.3) 60%, transparent 100%)",
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex items-center gap-10 p-8 rounded-[15px]">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4">
          <img
            src={Service.icon}
            alt={Service.title}
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg">{Service.title}</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {Service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiseCard;