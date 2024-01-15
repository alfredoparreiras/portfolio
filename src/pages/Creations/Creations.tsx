import transition from "@/Transition"
// import Web from "./Web"
import Mobile from "./Mobile"
import GaleryProjects from "./GaleryProjects";

const Creations = () => {
  return (
    <section id="creations" className="scroll-mt-28">
      <Mobile />
      {/* <Web /> */}
      <GaleryProjects />
    </section>
  );
}

export default transition(Creations);