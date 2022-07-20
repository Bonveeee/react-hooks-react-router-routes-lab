import React from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((element, index) => {
    return (
      <div key={index}>
        <h2 style={{fontWeight: 'bold'}}>Name: {element.title}</h2>
        <h4 style={{fontWeight: 'bold'}}>Time: {element.time}</h4>
        <ul>
          Genres:{" "}
          {element.genres.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movie}
    </div>
  );
}

export default Movies;
