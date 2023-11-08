/* eslint-disable react/no-unescaped-entities */
import Logo from "../../img/logo.png";
//import ham from "../../img/hamburger.png";
import imdb from "../../img/imdb.png";
import tomatoes from "../../img/tomatoes.png";
import play from "../../img/play.png";
import Background from "../../img/Poster.png";
import useFetch from "../../hooks/useFetch";
import ReactPlayer from "react-player/youtube";
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from "react";
import { convertRating } from "../../components/ConvertRating";

const SearchIcon = () => {
  return (
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
  );
};

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { data: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/458156?&append_to_response=videos&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const watchTrailer = () => {
    setIsLoading(true)
    setIsPlaying(true)
  }

  //const movie = data?.results[0];

  //console.log(movie);

  return (
    <>
      { isLoading && 
        <div className="h-[75vh] flex items-center justify-center">
          <ClipLoader
          color="red"
          size={48}
          cssOverride={{ borderWidth: "3px" }}
          />
        </div>
        
      }

      {isPlaying ? (
        <ReactPlayer url={`https://www.youtube.com/watch?v=${movie?.videos.results[1].key}`} width="100%" height="80vh" playing controls onEnded={() => setIsPlaying(false)}  onReady={() => setIsLoading(false)} />
      ) : (
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
              <SearchIcon />
            </div>
            <div className="flex items-center gap-8">
              <p className="font-bold">Welcome, Etanami</p>
              {/* <div>
              <img
                className=" bg-rose-700 p-1 w-9 h-9 rounded-full"
                src={ham}
                alt="Hamburger"
              />
            </div> */}
            </div>
          </nav>
          <div className="flex flex-col gap-4 max-w-md py-8">
            <h1 className="text-3xl lg:text-5xl font-bold">
              {movie?.title}
            </h1>
            <div className="flex gap-7 md:text-xl">
              <div className=" flex gap-2 items-center text-xs">
                <span>
                  <img src={imdb} alt="imdb icon" />
                </span>
                <span>{convertRating(movie?.vote_average)} / 100</span>
              </div>
              <div className="flex gap-2 text-xs">
                <span>
                  <img src={tomatoes} alt="tomatoes icon" />
                </span>
              </div>
            </div>
            <p className="text-sm 2xl:text-lg  font-medium max-w-xs md:max-w-sm">
              {movie?.overview}
            </p>
            <div className="bg-rose-700 px-4 py-2 rounded-md flex gap-2 items-center w-48">
              <span>
                <img src={play} alt="play icon" />
              </span>
              <button
                type="text"
                className="text-sm font-bold uppercase"
                onClick={watchTrailer}
              >
                Watch trailer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
