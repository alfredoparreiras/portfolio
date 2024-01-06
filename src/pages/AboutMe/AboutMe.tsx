import transition from '@/Transition';
import MobileAboutMe from './MobileAboutMe'
import WebAboutMe from './WebAboutMe';
import ArrowBottom from '@/components/ArrowBottom';


const AboutMe = () => {
  return (
      <section id='whoami' className=' relative px-12 lg:pt-10 '>
        <MobileAboutMe />
        <WebAboutMe />
        <ArrowBottom href="/whatidid"/>
      </section>
  );
}

export default transition(AboutMe)