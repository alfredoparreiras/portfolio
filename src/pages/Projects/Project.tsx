
import { projectsDescriptions as projects } from "./projectsDescription"

import { useParams } from "react-router-dom";
import ShuffleHero from "@/components/Hero";


const Project = () => {
  const {id} = useParams(); 
  const project = projects[Number(id) - 1];

  return (
    <>
      <section className="lg:mt-10 lg:pb-10 px-6">
        <h1 className="text-3xl text-accentColor dark:text-darkAccentColor">{project.title}</h1>
        {project?.live?.toLowerCase() !== undefined && <a href={project.live} target="_blank" rel="noopener noreferrer" >
          <p className="mb-12 text-sky-600 font-semibold dark:text-darkAccentColor">{project?.live.split('://')[1]}</p>
        </a>}
        <ShuffleHero squareData={project.images} />
        <p className="text-accentColor  dark:text-darkAccentColor text-xl mt-5">{project.mainLanguage}</p>
        <p  className="mt-5">{project.description}</p>
        {project.contributors && 
          <div className="contributors">
            <h4 className="text-accentColor  dark:text-darkAccentColor text-xl mt-5">Contributors</h4>
            <ul>
            {project.contributors.map((name, index)=> {
              return (
                  <li key={index}>{name}</li>
                )
            })}
            </ul>
            </div>}
        <div className="flex gap-4 mt-8 flex-wrap">
            {project.tools.map((tool, index) => {
              return (
                <p
                  key={index}
                  className=" rounded-lg bg-accentColor/70 px-3 py-2 text-center text-sm  dark:bg-darkAccentColor dark:text-darkBackground"
                >
                  {tool}
                  {}
                </p>
              );
            })} 
        </div>
        <div className="lg:flex lg:w-full lg:items-center lg:mt-14 lg:gap-6">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className=" w-full lg:w-1/4">
                <p className=" bg-accentColor/80 text-white text-center py-2 lg:py-3 rounded-md dark:bg-darkAccentColor dark:text-darkBackground">Repository</p>
            </a>
            <a href="/whatidid" className="w-full lg:w-1/4" >
                <p className=" bg-accentColor/80 text-white text-center py-2 lg:py-3 rounded-md  dark:bg-darkAccentColor dark:text-darkBackground">Projects</p>
            </a>
        </div>
      </section>
    </>
  )
}

export default Project