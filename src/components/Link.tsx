import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string,

}

const Link = ({ page }: Props ) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, ""); 
  

  return (
    <AnchorLink href={`#${lowerCasePage}`} className="hover:text-accentColor duration-700">
      {page}
    </AnchorLink>
  )
}

export default Link