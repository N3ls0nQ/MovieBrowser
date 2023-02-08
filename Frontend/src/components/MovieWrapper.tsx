import React from 'react'
import { Movie } from '../types/Movie'
import MovieCard from './MovieCard'

interface Props{
    searchResults: Movies
}

interface Movies extends Array<Movie>{}


const MovieWrapper = ({searchResults}:Props) => {
  return (
    <div className='flex-1 flex h-[1vh] justify-center items-center'>
        {
          searchResults.map((movie, index) => {
            return(
              <MovieCard movie={movie} key={index}/>
            )
          })
        }
      </div>
  )
}

export default MovieWrapper