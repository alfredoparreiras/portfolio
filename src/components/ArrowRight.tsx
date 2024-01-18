import RightArrow from '@/assets/Icons/Arrows/ArrowRightLightMode.svg'
import RightArrowDark from "@/assets/Icons/Arrows/ArrowRightDarkMode.svg";
import { useEffect, useState } from 'react';


function ArrowRight() {
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-colors-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => setDarkMode(event.matches); 

    mediaQuery.addEventListener('change', handleChange); 
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  

  return (
      <img
        src={darkMode ? RightArrowDark : RightArrow}
        alt=""
        className="w-4 ms-1 xlg:w-8 xlg:ms-2"
      />
  );
}

export default ArrowRight;