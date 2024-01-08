import BottomArrow from '@/assets/Icons/Arrows/ArrowDownLightMode.svg'
import BottomArrowDark from "@/assets/Icons/Arrows/ArrowDownDarkMode.svg";
import { useSpring, animated } from "@react-spring/web";
import { backInOut, motion } from "framer-motion";
import { useEffect, useState } from 'react';

type ArrowBottomProps = {
  href: string, 
}

function ArrowBottom({href}: ArrowBottomProps) {
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-colors-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => setDarkMode(event.matches); 

    mediaQuery.addEventListener('change', handleChange); 
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
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
    <animated.a
      href={href}
      className="absolute bottom-[4.5rem] right-8 lg:right-1/2 "
      style={fade}
    >
      <motion.img
        src={darkMode ? BottomArrowDark : BottomArrow}
        alt=""
        className="w-8"
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        exit={{ rotate: "0deg" }}
        transition={{
          duration: 1,
          type: backInOut,
        }}
      />
    </animated.a>
  );
}

export default ArrowBottom