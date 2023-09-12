import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetch data from api asychronously
  const fetchData = async () => {
    // argument required by the api
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzhkMTM5NDUxNWJlN2E4NTEyNjBjZDA5OGE2MDE3MiIsInN1YiI6IjY0ZmY4YjhkZmZjOWRlMGVlMTc2NmYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4qTLoFYRKzmXPl6Uirh6qAzzm7NHoPkVtPHhUZ6q_dQ'
      }
    };
    
    try {
      const response = await fetch(url, options);
      // check if requests fails
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
        setError(error.message);
        setIsLoading(false);
    }
  };

  useEffect(() => {

    fetchData();
    
  }, [url]);

  return {data, isLoading, error}
}

export default useFetch;