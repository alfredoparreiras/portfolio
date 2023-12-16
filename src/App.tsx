import {Routes,Route,useLocation} from "react-router-dom"

import AboutMe from "./pages/AboutMe/AboutMe";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import Project from "./pages/Projects/Project";





function App() {
  
  const location = useLocation(); 

  return (
    <>
      <main className="dark:bg-darkBackground dark:text-white">
        <Header/>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>} />
            <Route path="/whoami" element={<AboutMe/>} />
            <Route path="/whatidid" element={<Projects/>} />
            <Route path="/howtofindme" element={<Contact/>} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App
