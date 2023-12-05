import Link from './Link'


const NavBar = () => {
  return (
    <div className='flex justify-between w-full'>
      <p className="font-JetBrains">{"{ AScode }"}</p>
      <div className='flex gap-3'>
        <Link page={'Home'}/>
        <Link page={'Projects'}/>
        <Link page={'About Me'}/>
        <Link page={'Contact'}/>
      </div>
    </div>
  )
}

export default NavBar