import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((director) => {
    const moviesDirected = director.movies

    return (
      <div key={director.name}>
        <h2 style={{fontWeight: 'bold'}}>{director.name}</h2>
        <ul>
          {moviesDirected.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;
