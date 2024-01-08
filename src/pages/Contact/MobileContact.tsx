import Form from '@/components/Form';
import MainTitle from '@/components/MainTitle';




const MobileContact = () => {
  return (
    <section className="xsm:mt-10 sm:mt-14 lg:hidden">
      <MainTitle title="How To Find Me" />
      <div className="mx-2 flex flex-col items-center">
        <Form />
      </div>
    </section>
  );
}

export default MobileContact
