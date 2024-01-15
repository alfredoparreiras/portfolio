import ResumeButtom from "./ResumeButtom";

const Web = () => {
  return (
    <header
      className="xsm:hidden md:flex justify-between items-center ps-8 pe-4 py-5
                        xlg:text-2xl xlg:pe-6 xlg:ps-10 xlg:py-
                        xxlg:text-3xl xxlg:py-10 xxlg:ps-16 xxlg:pe-10 
                        xxxlg:text-5xl xxxlg:ps-24 xxxlg:pe-16 xxxlg:py-18 "
    >
      <a href="/"> 
        <p className="font-JetBrains">{"{ AScode }"}</p>
      </a>
      <nav className="flex gap-3 xlg:gap-4 xxlg:gap-5 xxxlg:gap-6 items-center text-base xlg:text-2xl xxlg:text-3xl xxxlg:text-5xl">
        <a
          href="/journey"
          className=" hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Journey
        </a>
        <a
          href="/creations"
          className=" hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Creations
        </a>
        <a
          href="/sayhello"
          className="me-3 hover:text-accentColor dark:hover:text-darkAccentColor"
        >
          Say Hello
        </a>
        <ResumeButtom />
      </nav>
    </header>
  );
};

export default Web;
