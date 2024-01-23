import MainTitle from "@/components/MainTitle";
import Me2 from "../../../assets/IMG_1841.jpeg";
import { skills } from "./skills";
import Icons from "@/components/Icons";
import { useState } from "react";

const Web = () => {
  const savedTheme = localStorage.getItem("darkMode");

  let booleanSavedTheme;
  if (savedTheme === "true") booleanSavedTheme = true;
  else booleanSavedTheme = false;

  const [darkMode] = useState(booleanSavedTheme);

  return (
    <section className="hidden lg:block">
      <div className="flex w-full justify-evenly lg:pt-4">
        <div className=" w-[45%] xlg:w-[30%]">
          <MainTitle title="Journée" changeStyle="xlg:text-7xl" />
          <div
            className="text-[1.1rem] leading-8
                            xlg:text-[1.5rem]"
          >
            <p className="mb-3a mt-5">
              Salut! Je suis Alfredo, un Brésilien fier vivant actuellement dans
              la ville dynamique de Montréal. Je suis heureusement marié à Carol
              et profondément connecté à ma foi chrétienne.
            </p>
            <p className="mb-3">
              En tant que développeur concentré, mon enthousiasme réside dans
              l'exploration de nouvelles technologies et l'élargissement du
              champ de la découverte numérique. Vous pouvez trouver ma pile
              actuelle ci-dessous.
            </p>
            <p className="mb-3">
              Mais il y a plus en moi que le simple codage ! Quand je ne
              travaille pas, j'aime lire, courir et explorer les mondes de la
              cuisine et du café.
            </p>
            <p className="mb-3">
              Un fait insolite sur moi ? Je possède une collection croissante de
              tatouages.
            </p>
            <p className="mb-3 text-left">Bienvenue !</p>
          </div>
          <div
            className="grid lg:grid-cols-6 lg:gap-6 lg:mt-8
                            xlg:mt-24
                            xxlg:gap-12
                            xxxlg:gap-20"
          >
            {skills.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center">
                    <Icons darkMode={darkMode} skill={item} />
                    <p className="text-base xxlg:text-[1.3rem] xxxlg:text-3xl">
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="">
            <img
              src={Me2}
              alt="Alfredo's Photo"
              className="max-w-[470px] rounded-xl
                          xlg:max-w-[570px]
                          xxlg:max-w-[620px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web;
