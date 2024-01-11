import Mobile from "./HeaderMobile"
import Web from "./HeaderMain"


const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <Web/>
      <Mobile/>
    </header>
  )
}

export default Header