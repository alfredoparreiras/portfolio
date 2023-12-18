import { useEffect, useState } from "react";

type Skill = {
  name: string;
  imgUrl: string;
  DarkImgUrl: string;
};

type IconsProp = {
  skill: Skill
}

const Icons = ({skill}: IconsProp) => {
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => setDarkMode(event.matches);

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [])

  return (
          <img
            src={darkMode ? skill.DarkImgUrl : skill.imgUrl}
            alt={`${skill.name}' icons'`}
            className="max-w-icon"
          />
  )
}

export default Icons