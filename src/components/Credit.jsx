/* eslint-disable react/prop-types */
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Credit = ({ role, department }) => {
  const { id } = useParams();
  const creditsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits`;

  const { data } = useFetch(creditsUrl);
  const credits = data?.credits?.crew;
  const roles = credits?.filter(person => person.known_for_department === `${department}`);
  const namesSet = new Set(roles?.map(names => names.name));
  const uniqueNames = Array.from(namesSet);
  const names = uniqueNames?.map(name => name).join(', ');

  return (
    <p>{role} : <span className="mt-3 text-rose-500">{names || "Not available"}</span></p>
  )
}

export default Credit;