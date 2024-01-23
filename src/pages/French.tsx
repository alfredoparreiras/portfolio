import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./FR/HomeFR/Home";
import Journey from "./FR/JourneyFR/Journey";
import Creations from "./FR/CreationsFR/Creations";
import SayHello from "./FR/SayHelloFR/SayHello";
import HeaderFR from "@/components/HeaderFR";

type FrenchProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const French = ({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
}: FrenchProps) => {
  const location = useLocation();
  return (
    <>
      <HeaderFR
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="relative antialiased">
        <section
          className="hidden md:flex
                            justify-center min-h-[80vh] flex-col px-8 xlg:px-16
                            xxlg:px-32 xxxlg:px-40 bg-offwhite
                            dark:bg-darkBackground dark:text-white"
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/creations" element={<Creations />} />
              <Route path="/sayhello" element={<SayHello />} />
            </Routes>
          </AnimatePresence>
        </section>
        <section className="min-h-screen md:hidden lg:hidden">
          <section className="px-8 py-8">
            <Home />
            <Journey />
            <Creations />
            <SayHello />
          </section>
        </section>
      </main>
    </>
  );
};

export default French;
