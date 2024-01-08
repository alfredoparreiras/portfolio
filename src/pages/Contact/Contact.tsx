import transition from '@/Transition'
import MobileContact from './MobileContact'
import WebContact from './WebContact'
import ArrowUp from '@/components/ArrowUp'
import Social from '@/components/Social'

const Contact = () => {
  return (
    <section id='howtofindme' className='min-h-[760px] lg:mt-10'>
      <MobileContact />
      <WebContact />
      <section className="socialIcons flex justify-start lg:mt-20 ">
        <ArrowUp href={"/"}/>
        <div className='flex absolute bottom-10'>
          <Social link='https://github.com/alfredoparreiras' isGitHub={true} className='h-14 w-14 fill-accentColor dark:fill-darkAccentColor'/>
          <Social link='https://www.linkedin.com/in/alfredopsilva/' isGitHub={false} className='h-14 w-14 fill-accentColor dark:fill-darkAccentColor'/>
        </div>
      </section>
    </section>
  )
}

export default transition(Contact);