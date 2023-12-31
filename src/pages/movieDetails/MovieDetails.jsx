import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
//import detailsImage from "../../img/detailsImage.svg"
import Logo from "../../img/logo.png";
import showtime from "../../img/showtime.png";
import ReactPlayer from "react-player/youtube";
import Credit from "../../components/Credit";
import { Link } from "react-router-dom";
import ham from "../../img/hamburger.png";
import { useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  }

  // const closeSidebar = () => {
  //   setIsActive(false);
  // };

  const { data: details, isLoading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  // const year = details.release_date;

  // Check if the details object exists before accessing its properties
  const title = details?.title || "Title not available";
  const date = details?.release_date || "Release date not available";
  // Convert release date to UTC
  const dateObject = new Date(date);
  const releaseDate = dateObject.toUTCString();

  const overview = details?.overview || "Overview not available";
  const runtime = details?.runtime || "Runtime not available";
  const youtubeVideoKey = details?.videos.results[0].key;

  const Genre = () => {
    const genres = details?.genres;
    return (
      genres?.map(genre => (
        <span className="text-rose-500 text-sm border-2 border-gray-100 px-2 rounded-xl" key={genre.name}>{genre.name}</span>
      ))
    )
  }

  { error && <p>{ error }</p> }
  { isLoading && <p>Loading...</p> }

  return (
    <div className="flex font-movie-details">
      <aside className="w-[226px] py-12 border-r-2 border-gray-300 rounded-r-3xl hidden lg:block">
        <div className="font-bold text-xl p-4 flex items-center gap-4">
          <img src={Logo} alt="Moviebox logo" />
          <h1 className="">MovieBox</h1>
        </div>
        <div className="flex flex-col items-center my-8 text-gray-600 text-lg md:text-sm lg:text-xl font-semibold">
          <Link to="/" className="w-full">
            <span className="flex items-center space-x-4 p-4 md:p-8 w-full"> 
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="">Home</p>
            </span>
          </Link>
          <span className="flex items-center space-x-4 p-4 md:p-8 w-full bg-rose-100 border-r-4 border-rose-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>  
            <p className=" text-rose-600 hidden md:block">Movies</p>    
          </span>
          <span className="flex items-center gap-4 md:p-8 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4V3H3V4H4ZM20 4H21V3H20V4ZM6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071C6.68342 13.0976 7.31658 13.0976 7.70711 12.7071L6.29289 11.2929ZM10 9L10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289L10 9ZM13 12L12.2929 12.7071C12.6834 13.0976 13.3166 13.0976 13.7071 12.7071L13 12ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289L17.7071 8.70711ZM7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L7.29289 20.2929ZM12 17L12.7071 16.2929C12.3166 15.9024 11.6834 15.9024 11.2929 16.2929L12 17ZM15.2929 21.7071C15.6834 22.0976 16.3166 22.0976 16.7071 21.7071C17.0976 21.3166 17.0976 20.6834 16.7071 20.2929L15.2929 21.7071ZM3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5V3ZM21 5C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3V5ZM4 5H20V3H4V5ZM19 4V16H21V4H19ZM19 16H5V18H19V16ZM5 16V4H3V16H5ZM5 16H3C3 17.1046 3.89543 18 5 18V16ZM19 16V18C20.1046 18 21 17.1046 21 16H19ZM7.70711 12.7071L10.7071 9.70711L9.29289 8.29289L6.29289 11.2929L7.70711 12.7071ZM9.29289 9.70711L12.2929 12.7071L13.7071 11.2929L10.7071 8.29289L9.29289 9.70711ZM13.7071 12.7071L17.7071 8.70711L16.2929 7.29289L12.2929 11.2929L13.7071 12.7071ZM8.70711 21.7071L12.7071 17.7071L11.2929 16.2929L7.29289 20.2929L8.70711 21.7071ZM11.2929 17.7071L15.2929 21.7071L16.7071 20.2929L12.7071 16.2929L11.2929 17.7071ZM3 5H21V3H3V5Z" fill="#111827"/>
            </svg>
            <p className="">TV Series</p>    
          </span>
          <span className="flex items-center space-x-4 p-4 md:p-8 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="">Upcoming</p>
          </span>
        </div>
        <div className="m-4 p-4 min-h-fit border-2 border-rose-500 rounded-2xl">
          <p className="text-base font-semibold">Play movie quizes and earn free tickets</p>
          <p className="text text-sm  mt-2 font-medium text-gray-600 ">50k people are playing now</p>
          <span className="mt-4 py-2 px-4 mx-auto text-sm rounded-lg text-rose-600 bg-rose-100 inline-block">Start playing</span>
        </div>
        <Link to="/">
          <div className="flex items-center space-x-4 p-4 md:p-8 w-full text-gray-600 text-lg md:text-sm lg:text-xl font-semibold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="">Logout</p>
          </div>
        </Link>
      </aside>
      <main className="flex flex-col">
        <div className="bg-rose-700 p-2 lg:hidden relative" onClick={toggleSidebar} >
            <img
              className=" bg-rose-700 p-1 w-9 h-9 rounded-lg ml-auto border-2 border-rose-200"
              src={ham}
              alt="Hamburger"
            />
          </div>
        <div className="p-2 md:p-6" >
          
          <div 
            className={
              isActive 
                ? `flex flex-col p-6  font-semibold w-[50vw] h-full bg-rose-100 text-gray-600 text-xl absolute top-0 left-0 transition-all duration-300 ease-in-out`
                : `hidden`
            }
          >
            <p className="h-20"><Link to="/">Home</Link></p>
            <p className="h-20">Movies</p>
            <p className="h-20">TV Series</p>
            <p className="h-20">Upcoming</p>
            <p className="h-20">Logout</p>
          </div>
          <Link to="/">
            <svg className="bg-rose-100 p-2 my-2 w-10 rounded-lg inline-block" viewBox="0 0 24 24" fill="none">
              <path d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${youtubeVideoKey}`} width="100%" height="50vh" light={true} controls />
          {/* {<div className="bg-center bg-cover bg-no-repeat h-[50vh]"  style={{ backgroundImage: `url(${detailsImage})` }}></div>} */}
          <div className=" flex flex-col md:grid md:grid-cols-3  gap-x-4 mt-4 p-4">
            <div className="md:col-span-2 flex flex-col gap-2 h-auto">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-gray-700 font-bold">
                <div className=" mr-2 lg:text-xl" data-testid="movie-title">{title}  • <span className="ml-2" data-testid="movie-release-date">{releaseDate}</span>  PG-13    <span data-testid="movie-runtime" className="ml-2"> • {runtime} minutes</span></div>
                <span className="flex gap-1"><Genre /></span>
              </div>
              <h1 className="mt-3 lg:text-lg" data-testid="movie-overview">{overview}</h1>
              <Credit role="Directors" department="Directing" />
              <Credit role="Writers" department="Writing" />
              <Credit role="Stars" department="Acting" />
              <div className="border border-gray-200 rounded-xl text-xl">
                <span className="block md:inline-block p-2 md:p-4 bg-rose-700 text-white text-center py-2 rounded-xl">Top rated movie #65</span>
                <span className="block md:inline-block p-2 text-center">Awards 9 nominations</span>
              </div>
            </div>
            <div className="md:col-span-1 text-xl">
              <div className="flex justify-end font-medium text-gray-500 p-2">
                <span>8.5 |</span>
                <span>| 350k</span>
              </div>
              <span className="block w-full bg-rose-700 text-white text-center py-2 rounded-xl">See Showtimes</span>
              <span className="mt-2 block bg-rose-100 text-black text-center py-2 rounded-xl">More watch options</span>
              <img className="mt-8 w-full" src={showtime} alt="showtime options" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
