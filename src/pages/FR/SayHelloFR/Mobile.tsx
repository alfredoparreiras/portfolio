import FormFR from "@/components/FormFR";
import MainTitle from "@/components/MainTitle";

const Mobile = () => {
  return (
    <section className="xsm:mt-10 sm:mt-14 md:hidden">
      <MainTitle title="Dites Bonjour" />
      <div className="mx-2 flex flex-col items-center">
        <FormFR />
      </div>
    </section>
  );
};

export default Mobile;
