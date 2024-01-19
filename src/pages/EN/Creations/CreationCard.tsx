import ArrowRight from "@/components/ArrowRight";
import Button from "@/components/Button";

type ProjectImage = {
  src: string; // Assuming src holds a string, you might need to adjust this based on the actual type of TaskTraceHomePage, etc.
  title: string;
  id: number;
}

type Project = {
  id: number;
  title: string;
  mainLanguage: string;
  description: string;
  tools: string[];
  images: ProjectImage[];
  mobileImages: string[]; // Assuming this is an array of strings, adjust if it's different.
  live: string | undefined;
  github: string;
}


type CreationCardProps = {
  project: Project
}

const CreationCard = ({ project }: CreationCardProps) => {

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-3xl me-2 relative text-accentColor uppercase dark:text-darkAccentColor xlg:text-6xl">{project.title}</h1>
        {project.live != undefined ? <a href={project.live} target="_blank"><ArrowRight /></a> : ""}

      </div>
        {project.live == undefined ? <p className="text-slate-600 dark:text-darkAccentColor/90 text-sm mb-2 xlg:text-3xl">In Progress</p>  : ""}
      <div>
        <div>
          <img className=" rounded-lg max-w-xl mt-3 mb-6 xlg:mb-12 xlg:mt-6 xlg:max-w-5xl" src={project.images[0].src} alt="" />
        </div>
        {project.tools && 
          project.tools.map((tool, index) => { 
            return (
              <span key={index} className="rounded border border-solid border-accentColor 
              px-2 py-1 font-semibold uppercase text-accentColor me-3 
              dark:text-darkAccentColor dark:border-darkAccentColor 
              xlg:text-2xl xlg:px-4 xlg:py-2">{tool}</span>
            )

          })}
        <p className="my-4 text-justify text-[.9rem] leading-6 xlg:my-8 xlg:leading-10 xlg:text-2xl">{project.description}</p>
        <Button source={project.github}/>
      </div>

    
    </>
  )
}

export default CreationCard