import { Navbar, Hero, LinkandTrust, Sarvise, OurWork, Teams, ContactUs } from "./camponent/index";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <>
      <div className=" dark:bg-black selection:bg-gray-400 dark:selection:bg-[#6f6e78]">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <LinkandTrust />
        <Sarvise />
        <OurWork />
        <Teams />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
