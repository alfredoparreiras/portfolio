import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string,
  onClick?: () => void, 

}

const Link = ({ page, onClick }: Props ) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, ""); 
  

  return (
    <AnchorLink href={`#${lowerCasePage}`} className="hover:text-accentColor duration-700 menu-item" onClick={onClick}>
      {page}
    </AnchorLink>
  )
}

export default Link