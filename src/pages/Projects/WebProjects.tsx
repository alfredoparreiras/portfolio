import MainTitle from "@/components/MainTitle"
import { projectsDescriptions as projects } from "./projectsDescription";
import TopRigthArrow from "@/assets/Icons/ArrowTopRight.svg"

const WebProjects = () => {
  return (
    <section className="">
      <MainTitle title="What I Did" />
        <div className="my-10 px-4 grid grid-cols-3 gap-8">
          
          {projects.map((project, index) => {
            return (
              <div key={index} className="mb-14" id={`mobileProjects${index}`}>
                <a href={`project/${project.id}`}>
                  <div className="flex items-center mb-3">
                    <h1 className="text-xl me-1"> {project.title}</h1>
                    <img src={TopRigthArrow} alt="" className="w-3 h-3" />
                  </div>
                  <div className="group relative inline-block">
                    <img
                      src={project.mobileImages[0]}
                      className="block w-full h-auto transition-opacity rounded-xl"
                      alt=""
                    />
                    <div className="overlay absolute inset-0 bg-accentColor/50 dark:bg-darkAccentColor/50 transition-opacity group-hover:opacity-0 duration-700 rounded-xl"></div>
                  </div>
                  <div className="px-1">
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {project.homeTools.map((tool, index) => {
                        return (
                          <p
                            key={index}
                            className=" rounded-xl bg-accentColor/30 dark:bg-darkAccentColor/90 p-1 text-center text-sm"
                          >
                            {tool}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}


        </div>
    </section>
  )
}

export default WebProjects