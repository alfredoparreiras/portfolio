import WebHome from "./WebHome";
import MobileHome from "./MobileHome";
import transition from "@/Transition";




function Home() {
  return (
    <>
      <section id="home" className="">
        <WebHome />
        <MobileHome />
      </section>
    </>
  );
}

export default transition(Home);
