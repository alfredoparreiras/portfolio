// import "./Link.css"
import { Link as RouterLink } from "react-router-dom";

type Props = {
  href: string,
  className?: string,
  dest: string

}

const Link = ({ href , className, dest}: Props ) => {  

  return (
    <div className="text-4xl uppercase text-red-400">
      <RouterLink to={href} className={className}>
        {dest}
      </RouterLink>
    </div>
  )
}

export default Link