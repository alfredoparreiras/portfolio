
type Props = {
  title: string, 
  changeStyle?: string
}

const MainTitle = (props: Props) => {
  return (
    <h1 className={props.changeStyle ? `text-5xl font-semibold mb-5 text-accentColor ${props.changeStyle}` : `text-5xl font-semibold mb-5 text-accentColor `}>
      {props.title}
    </h1>
  )
}

export default MainTitle