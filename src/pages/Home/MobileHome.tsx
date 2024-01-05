import { useSpring, animated } from "@react-spring/web";




const MobileHome = () => {

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { 
      duration: 3000, 
      mass: 100,
      tension: 170,
      friction: 26},
  });



  return (
    <animated.div className="text-left text-4.5xl leading-10 xsm:mt-10 md:hidden" style={fade}>
      <p>Hi, there!</p>
      <p className="mt-5">
        {" "}
        I'm Alfredo, a{" "}
        <span className="text-accentColor">Software Developer</span>
      </p>
      <p className="mt-5">
        {" "}
        Dedicate about <span className="text-accentColor">solving problems</span> through{" "}
        <span className="text-accentColor">code</span>
      </p>
      <p className="mt-5">
        {" "}
        I'm currently based in{" "}
        <span className="text-accentColor">Montreal</span>.
      </p>
    </animated.div>
  );
}

export default MobileHome