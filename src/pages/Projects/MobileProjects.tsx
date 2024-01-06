import { projectsDescriptions as projects } from "./projectsDescription";
import MobileCarousel from "@/components/MobileCarousel";
import ArrowRight from "@/components/ArrowRight";
import MainTitle from "@/components/MainTitle";


const MobileProjects = () => {
  return (
    <>
      <section id="mobileProjects" className=" h-min-screen md:hidden" >
      <MainTitle title="What I Did" />
        <div className="my-10 px-4 flex flex-col">
          {projects.map((project, index) => {
            return (
              <div key={index} className="mb-14" id={`mobileProjects${index}`}>
                <a href={`project/${project.id}`}>
                  <div className="flex items-center mb-3">
                    <h1 className="text-xl me-1"> {project.title}</h1>
                    <ArrowRight />
                  </div>
                    <MobileCarousel images={project.mobileImages} />
                  <div className="px-1">
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {project.homeTools.map((tool, index) => {
                        return (
                          <p
                            key={index}
                            className=" rounded-lg bg-myBlack/20 p-1 text-center text-sm"
                          >
                            {tool}
                            {}
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
      <div id="finalSession"></div>
    </>
  );
}

export default MobileProjects