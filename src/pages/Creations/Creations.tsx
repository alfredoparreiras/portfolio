import transition from "@/Transition"
import Web from "./Web"
import Mobile from "./Mobile"

const Creations = () => {
  return (
    <section id="creations" className="scroll-mt-28">
      <Mobile />
      <Web />
    </section>
  );
}

export default transition(Creations);