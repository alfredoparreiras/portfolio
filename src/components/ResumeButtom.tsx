import { IoDocumentOutline } from "react-icons/io5";
import CV from '@/assets/ALFREDO SILVA - RESUME.pdf'

const ButtonWrapper = () => {
  return (

      <RoundedSlideButton />

  );
};

const RoundedSlideButton = () => {
  return (
    <a href={CV} target="_blank">
      <button
        className={`
          relative text-sm  xlg:text-2xl xxlg:text-3xl xxxlg:text-5xl z-0 flex items-center gap-2 overflow-hidden rounded-lg xxlg:rounded-xl xxxlg:rounded-2xl border-[1px] xlg:border-[2px] xxlg:border-[3px] xxxlg:border-[4px]
          border-accentColor/80 
          px-4 py-2
          xlg:px-5 xlg:py-3  
          xxlg:px-7 xxlg:py-5 
          xxxlg:px-11 xxxlg:py-9
          font-semibold
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
        <span className="xxxlg:ms-2" >Resume</span>
      </button>
    </a>
  );
};

export default ButtonWrapper;