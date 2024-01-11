import transition from '@/Transition';
import MobileAboutMe from './MobileAboutMe'
import WebAboutMe from './WebAboutMe';


const AboutMe = () => {
  return (
    <section id="whoami" className="scroll-mt-28 lg:pt-10 ">
      <MobileAboutMe />
      <WebAboutMe />
    </section>
  );
}

export default transition(AboutMe)