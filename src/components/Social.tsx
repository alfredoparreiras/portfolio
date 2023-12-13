import GitHubIcon from "@/assets/Icons/GithubIcon.png"
import LiveIcon from "@/assets/Icons/LiveIcon.png"
type SocialProps = {
  isLive: boolean,
  link: string,
  className: string
}

const Social = ({isLive, link, className}: SocialProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}><img src={isLive ? LiveIcon : GitHubIcon  } alt="" /></a>
  )
}

export default Social