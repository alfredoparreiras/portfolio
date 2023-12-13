import React from 'react'
import MobileAboutMe from './MobileAboutMe'
import { animated, useSpring } from '@react-spring/web';
import BottomArrow from "../../assets/Icons/BottomArrow.svg";
import { backInOut, motion } from "framer-motion";


const AboutMe = () => {
  const scale = useSpring({
    loop: { reverse: true },
    from: { transform: "scale(0.9)", opacity: 0.75 },
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
      <MobileAboutMe />
      <animated.div className="flex flex-col items-center" style={fade}>
        <a href="#contact">
          <motion.img
            src={BottomArrow}
            alt=""
            className=" w-20"
            initial={{rotate: '0deg'}}
            animate={{rotate: '360deg'}}
            exit={{rotate: '0deg'}}
            transition={{
              duration: 1, 
              type: backInOut
            }}
          />
        </a>
      </animated.div>
    </>
  );
}

export default AboutMe