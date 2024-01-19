import { useState } from "react";
import ResumeButtom from "./ResumeButtom";
import SettingsButton from "./SettingsButton";

type WebFRProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebFR = ({language, setLanguage, darkMode, setDarkMode}: WebFRProps) => {
  const [settings, setSettings] = useState(false);

  const toggleSettings = () => {
    setSettings(!settings);
  }

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    // localStorage.setItem('userLanguage', lang);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <header
      className="xsm:hidden relative md:flex justify-between items-center ps-8 pe-4 py-5"
    >
      <a href="/">
        <p className="font-JetBrains">{"{ AScode }"}</p>
      </a>
      {/* <div className="flex w-1/2 items-center justify-between"> */}
      <nav className="flex gap-3 xlg:gap-4 xxlg:gap-5 xxxlg:gap-6 items-center text-base">
        <a
          href="/journey"
          className=" hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Journée
        </a>
        <a
          href="/creations"
          className=" hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Créations
        </a>
        <a
          href="/sayhello"
          className="me-3 hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Dites Bonjour
        </a>
        <a className="me-3 cursor-pointer" onClick={toggleSettings}><SettingsButton /></a>
        {settings &&
          <div className="flex flex-col border bg-accentColor/10 border-accentColor rounded-md justify-start items-center w-[175px] h-[85px] absolute top-[4.5rem] right-20">
            <div className="mb-2 mt-3">
              <button className="cursor-pointer" onClick={() => toggleLanguage('en')}>En</button> | <button className="cursor-pointer" onClick={() => toggleLanguage('fr')}>Fr</button>
            </div>
            <div>
              <button className="cursor-pointer" onClick={() => toggleDarkMode}>Light</button> | <button className="cursor-pointer" onClick={() => toggleDarkMode}>Dark</button>
            </div>
          </div>}
        <ResumeButtom />
      </nav>
      {/* </div> */}
    </header>
  );
};

export default WebFR;
