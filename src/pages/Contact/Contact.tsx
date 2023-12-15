import transition from '@/Transition'
import MobileContact from './MobileContact'
import WebContact from './WebContact'
import ArrowUp from '@/components/ArrowUp'

const Contact = () => {
  return (
    <section id='howtofindme' className='px-12 lg:mt-10'>
      <MobileContact />
      <WebContact />
      <ArrowUp href={"/"}/>
    </section>
  )
}

export default transition(Contact);