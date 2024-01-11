import transition from '@/Transition'
import MobileContact from './MobileContact'
import WebContact from './WebContact'
import ArrowUp from '@/components/ArrowUp'
import Social from '@/components/Social'

const Contact = () => {
  return (
    <section
      id="howtofindme"
      className="scroll-mt-8 flex flex-col h-[90vh] justify-between lg:min-h-full lg:mt-10"
    >
      <MobileContact />
      <WebContact />
      <section className="relative flex justify-center lg:mt-20 ">
        <div className="flex">
          <Social
            link="https://github.com/alfredopsilva"
            isGitHub={true}
            className="h-14 w-14 fill-accentColor dark:fill-darkAccentColor"
          />
          <Social
            link="https://www.linkedin.com/in/alfredopsilva/"
            isGitHub={false}
            className="h-14 w-14 fill-accentColor dark:fill-darkAccentColor"
          />
          <ArrowUp href={"/"} />
        </div>
      </section>
    </section>
  );
}

export default transition(Contact);