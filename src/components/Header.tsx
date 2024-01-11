import HeaderMobile from "./HeaderMobile"
import HeaderMain from "./HeaderMain"


const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <HeaderMain/>
      <HeaderMobile/>
    </header>
  )
}

export default Header