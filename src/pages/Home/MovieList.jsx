
import MovieCard from "./MovieCard/";
import useFetch from "../../hooks/useFetch";

const MovieList = () => {
  const {data: movies, isLoading, error} = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`);

  console.log(movies)
  return (
    <div className="mx-6 my-4 lg:mx-20 lg:my-12">
      <div className="flex justify-between">
        <h1 className="text-black font-bold py-2 text-xl lg:text-4xl">Featured Movie</h1>
        <div className="text-rose-700 flex gap-1 items-center">
          <p className="lg:text-lg"><a>See more</a></p>
          <span>
            <svg className="stroke-current h-4 w-4  lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19"   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16 lg:gap-20  mt-2 md:mt-8 ">
        {error && <p>{ error }</p>}
        {isLoading && <p>Loading...</p>}
        {movies && (
          movies.results.slice(0, 10).map(movie => (
            <MovieCard 
              key={movie.id}
              id={movie.id}
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