/* eslint-disable react/prop-types */
import imdb from '../../img/imdb.png';
import tomatoes from '../../img/tomatoes.png';

const MovieCard = ({title, poster, year}) => {
  // Create a Date object from the date string
  const dateObject = new Date(year);
  // Extract the year from the Date object
  const releaseDate = dateObject.getFullYear();
  // Get the UTC timestamp in milliseconds
  // const utcMilliseconds = dateObject.getTime();

  return (
    <div data-testid="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} data-testid="movie-poster" className="border border-gray-400 w-full h-96" />
      <div className="flex flex-col gap-1 md:gap-3">
        <span className="text-gray-400 text-xs font-bold block mt-3" data-testid="movie-release-date">USA, { releaseDate }</span>
        <span className="text-gray-900 text-lg font-bold block" data-testid="movie-title">{title}</span>
        <div className='flex justify-between items-center text-gray-900 text-xs'>
          <div className='flex gap-4'>
            <span><img src={imdb} alt="imdb icon" /></span>
            <span>86.0 / 100</span>
          </div>
          <div className='flex items-end gap-4'>
            <span><img src={tomatoes} alt="tomatoes icon" /></span>
            <span>97%</span>
            </div>
        </div>
        <span className='text-gray-400 text-xs font-bold'>Action, Adventure</span>
      </div>
    </div>
  )
};

export default MovieCard;