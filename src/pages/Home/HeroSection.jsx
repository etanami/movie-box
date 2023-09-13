/* eslint-disable react/no-unescaped-entities */
import Logo from "../../img/logo.png";
import ham from "../../img/hamburger.png";
import imdb from "../../img/imdb.png";
import tomatoes from "../../img/tomatoes.png";
import play from "../../img/play.png";
import Background from "../../img/Poster.png";

const HeroSection = () => {
  return (
    <div
      className="h-[600px] md:h-[80vh] w-full bg-center bg-cover bg-no-repeat flex flex-col justify-center px-4 sm:px-12 lg:px-24 text-white relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <nav className="flex justify-between items-center pt-4 px-4 md:px-16 absolute top-0 left-0 w-full">
        <div className="flex items-center gap-6 font-bold">
          <img src={Logo} alt="Home page logo" />
          <h1>MovieBox</h1>
        </div>
        <div className="w-1/3 hidden lg:block relative">
          <input
            className="bg-inherit border border-gray-300 py-2 px-3 rounded-md w-full"
            type="text"
            placeholder="What do you want to watch?"
          />
          <svg
            className="absolute top-2 right-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-8">
          <p className="font-bold">Sign in</p>
          <div>
            <img
              className=" bg-rose-700 p-1 w-9 h-9 rounded-full"
              src={ham}
              alt="Hamburger"
            />
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-4 max-w-sm py-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          John Wick 3 : Parabellum
        </h1>
        <div className="flex gap-7 text-xs md:text-xl">
          <div className=" flex gap-2 items-center">
            <span>
              <img src={imdb} alt="imdb icon" />
            </span>
            <span>86.0/100</span>
          </div>
          <div className="flex gap-2">
            <span>97%</span>
            <span>
              <img src={tomatoes} alt="tomatoes icon" />
            </span>
          </div>
        </div>
        <p className="text-sm md:text-xl  font-medium max-w-xs">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <div className="bg-rose-700 px-4 py-2 rounded-md flex gap-2 items-center w-48">
          <span>
            <img src={play} alt="play icon" />
          </span>
          <span className="text-sm font-bold uppercase">Watch trailer</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
