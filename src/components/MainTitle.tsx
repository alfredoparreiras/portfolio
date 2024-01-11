
type Props = {
  title: string, 
  changeStyle?: string
}

const MainTitle = (props: Props) => {
  return (
    <h1 className={props.changeStyle ? `text-5xl font-semibold mb-5 text-center uppercase text-accentColor ${props.changeStyle} dark:text-darkAccentColor` : `text-5xl font-semibold mb-5 text-accentColor dark:text-darkAccentColor`}>
      {props.title}
    </h1>
  )
}

export default MainTitle