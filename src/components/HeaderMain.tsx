import Link from "./Link";

const HeaderMain = () => {
  return (
    <div className="xsm:hidden sm:flex md:flex justify-between">
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

export default HeaderMain;
