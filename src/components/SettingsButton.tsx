import  { useEffect, useState } from 'react'
import SettingLight from "@/assets/Icons/settings.svg"
import SettingDark from "@/assets/Icons/settingsDark.svg"

const SettingsButton = () => {
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-colors-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => setDarkMode(event.matches); 

    mediaQuery.addEventListener('change', handleChange); 
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  

  return (
      <img
        src={darkMode ? SettingDark : SettingLight}
        alt=""
        className="w-8"
      />
  );
}    

export default SettingsButton