
type ButtonProps = {
  source: string
}

const Button = ({source}: ButtonProps) => {
  return (
    <button className="rounded-2xl border-2 border-solid border-accentColor dark:border-darkAccentColor
                        px-4 py-2 xlg:px-8 xlg:py-4  font-semibold uppercase text-accentColor  dark:text-darkAccentColor                       
                        transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]
                        hover:rounded-md hover:shadow-[4px_4px_0px_#24527A] dark:hover:shadow-[4px_4px_0px_#82e2c6] active:translate-x-[0px] 
                        active:translate-y-[0px] active:rounded-2xl active:shadow-none">
    <a href={source} target="_blank" className="xlg:text-2xl">Repository</a>                          
    </button>
  );
};

export default Button;