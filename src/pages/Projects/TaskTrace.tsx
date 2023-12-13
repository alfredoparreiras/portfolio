import MobileCarousel from "@/components/MobileCarousel";
import { projectsDescriptions as projects } from "./projectsDescription"
import Social from "@/components/Social";



const project = projects[0];

const TaskTrace = () => {
  return (
    <>
      <section className="mt-10 px-6">
        <h1 className="text-3xl text-accentColor">{project.title}</h1>
      <p className="mb-12 text-xl">{project.mainLanguage}</p>
        <MobileCarousel images={project.mobileImages} />
        <p className="mt-5">{project.description}</p>
        <div className="flex gap-2 mt-5 flex-wrap">
            {project.tools.map((tool, index) => {
              return (
                <p
                  key={index}
                  className=" rounded-lg bg-accentColor/70 px-2 py-1 text-center text-sm"
                >
                  {tool}
                  {}
                </p>
              );
            })} 
        </div>
        <div className="flex gap-8 mt-10 justify-center">
          <Social isLive={false} link={project.github} className="w-10 h-10"/>
          <Social isLive={true} link={project.live} className="w-10 h-10"/>
        </div>

      </section>
    </>
  )
}

export default TaskTrace