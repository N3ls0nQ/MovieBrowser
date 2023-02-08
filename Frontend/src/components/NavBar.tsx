import React from 'react'
import { Movie } from '../types/Movie'
import SearchBar from './SearchBar'

interface Props{
    setSearchResults: Function
    movies: Array<Movie>
}

const NavBar = ({setSearchResults, movies}: Props) => {
  return (
    <div className='bg-neutral-100 w-full shadow-lg h-20 flex justify-center items-center'>
        <ul className='items-center justify-center'>
            <li className='self-center'>
                <SearchBar movies={movies} setSearchResults={setSearchResults}/>
            </li>
        </ul>
    </div>
  )
}

export default NavBar