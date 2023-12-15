import { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import styles from "./home.module.css";
import React from "react";

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const WebHome = () => {
  const [open, set] = useState(true);
  return (
    <section className="flex px-12 flex-col justify-center h-4/5 text-left text-7xl sm:block xsm:hidden">
      <div className={styles.container} onClick={() => set((state) => !state)}>
        <Trail open={open}>
          <span>Hi, there!</span>
          <span>
            I'm Alfredo,
          </span>
          <span>a <span className="text-accentColor"> Software Developer</span></span>
          <span>
            Dedicate about <span className="text-accentColor">solving</span>
          </span>
          <span className="text-accentColor">
            problems <span className="text-black">through</span> <span className="text-accentColor">code</span>
          </span> 
          <span>
            I'm currently based in
          </span>
          <span className="text-accentColor">Montreal</span>
        </Trail>
      </div>
    </section>
  );
};

export default WebHome;
