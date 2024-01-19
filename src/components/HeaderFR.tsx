import WebFR from "./HeaderMainFR";
import MobileFR from "./HeaderMobileFR";

type HeaderProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({language, setLanguage, darkMode, setDarkMode}: HeaderProps) => {
  return (
    <header className="xsm:sticky xsm:top-0 md:static z-50 dark:text-offwhite">
      <WebFR language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <MobileFR />
    </header>
  );
}

export default Header