/* eslint-disable react/no-unescaped-entities */
import Logo from '../../img/logo.png';
import ham from '../../img/hamburger.png';
import imdb from '../../img/imdb.png';
import tomatoes from '../../img/tomatoes.png';
import play from '../../img/play.png';
import Background from '../../img/Poster.png'


const HeroSection = () => {
  return (
    <div className='h-[80vh] w-full bg-cover bg-no-repeat py-4 px-4 sm:px-12 lg:px-24 text-white' style={{backgroundImage: `url(${Background})`}}>
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
      <div className='flex flex-col gap-4 max-w-sm my-32'>
        <h1 className='text-5xl font-bold'>John Wick 3 : Parabellum</h1>
        <div className='flex gap-7'>
          <div className='text-xs flex gap-2 items-center'>
            <span><img src={imdb} alt="imdb icon" /></span>
            <span>86.0/100</span>
          </div>
          <div className='text-xs flex gap-2'>
            <span>97%</span>
            <span><img src={tomatoes} alt="tomatoes icon" /></span>
          </div>
        </div>
        <p className='text-sm font-medium max-w-xs'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <div className='bg-rose-700 px-4 py-2 rounded-md flex gap-2 items-center w-48'>
          <span><img src={play} alt="play icon" /></span>
          <span className='text-sm font-bold uppercase'>Watch trailer</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;