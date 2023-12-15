import MainTitle from "@/components/MainTitle"
import { projectsDescriptions as projects } from "./projectsDescription";
import TopRigthArrow from "@/assets/Icons/ArrowTopRight.svg"
import MobileCarousel from "@/components/MobileCarousel";


const HomeProjects = () => {
  return (
    <section className="">
      <MainTitle title="What I Did" />
        <div className="my-10 px-4 grid grid-cols-3 gap-12">
          {projects.map((project, index) => {
            return (
              <div key={index} className="mb-14" id={`mobileProjects${index}`}>
                <a href={`project/${project.id}`}>
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
  )
}

export default HomeProjects