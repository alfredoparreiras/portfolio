import { projectsDescriptions as projects } from "./projectsDescription";
import MobileCarousel from "@/components/MobileCarousel";
import TopRigthArrow from "@/assets/Icons/ArrowTopRight.svg"


const MobileProjects = () => {
  return (
    <>
      <section id="projects" className="mt-16 h-screen ">
        <h1 className="px-12 text-end py-5 text-6xl font-semibold text-accentColor ">
          Projects
        </h1>
        <div className="mb-10 px-4 flex flex-col">
          {projects.map((project, index) => {
            return (
              <div key={index} className="mb-14">
                <a href={`project/${project.title.toLowerCase().replace(/ /g, "")}`}>
                  <div className="flex items-center mb-3">
                    <h1 className="text-xl me-1"> {project.title}</h1>
                    <img src={TopRigthArrow} alt="" className="w-3 h-3" />
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
    </>
  );
}

export default MobileProjects