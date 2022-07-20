import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((element, index) => {
    return (
      <div key={index}>
        <h2 style={{fontWeight: 'bold'}}>{element.name}</h2>
        <ul>
          {element.movies.map((element, index) => {
            return <li key={index}>{element}</li>;
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
