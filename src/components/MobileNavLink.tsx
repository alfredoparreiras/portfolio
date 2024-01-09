import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type MobileNavLinkProps = {
  title: string, 
  href: string, 
  onClick: ()=> void; 
}

const mobileLinkVars = {
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

const MobileNavLink = ({title, href, onClick}: MobileNavLinkProps) => {
  return (
    <motion.div variants={mobileLinkVars}>
      <Link to={href} onClick={onClick}>
        {title}
      </Link>
    </motion.div>
  )
}

export default MobileNavLink