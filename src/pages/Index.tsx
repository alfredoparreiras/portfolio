import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact"
import Header from "@/components/Header";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";

import React from 'react'


const Index = () => {
  return (
    <>
      <Header/>
      <Home />
      <AboutMe />
      <Contact />
      <Projects/>
    </>
  )
}

export default Index