import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black text-white">
        <h1 className="py-4 text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll"style={{ "msOverflowStyle": "none", "scrollbarWidth": "none" }}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
