import { useState } from "react";
import "./teste.css";
import { Link } from "react-router-dom";

const routes = [
  {
    title: "Home", href: "/" 
  },
  {
    title: "What I Did", href: "#whatidid"
  },
  {
    title: "Who Am I", href: "#whoami"
  },
  {
    title: "How to find me", href: "#howtofindme"
  },
];

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <header
      className={`w-full sticky top-0 flex items-center justify-between md:hidden`}
    >
      <Link to={"/"}>
        {" "}
        <p className="font-JetBrains text-lg font-semibold">{"{ AScode }"}</p>
      </Link>
      <nav>
        <p onClick={toggleMenu} className="">
          Menu
        </p>
      </nav>
      {isOpen && (
        <div className="fixed left-0 top-0 w-full h-screen p-10 bg-yellow-400 text-red-600">
          <div className="flex h-full flex-col">
            <div className="flex justify-between">
              <h1 className="text-lg text-red-600">AScode</h1>
              <p
                className="cursor-pointer text-md text-red-600"
                onClick={toggleMenu}
              >
                Close
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full justify-center items-center gap-4">
            {routes.map((link, index) => {
              return (
                // <Link href={link.href} dest={link.title} key={index}/>
                <p className="text-white" key={index}>
                  {link.title}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
