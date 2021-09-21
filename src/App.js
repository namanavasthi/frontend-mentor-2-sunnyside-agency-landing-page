import React, { useState, useEffect } from "react";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-full relative bg-neutral-background items-center">
      <Header windowWidth={windowWidth} />
      <Main windowWidth={windowWidth} />
      <Footer />
    </div>
  );
}

export default App;
