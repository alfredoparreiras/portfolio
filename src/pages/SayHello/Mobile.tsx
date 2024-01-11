import Form from '@/components/Form';
import MainTitle from '@/components/MainTitle';




const Mobile = () => {
  return (
    <section className="xsm:mt-10 sm:mt-14 lg:hidden">
      <MainTitle title="Say Hello" />
      <div className="mx-2 flex flex-col items-center">
        <Form />
      </div>
    </section>
  );
}

export default Mobile
