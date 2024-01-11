import {Routes,Route,useLocation} from "react-router-dom"
import Journey from "./pages/Journey/Journey";
import Home from "./pages/Home/Home";
import Creations from "./pages/Creations/Creations";
import Contact from "./pages/SayHello/SayHello";
import { AnimatePresence } from "framer-motion";
import Project from "./pages/Creations/Project";
import Header from "./components/Header";

function App() {
  const location = useLocation(); 

  return (
    <>
      <Header />
      <main className="relative">
        <section className="hidden md:flex justify-center min-h-[85vh] flex-col px-8 dark:bg-darkBackground dark:text-white">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/creations" element={<Creations />} />
              <Route path="/sayhello" element={<Contact />} />
              <Route path="/project/:id" element={<Project />} />
            </Routes>
          </AnimatePresence>
        </section>
        <section className="min-h-screen md:hidden lg:hidden">
          <section className="px-8 py-8">
            <Home />
            <Journey />
            <Creations />
            <Contact />
          </section>
        </section>
      </main>
    </>
  );
}

export default App
