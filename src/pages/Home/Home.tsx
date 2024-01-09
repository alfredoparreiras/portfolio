import WebHome from "./WebHome";
import MobileHome from "./MobileHome";
import transition from "@/Transition";
import ArrowBottom from "@/components/ArrowBottom";




function Home() {
  return (
    <>
      <section id="home" className="relative">
        <WebHome />
        <MobileHome />
        <ArrowBottom href="/whoami" />
      </section>
    </>
  );
}

export default transition(Home);
