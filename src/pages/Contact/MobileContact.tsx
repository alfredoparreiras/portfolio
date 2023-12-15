import Form from '@/components/Form';
import Social from '@/components/Social';
import MainTitle from '@/components/MainTitle';




const MobileContact = () => {
  return (
    <section className='md:hidden'>
    <MainTitle title='How To Find Me'/>
      <div className="mx-2 flex flex-col items-center">
        <Form />
      </div>
      <div className="flex mt-20 mb-10 items-center justify-center">
        <Social link='https://github.com/alfredoparreiras' isGitHub={true} className='h-16 w-16  fill-slate-600 hover:fill-accentColor'/>
        <Social link='https://www.linkedin.com/in/alfredopsilva/' className='h-16 w-16  fill-slate-600 hover:fill-accentColor'/>
      </div>
    </section>
  );
}

export default MobileContact
