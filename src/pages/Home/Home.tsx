import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import WebHome from "./WebHome";
import MobileHome from "./MobileHome";
import BottomArrow from '../../assets/Icons/BottomArrow.svg'




function Home() {

  return (
    <>
      <section className="h-screen w-auto">
        <Header />
        <HeaderMobile />
        <div className="flex  h-4/5 flex-col justify-center ">
          <WebHome/>
          <MobileHome/>
        </div>
        <div className="flex items-center flex-col">
          <img src={BottomArrow} alt="" className=" w-20"/>
        </div>
      </section>
    </>
  );
}

export default Home;
