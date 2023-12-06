import { useState } from 'react';
import Link from './Link'
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@/assets/Menu Icon.svg"
import CloseIcon from "@/assets/Close.svg"
import "@/components/HeaderMobile.css"

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => setOpen(!isOpen)
  const closeSideBar = () => setOpen(false);

  return (
    // <div className='flex justify-between w-full items-center '>
    //   <p className="font-JetBrains">{"{ AScode }"}</p>
        <Menu 
          isOpen={isOpen} 
          onOpen={handleIsOpen} 
          onClose={handleIsOpen}
          customBurgerIcon={<img src={MenuIcon}/>}
          customCrossIcon={<img src={CloseIcon}/>}
          right>
          <a id="home" onClick={closeSideBar} className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
            {/* <Link page={'Home'} onClick={closeSideBar}/>
            <Link page={'Projects'} onClick={closeSideBar}/>
            <Link page={'About Me'} onClick={closeSideBar}/>
            <Link page={'Contact'} onClick={closeSideBar}/> */}
        </Menu>
      // </div>

  )
}

export default HeaderMobile