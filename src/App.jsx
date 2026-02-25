import {
  Navbar,
  Hero,
  LinkandTrust,
  Sarvise,
  OurWork,
  Teams,
  ContactUs,
  Footer,
} from "./camponent/index";
import { useRef, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const cursor = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable custom cursor on touch devices
    if ("ontouchstart" in window) return;

    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, .cursor-pointer",
    );

    const handleMouseEnter = (e) => {
      if (!ringRef.current) return;

      ringRef.current.style.transform += " scale(1.8)";
      ringRef.current.style.borderColor = "#ff4d4d";

      // Magnetic effect
      const rect = e.target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      cursor.current.x = centerX;
      cursor.current.y = centerY;
    };

    const handleMouseLeave = () => {
      if (!ringRef.current) return;

      ringRef.current.style.borderColor =
        theme === "dark" ? "#ffffff" : "#000000";
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    let animationFrameId;
    const speed = 0.6; // constant speed

    const animate = () => {
      cursorPosition.current.x +=
        (cursor.current.x - cursorPosition.current.x) * speed;

      cursorPosition.current.y +=
        (cursor.current.y - cursorPosition.current.y) * speed;

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `
      translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)
      translate(-50%, -50%)
    `;

        ringRef.current.style.transform = `
      translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0)
      translate(-50%, -50%)
    `;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = "auto";
    };
  }, [theme]);

  return (
    <div className="dark:bg-black selection:bg-gray-400 dark:selection:bg-[#6f6e78]">
      <Toaster />

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <LinkandTrust />
      <Sarvise />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} setTheme={setTheme} />

      {/* Ring Cursor */}
      <div
        ref={ringRef}
        className="fixed dark:border-white top-0 left-0 h-10 w-10 rounded-full border border-black pointer-events-none z-[9999]"
      />

      <div
        ref={dotRef}
        className="fixed dark:bg-white top-0 left-0 h-3 w-3 rounded-full bg-black pointer-events-none z-[9999]"
      />
    </div>
  );
}

export default App;
