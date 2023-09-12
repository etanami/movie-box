//import { useEffect, useState } from "react";

import MovieCard from "./MovieCard/";
import useFetch from "../../hooks/useFetch";

const MovieList = () => {
  const {data: movies, isLoading, error} = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KET}`);

  console.log(movies)
  return (
    <div>
      <div>
        <h1 className="text-black font-bold text-4xl">Featured Movie</h1>
        <p className="text-lg text-rose-700"><a>See more</a></p>
      </div>
      <div className="grid grid-cols-4">
        {error && <p>{ error }</p>}
        {isLoading && <p>Loading...</p>}
        {movies && (
          movies.results.slice(0, 10).map(movie => (
            <MovieCard 
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              year={movie.release_date}
        />
          ))
        )}
      </div>
    </div>
  )
}

export default MovieList;