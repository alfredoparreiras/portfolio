

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
  projectId: number,
  projects: Project[]
}

const CreationCard = ({ projectId, projects }: CreationCardProps) => {
  return (
    <>
      <div>{projects[projectId - 1].title}</div>
      <div>{projects[projectId - 1].description}</div>
    </>
  )
}

export default CreationCard