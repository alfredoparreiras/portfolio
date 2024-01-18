import MainTitle from "@/components/MainTitle"
import Me2 from "../../assets/IMG_1841.jpeg"
import { skills } from './skills';
import Icons from "@/components/Icons";



const Web = () => {
  return (
    <section className="hidden lg:block">
      <div className="flex w-full justify-evenly lg:pt-4">
        <div className=" w-[45%] xlg:w-[30%]">
          <MainTitle title="Journey" changeStyle="xlg:text-7xl" />
          <div className="text-[1.150rem] leading-9 
                            xlg:text-[1.5rem]">
            <p className="mb-3 mt-5">
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
          </div>
          <div className="grid lg:grid-cols-6 lg:gap-6 lg:mt-8 
                            xlg:mt-24
                            xxlg:gap-12
                            xxxlg:gap-20">
            {skills.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex flex-col items-center">
                    <Icons skill={item} />
                    <p className="text-base xxlg:text-[1.3rem] xxxlg:text-3xl">{item.name}</p>
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
}

export default Web