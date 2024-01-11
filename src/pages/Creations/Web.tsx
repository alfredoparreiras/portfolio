import MainTitle from "@/components/MainTitle"
import { projectsDescriptions as projects } from "./projectsDescription";
import ArrowRight from "@/components/ArrowRight";

const Web = () => {
  return (
    <section className="hidden lg:block">
      <MainTitle title="What I'm up to" />
        <div className="my-10 px-4 grid grid-cols-3 gap-8">
          
          {projects.map((project, index) => {
            return (
              <div key={index} className="mb-14" id={`mobileProjects${index}`}>
                <a href={`project/${project.id}`}>
                  <div className="flex items-center mb-3">
                    <h1 className="text-xl me-1"> {project.title}</h1>
                    <ArrowRight />
                  </div>
                  <div className="group relative inline-block">
                    <img
                      src={project.mobileImages[0]}
                      className="block w-full h-auto transition-opacity rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="px-1">
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {project.tools.map((tool, index) => {
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

export default Web