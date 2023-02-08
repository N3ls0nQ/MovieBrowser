import React, { FC } from "react";
import { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="flex-col bg-neutral-100 cursor-pointer shadow-xl w-[300px] item-center justify-center rounded-lg text-center p-5 m-5 scale-[0.9] hover:scale-[1] ease-in transition-all">
      <div className="flex h-[300px] justify-center rounded-lg">
        <img className="rounded-lg bg-cover" src={movie.image} />
      </div>
      <div className="mt-4 justify-center items-center flex-col flex">
        <span className="font-medium font-poppins text-xl">{movie.name}</span>
        <span className="font-normal font-poppins text-lg text-gray-600">{movie.year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
