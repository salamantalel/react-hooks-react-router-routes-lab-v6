import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;
