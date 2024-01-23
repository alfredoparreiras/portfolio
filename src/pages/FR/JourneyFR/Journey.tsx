import transition from "@/Transition";
import Mobile from "./Mobile";
import Web from "./Web";

const Journey = () => {
  return (
    <section id="parcours" className="scroll-mt-32">
      <Mobile />
      <Web />
    </section>
  );
};

export default transition(Journey);
