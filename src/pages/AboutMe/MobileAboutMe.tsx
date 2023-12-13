import React from 'react'
import Me from "../../assets/me.jpeg"
import { skills } from './skills';


const MobileAboutMe = () => {
  return (
    <section id="aboutme" className="px-12">
      <h1 className="py-5 text-end text-6xl font-semibold text-accentColor ">
        About Me
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-screen">
          <img src={Me} alt="" className="" />
        </div>
        <div className="mt-10 flex flex-col items-center text-justify text-lg ">
          <p className="mb-3">
            Hi, I'm Alfredo, a proud Brazilian of 33 years, currently living in
            the vibrant city of Montreal. I'm happily married and deeply rooted
            in my Christian faith, which guides me in my daily life.
          </p>
          <p className="mb-3">
            As a passionate software developer, I thrive on exploring new
            technologies and pushing the boundaries of digital innovation.
          </p>
          <p className="mb-3">
            But there's more to me than just coding! I also love being outdoors,
            especially running and cycling. When I'm not working, I enjoy
            reading, and exploring the world of cooking and coffee.
          </p>
          <p className="mb-3">
            A quirky fact about me? I have a growing collection of tattoos and
            pens, each with its own story and significance.
          </p>
          <p className="mb-3">
            Here, I share my journey - a blend of code, coffee, and creativity.
            Dive in to discover more!
          </p>
          <h2 className="mb-5 pt-5 text-left text-3xl font-medium text-accentColor">
            Skills
          </h2>
          <div className="mb-10 grid grid-cols-3 gap-4">
            {skills.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center">
                    <img
                      src={item.imgUrl}
                      alt={`${item.name}' icons'`}
                      className="max-w-icon"
                    />
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAboutMe