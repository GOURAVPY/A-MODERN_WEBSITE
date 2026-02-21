import { Navbar } from "./camponent/index";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <>
      <div>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
