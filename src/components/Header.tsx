import Mobile from "./HeaderMobile"
import Web from "./HeaderMain"


const Header = () => {
  return (
    <header className="xsm:sticky xsm:top-0 md:static z-50">
      <Web />
      <Mobile />
    </header>
  );
}

export default Header