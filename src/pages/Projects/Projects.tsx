import transition from "@/Transition"
import HomeProjects from "./HomeProjects"
import MobileProjects from "./MobileProjects"
import ArrowBottom from "@/components/ArrowBottom"

const Projects = () => {
  return (
      <section id='whatidid' className='px-12 mt-20'>
        <MobileProjects />
        <HomeProjects/>
        <ArrowBottom href="/howtofindme"/>
      </section>
  )
}

export default transition(Projects);