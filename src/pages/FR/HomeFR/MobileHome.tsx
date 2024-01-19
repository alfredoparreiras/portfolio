import { motion } from "framer-motion";

const MobileHome = () => {

  const incomeAnimation = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="open"
      exit="exit"
      className="min-h-90 text-left text-3xl sm:text-4xl md:hidden dark:text-offwhite"
    >
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation}>Salut!</motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation} className="mt-5">
          {" "}
          Je suis Alfredo, un{" "}
          <span className="text-accentColor dark:text-darkAccentColor">
            développeur de logiciels
          </span>
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation} className="mt-5">
          {" "}
          Passioné par la{" "}
          <span className="text-accentColor dark:text-darkAccentColor">
            résolution de problème
          </span>{" "}
          par le{" "}
          <span className="text-accentColor dark:text-darkAccentColor">code</span>
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p variants={incomeAnimation} className="mt-5">
          {" "}
          Je suis actuellement basé à{" "}
          <span className="text-accentColor dark:text-darkAccentColor">
            Montreal
          </span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MobileHome;
