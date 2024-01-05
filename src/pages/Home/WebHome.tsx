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
    <section className="flex px-12 flex-col justify-center h-4/5 text-left text-7xl md:block xsm:hidden ">
      <div className={styles.container} onClick={() => set((state) => !state)}>
        <Trail open={open}>
          <span className="dark:text-offwhite">Hi, there!</span>
          <span className="dark:text-offwhite">
            I'm Alfredo,
          </span>
          <span className="dark:text-offwhite">a <span className="text-accentColor dark:text-darkAccentColor"> Software Developer</span></span>
          <span className="dark:text-offwhite">
            Dedicate about <span className="text-accentColor dark:text-darkAccentColor">solving</span>
          </span>
          <span className="text-accentColor dark:text-darkAccentColor">
            problems <span className="dark:text-offwhite">through</span> <span className="text-accentColor dark:text-darkAccentColor">code</span>
          </span> 
          <span className="dark:text-offwhite">
            I'm currently based in
          </span>
          <span className="text-accentColor dark:text-darkAccentColor">Montreal</span>
        </Trail>
      </div>
    </section>
  );
};

export default WebHome;
