import { useState } from 'react';
import { projectsDescriptions as projects } from './projectsDescription'
import MainTitle from '@/components/MainTitle';
import CreationCard from './CreationCard';

const GaleryProjects = () => {
  const [projectId, setProjectId] = useState(1); 
  
  return (
    <section className=' hidden lg:flex justify-center items-center'>
      <section className='flex justify-evenly'>
          <div className='flex flex-col justify-center w-1/3'>
      <MainTitle title='Creations' changeStyle='xlg:text-8xl'/>
            {projects.map((project,index ) => {
              return (
                <div key={index} className='' >
                  <a 
                    className=' cursor-pointer' 
                    onClick={() => { 
                    setProjectId(Number(project.id))
                  }}>
                    <h1  className=' text-2xl text-accentColor dark:text-darkAccentColor
                                      font-semibold uppercase 
                                      xlg:text-4xl xlg:leading-[5rem]
                                       hover:text-offwhite duration-500'>
                                          {project.title}
                                        </h1>
                  </a>
                </div>
              )
            })}
          </div>
        <div className='p-5 w-[45%]'>
          <CreationCard project={projects[projectId - 1]} />
        </div>
      </section>
    </section>
  );
}

export default GaleryProjects

