import Logo from '../../img/logo.png';
import ham from '../../img/hamburger.png';


const HeroSection = () => {
  return (
    <div className='bg-gray-800 w-full py-4 px-24 text-white'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-6 font-bold'>
          <img src={Logo} alt='Home page logo'/>
          <h1>MovieBox</h1>
        </div>
        <input className='bg-inherit border border-gray-300 py-2 px-3 rounded-md w-1/3' type="text" placeholder='What do you want to watch?' />
        <div className='flex items-center gap-8'>
          <p className='font-bold'>Sign in</p>
          <div>
            <img className=' bg-rose-700 p-1 w-9 h-9 rounded-full' src={ham} alt='Hamburger'/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeroSection;