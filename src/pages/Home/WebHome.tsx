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
    <div className="text-left xsm:hidden sm:block">
      <div className={styles.container} onClick={() => set((state) => !state)}>
        <Trail open={open}>
          <span>Hi, there!</span>
          <span>
            I'm Alfredo, a{" "}
            <span className="text-accentColor">Software Developer</span>
          </span>
          <span>
            Passionate about <span className="text-accentColor">code</span> and{" "}
          </span>
          <span className="text-accentColor">solving problems</span>
          <span>
            I'm currently based in{" "}
            <span className="text-accentColor">Montreal</span>.
          </span>
        </Trail>
      </div>
    </div>
  );
};

export default WebHome;
