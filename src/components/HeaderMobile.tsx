import { useEffect, useState } from "react";
import "./teste.css";

const routes = [
  {
    title: "Home", href: "" 
  },
  {
    title: "My Work", href: "#projects"
  },
  {
    title: "Who Am I", href: "#whoami"
  },
  {
    title: "Get in touch", href: "#getintouch"
  },
];

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <header
      className={`mobile-header h-mobileHeaderVh w-full px-12 sticky top-0 flex items-center justify-between sm:hidden md:hidden`}
    >
      <p className="font-JetBrains text-lg font-semibold">{"{ AScode }"}</p>
      <nav>
        <p onClick={toggleMenu}>Menu</p>
      </nav>
      {isOpen && <div className="fixed left-0 top-0 w-full h-screen p-10 bg-yellow-400 text-red-600">
        <div className="flex h-full flex-col">
          <div className="flex justify-between">
            <h1 className="text-lg text-red-600">AScode</h1>
            <p className="cursor-pointer text-md text-red-600" onClick={toggleMenu}>Close</p>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center items-center gap-4">
          {routes.map((link,index) => {
            return(
                // <Link href={link.href} dest={link.title} key={index}/>
                <p className="text-white" key={index}>{link.title}</p>
              
            )
          })}
        </div>
      </div>}
    </header>
  );
};

export default HeaderMobile;
