import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ title, movies }) {
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className=" flex overflow-x-auto no-scrollbar space-x-4 
       cursor-pointer ">
        <div className="flex items-center flex-nowrap">
          {movies && movies.length > 0 ?
          (movies.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })):(
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
