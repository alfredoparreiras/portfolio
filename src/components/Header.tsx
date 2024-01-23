import Mobile from "./HeaderMobile";
import Web from "./HeaderMain";

type HeaderProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
}: HeaderProps) => {
  return (
    <header className="xsm:sticky antialiased xsm:top-0 md:static z-50 bg-offwhite dark:bg-darkBackground dark:text-offwhite">
      <Web
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Mobile language={language} setLanguage={setLanguage} />
    </header>
  );
};

export default Header;
