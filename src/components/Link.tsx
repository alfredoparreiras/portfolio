// import "./Link.css"

type Props = {
  page: string,
  onClick?: () => void, 
  className: string

}

const Link = ({ page, onClick , className}: Props ) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, ""); 
  

  return (
    <a href={`#${lowerCasePage}`} className={`${className} link`} onClick={onClick}>
      {page}
    </a>
  )
}

export default Link