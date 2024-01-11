import transition from "@/Transition"
import WebProjects from "./WebProjects"
import MobileProjects from "./MobileProjects"

const Projects = () => {
  return (
    <section id="whatidid" className="scroll-mt-28 lg:min-h-[1150px] lg:pt-10">
      <MobileProjects />
      <WebProjects />
    </section>
  );
}

export default transition(Projects);