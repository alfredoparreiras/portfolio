import {Routes,Route,useLocation} from "react-router-dom"

import AboutMe from "./pages/AboutMe/AboutMe";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import { AnimatePresence } from "framer-motion";




function App() {
  
  const location = useLocation(); 

  return (
    <>
      <Header/>
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
          <Route index element={<Home/>} />
          <Route path="/whoami" element={<AboutMe/>} />
          <Route path="/whatidid" element={<Projects/>} />
          <Route path="/howtofindme" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App
