import Icons from "@/components/Icons";
import Me from "../../../assets/IMG_1841.jpeg";
import { skills } from "./skills";
import MainTitle from "@/components/MainTitle";
import { useState } from "react";

const Mobile = () => {
  const savedTheme = localStorage.getItem("darkMode");

  let booleanSavedTheme;
  if (savedTheme === "true") booleanSavedTheme = true;
  else booleanSavedTheme = false;

  const [darkMode] = useState(booleanSavedTheme);
  return (
    <section className="relative -top-5 md:top-0 dark:text-offwhite lg:hidden">
      <MainTitle changeStyle={"w-full"} title="Journey" />
      <div className="flex flex-col items-center">
        <div className="mt-10 w-screen flex justify-center">
          <img
            src={Me}
            alt=""
            className=" w-3/5 grayscale hover:grayscale-0 transition duration-500 rounded-2xl"
          />
        </div>
        <div className="mt-10 flex flex-col text-justify text-lg">
          <p className="mb-3">
            Hi, I'm Alfredo, a proud Brazilian currently living in the vibrant
            city of Montreal. I'm happily married to Carol and deeply connected
            with my Christian faith.
          </p>
          <p className="mb-3">
            As a focused developer, my excitement lies in exploring new
            technologies and broadening the scope of digital discovery. You can
            find my actual stack below.
          </p>
          <p className="mb-3">
            But there's more to me than just coding! When I'm not working, I
            enjoy reading, running and exploring the worlds of cooking and
            coffee.
          </p>
          <p className="mb-3">
            A quirky fact about me? I have a growing collection of tattoos.
          </p>
          <p className="mb-3 text-left">Welcome!</p>
          <div className="my-10 grid grid-cols-3 gap-8">
            {skills.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center">
                    <Icons darkMode={darkMode} skill={item} />
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
};

export default Mobile;
