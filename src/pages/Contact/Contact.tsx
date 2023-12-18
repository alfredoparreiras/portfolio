import transition from '@/Transition'
import MobileContact from './MobileContact'
import WebContact from './WebContact'
import ArrowUp from '@/components/ArrowUp'
import Social from '@/components/Social'

const Contact = () => {
  return (
    <section id='howtofindme' className='px-12 lg:mt-10'>
      <MobileContact />
      <WebContact />
      <ArrowUp href={"/"}/>
      <section className="socialIcons flex justify-center lg:mt-10 ">
        <Social link='https://github.com/alfredoparreiras' isGitHub={true} className='h-16 w-16 fill-accentColor dark:fill-darkAccentColor'/>
        <Social link='https://www.linkedin.com/in/alfredopsilva/' isGitHub={false} className='h-16 w-16 fill-accentColor dark:fill-darkAccentColor'/>
      </section>
    </section>
  )
}

export default transition(Contact);