import transition from "@/Transition"
import WebProjects from "./WebProjects"
import MobileProjects from "./MobileProjects"
import ArrowBottom from "@/components/ArrowBottom"

const Projects = () => {
  return (
      <section id='whatidid' className='lg:min-h-[1150px] lg:pt-10'>
        <MobileProjects />
        <WebProjects/>
        <ArrowBottom href="/howtofindme"/>
      </section>
  )
}

export default transition(Projects);