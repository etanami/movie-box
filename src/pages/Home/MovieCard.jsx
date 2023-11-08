/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import imdb from "../../img/imdb.png";
import tomatoes from "../../img/tomatoes.png";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const FavoriteIcon = ({ isFavorite }) => {
  return (
    <div className="p-[5px] bg-slate-200 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 18"
        fill={isFavorite ? "#BE123C" : "none"}
      >
        <path
          d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const MovieCard = ({ title, poster, year, id, rating }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Create a Date object from the date string
  const dateObject = new Date(year);
  // Convert the Date object to UTC
  const releaseDate = dateObject.toUTCString();

  // fetch genre of the movies
  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?&append_to_response=genres&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const genre = data?.genres?.map((genre) => genre.name).join(", ");

  return (
    <div data-testid="movie-card" className="relative">
      <span
        className="z-20 cursor-pointer absolute top-3 right-3"
        onClick={() => 
          setIsFavorite(!isFavorite)
        }
      >
        <FavoriteIcon isFavorite={isFavorite} />
      </span>
      <Link to={`/movies/${id}`}>
        <div className="w-[280px]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt={title}
            data-testid="movie-poster"
            className="border border-gray-400 w-full h-96 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          />
          <div className="flex flex-col gap-1 md:gap-3">
            <span
              className="text-gray-400 text-xs font-bold block mt-3"
              data-testid="movie-release-date"
            >
              USA, {releaseDate}
            </span>
            <span
              className="text-gray-900 text-lg font-bold block"
              data-testid="movie-title"
            >
              {title}
            </span>
            <div className="flex justify-between items-center text-gray-900 text-xs">
              <div className="flex gap-4">
                <span>
                  <img src={imdb} alt="imdb icon" />
                </span>
                <span>{rating} / 100</span>
              </div>
              <div className="flex items-end gap-4">
                <span>
                  <img src={tomatoes} alt="tomatoes icon" />
                </span>
              </div>
            </div>
            <span className="text-gray-400 text-xs font-bold">{genre}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
