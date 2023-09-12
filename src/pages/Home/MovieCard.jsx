/* eslint-disable react/prop-types */

const MovieCard = ({title, poster, year}) => {

  console.log(poster)
  // Create a Date object from the date string
  const dateObject = new Date(year);
  // Extract the year from the Date object
  const releaseDate = dateObject.getFullYear();

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} className="border border-gray-400 w-full h-96" />
      <div>
        <span>USA, { releaseDate }</span>
        <span>{title}</span>
        <div>
          <span>86.0 / 100</span>
          <span>97%</span>
        </div>
        <span>Action, Adventure</span>
      </div>
    </div>
  )
};

export default MovieCard;