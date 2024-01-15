import ShuffleHero from '@/components/Hero'
import { projectsDescriptions as projects } from './projectsDescription'

const firstImages = projects.map((project) => {
  return project.images[0].src;
});

console.log(firstImages);
const GaleryProjects = () => {
  return (
    <section>
      <ShuffleHero squareData={firstImages} />
    </section>
  );
}

export default GaleryProjects