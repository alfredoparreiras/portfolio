import MobileCarousel from "@/components/MobileCarousel";
import { projectsDescriptions as projects } from "./projectsDescription"
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


const Project = () => {
  const {id} = useParams(); 
  const project = projects[Number(id) - 1];
  
  const navigate = useNavigate();
  const scrollToProjects = () => {
    navigate('/');
    setTimeout(() => {
        const projectsSection = document.getElementById('finalSession');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);
};
  return (
    <>
      <section className="mt-10 px-6">
        <h1 className="text-3xl text-accentColor">{project.title}</h1>
        <a href={project.live} target="_blank" rel="noopener noreferrer" >
          <p className="mb-12 text-sky-600 font-semibold">{project.live.split('://')[1]}</p>
        </a>
        <MobileCarousel images={project.mobileImages} />
        <p className="text-xl mt-5">{project.mainLanguage}</p>
        <p  className="mt-5">{project.description}</p>
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

          <a href={project.github} target="_blank" rel="noopener noreferrer" >
              <p className="mt-14 bg-accentColor/80 text-white w-full text-center py-2 rounded-md">Repository</p>
          </a>
          <a onClick={scrollToProjects} >
              <p className="mt-4 bg-accentColor/40 text-white w-full text-center py-2 rounded-md">Projects</p>
          </a>


      </section>
    </>
  )
}

export default Project