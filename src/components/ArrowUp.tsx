import UpArrow from '@/assets/Icons/UpArrow.svg'
import { useSpring, animated } from "@react-spring/web";
import { backInOut, motion } from "framer-motion";

type ArrowBottomProps = {
  href: string, 
}

function ArrowUp({href}: ArrowBottomProps) {
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
    <animated.div className="flex flex-col items-center" style={fade}>
            <a href={href}>
              <motion.img
                src={UpArrow}
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
  )
}

export default ArrowUp