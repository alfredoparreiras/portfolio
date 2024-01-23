import transition from "@/Transition";
import Mobile from "./Mobile";
import Web from "./Web";
import { useState, useEffect } from "react";

const Journey = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");

    // Converting savedDarkMode into Boolean.
    var savedValue = false;
    if (savedDarkMode === "true") savedValue = true;

    //Checking if darkMode is set or not.
    if (savedDarkMode !== null) setDarkMode(savedValue);
    else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, [darkMode]);

  return (
    <section id="journey" className="scroll-mt-32">
      <Mobile />
      <Web darkMode={darkMode} />
    </section>
  );
};

export default transition(Journey);
