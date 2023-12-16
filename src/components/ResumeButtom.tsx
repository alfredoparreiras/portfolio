import { IoDocumentOutline } from "react-icons/io5";

const ButtonWrapper = () => {
  return (

      <RoundedSlideButton />

  );
};

const RoundedSlideButton = () => {
  return (
    <button
      className={`
        relative text-sm z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-accentColor/80 px-4 py-2 font-semibold
        uppercase text-accentColor/80 transition-all duration-500
        dark:border-darkAccentColor/80 dark:text-darkAccentColor/80
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-accentColor/80
        before:transition-transform before:duration-1000
        before:content-[""]
        dark:before:bg-darkAccentColor/80

        hover:scale-110 hover:text-offwhite
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <IoDocumentOutline />
      <span>Resume</span>
    </button>
  );
};

export default ButtonWrapper;