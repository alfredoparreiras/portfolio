import Link from "./Link";

const Header = () => {
  return (
    <div className=" w-screen xsm:hidden sm:flex justify-between">
      <p className="font-JetBrains">{"{ AScode }"}</p>
      <div className="flex gap-3">
        <Link
          page={"Home"}
          className="text-xl text-myBlack hover:text-accentColor"
        />
        <Link
          page={"Projects"}
          className="text-xl text-myBlack hover:text-accentColor"
        />
        <Link
          page={"About Me"}
          className="text-xl text-myBlack hover:text-accentColor"
        />
        <Link
          page={"Contact"}
          className="text-xl text-myBlack hover:text-accentColor"
        />
      </div>
    </div>
  );
};

export default Header;
