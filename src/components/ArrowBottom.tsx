import BottomArrow from '@/assets/Icons/BottomArrow.svg'
import BottomArrowDark from '@/assets/Icons/BottomArrowDark.svg'
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
    <animated.div className="flex justify-center relative h-full" style={fade}>
      <a
        href={href}
        className="absolute bottom-2 transform -translate-x-1/2 left-1/2">
        <motion.img
          src={darkMode ? BottomArrowDark : BottomArrow}
          alt=""
          className="w-20"
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
  );
}

export default ArrowBottom