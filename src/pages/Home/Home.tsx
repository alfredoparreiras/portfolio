import WebHome from "./WebHome";
import MobileHome from "./MobileHome";
import transition from "@/Transition";
import ArrowBottom from "@/components/ArrowBottom";




function Home() {
  return (
    <>
      <section id="home" className="relative pb-32 md:pt-20 lg:pt-16">
        <WebHome />
        <MobileHome />
        <ArrowBottom href="/whoami" />
      </section>
    </>
  );
}

export default transition(Home);
