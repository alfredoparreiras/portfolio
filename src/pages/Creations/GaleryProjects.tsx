import { useState } from 'react';
import { projectsDescriptions as projects } from './projectsDescription'
import MainTitle from '@/components/MainTitle';
import CreationCard from './CreationCard';

const GaleryProjects = () => {
  const [project, setProject] = useState(1); 
  console.log("🚀 ~ GaleryProjects ~ project:", project)
  return (
    <section className='min-h-80 lg:mt-8'>
      <MainTitle title='Creations'/>
      <section className='flex justify-evenly mt-16 min-h-[50vh]'>
          <div className='flex flex-col w-1/3'>
            {projects.map((project,index ) => {
              return (
                <div key={index} className='' >
                  <a 
                    className=' cursor-pointer' 
                    onClick={() => { 
                    setProject(Number(project.id))
                  }}>
                    <h1  className=' text-2xl text-accentColor font-semibold uppercase'>{project.title}</h1>
                  </a>
                </div>
              )
            })}
          </div>
        <div className='bg-red-300 w-[45%]'>
          <CreationCard projects={projects} projectId={project} />
        </div>
      </section>
    </section>
  );
}

export default GaleryProjects

