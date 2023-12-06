import Header from "@/components/Header"
import HeaderMobile from "@/components/HeaderMobile"
import { useState } from "react"
import { useTrail, a } from '@react-spring/web'
import React from "react"

import styles from "./home.module.css"

const Trail: React.FC<{ open: boolean, children: React.ReactNode }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

function Home() {
  const [open, set] = useState(true)
  return (
    <>
      <section className="h-screen relative">
        <Header />
        <HeaderMobile/>
        
        <div className="flex flex-col h-5/6 justify-center ">
          <div className="text-left">
            <div className={styles.container} onClick={() => set(state => !state)}>
              <Trail open={open}>
                <span>Hi, there!</span>
                <span>I'm Alfredo, a <span className="text-accentColor">Software Developer</span></span>
                <span>Passionate about <span className="text-accentColor">code</span> and </span>
                <span className="text-accentColor">solving problems</span>
                <span>I'm currently based in <span className="text-accentColor">Montreal</span>.</span>
              </Trail>
            </div>
          </div>
        </div>

        <p className="text-2xl inset-x-0 absolute bottom-24">Projects</p>

      </section>
    </>
  )
}

export default Home