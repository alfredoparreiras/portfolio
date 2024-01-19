import Icons from "@/components/Icons";
import Me from "../../../assets/IMG_1841.jpeg"
import { skills } from './skills';
import MainTitle from '@/components/MainTitle';


const Mobile = () => {
  return (
    <section className="relative -top-5 md:top-0 dark:text-offwhite lg:hidden">
      <MainTitle changeStyle={"w-full"} title="Journée" />
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
            Salut, je suis Alfredo, un Brésilien fier vivant actuellement dans la ville vibrante de Montréal. Je suis heureusement marié à Carol et profondément lié à ma foi chrétienne.
          </p>
          <p className="mb-3">
            En tant que développeur concentré, je suis enthousiasmé par l'exploration de nouvelles technologies et l'élargissement du champ de la découverte numérique. Vous pouvez trouver ma pile actuelle ci-dessous.
          </p>
          <p className="mb-3">
            Mais il y a plus en moi que la simple programmation ! Quand je ne travaille pas, j'aime lire, courir et explorer les univers de la cuisine et du café.
          </p>
          <p className="mb-3">
            Un fait original sur moi ? J'ai une collection croissante de tatouages.
          </p>
          <p className="mb-3 text-left">Bienvenue !</p>

          <div className="my-10 grid grid-cols-3 gap-8">
            {skills.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center">
                    <Icons skill={item} />
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

export default Mobile