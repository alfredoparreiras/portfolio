import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./teste.css";
import Link from "./Link";

const routes = [
  {
    title: "Home",
  },
  {
    title: "Projects",
  },
  {
    title: "About Me",
  },
  {
    title: "Contact",
  },
];

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { 
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll); 

    return ()=> window.removeEventListener("scroll",handleScroll)
  }, []);

  return (
    <div
      className={`mobile-header px-12 py-3 sticky top-0 flex items-center justify-between sm:hidden md:hidden ${isScrolled ? 'bg-accentColor text-white z-50' : ''}`}
    >
      <p className="font-JetBrains text-lg font-semibold">{"{ AScode }"}</p>
      <div id="page-wrap">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        {isOpen && (
          <div className="fixed left-0 right-0 z-10 h-full bg-myBlack p-5 pt-0">
            <ul className="mt-5 grid gap-2">
              {routes.map((route, index) => {
                return (
                  <li key={index} className=" ">
                    <Link
                      page={route.title}
                      className="text-xl text-offwhite hover:text-accentColor"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
