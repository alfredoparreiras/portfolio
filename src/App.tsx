import { useState, useEffect } from "react";
import English from "./pages/English";
import French from "./pages/French";

function App() {
  // Inicializa o estado do idioma com a preferência salva ou o idioma do navegador
  const [language, setLanguage] = useState(localStorage.getItem('userLanguage') || navigator.language);

  // Inicializa o estado do modo escuro com a preferência do sistema
  const savedDarkMode = localStorage.getItem('darkMode');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : prefersDarkMode;

  const [darkMode, setDarkMode] = useState(initialDarkMode);

  // Extrai o código de idioma de duas letras
  const favoriteLanguage = language.slice(0, 2);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Efeito colateral para atualizar o localStorage quando o idioma muda
  useEffect(() => {
    localStorage.setItem('userLanguage', language);
  }, [language]);

  // Efeito colateral para lidar com mudanças na preferência de esquema de cores do sistema
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  console.log("🚀 ~ App ~ darkMode:", darkMode)

  return (
    <>
      {favoriteLanguage === "fr" ?
        <French
          language={favoriteLanguage}
          setLanguage={setLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        /> :
        <English
          language={favoriteLanguage}
          setLanguage={setLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      }
    </>
  );
}

export default App;
