import Link from './Link'

const Header = () => {

  return (
    <div className='flex justify-between w-full xsm:hidden'>
      <p className="font-JetBrains">{"{ AScode }"}</p>
      <div className='gap-3 flex'>
        <Link page={'Home'}/>
        <Link page={'Projects'}/>
        <Link page={'About Me'}/>
        <Link page={'Contact'}/>
      </div>
    </div>
  )
}

export default Header