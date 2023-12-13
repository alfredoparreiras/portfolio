import HeaderMain from "@/components/HeaderMain";
import HeaderMobile from "@/components/HeaderMobile";
import WebHome from "./WebHome";
import MobileHome from "./MobileHome";
import BottomArrow from '../../assets/Icons/BottomArrow.svg'
import { useSpring, animated } from "@react-spring/web";
import { backInOut, motion } from "framer-motion";




function Home() {
  
  
  const scale = useSpring({
    loop: { reverse: true }, 
    from: { transform: "scale(0.9)", opacity: .75 },
    to: { transform: "scale(1.1)", opacity: 1 },
    delay: 1000,
    config: { duration: 1000 },
  });

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: {
      duration: 3000,
      mass: 100,
      tension: 170,
      friction: 26,
    },
  });


  return (
    <>
      <section className="h-screen w-auto">

        <div className="flex h-5/6 flex-col justify-between ">
          <WebHome />
          <MobileHome />
          <animated.div className="flex flex-col items-center" style={fade}>
            <a href="#aboutme">
              <motion.img
                src={BottomArrow}
                alt=""
                className=" w-20"
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "360deg" }}
                exit={{ rotate: "0deg" }}
                transition={{
                  duration: 1,
                  type: backInOut,
                }}
              />
            </a>
          </animated.div>
        </div>
      </section>
    </>
  );
}

export default Home;
