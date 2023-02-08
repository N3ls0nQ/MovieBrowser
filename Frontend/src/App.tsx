import { useEffect, useState } from 'react'
import MovieCard from "./components/MovieCard"
//import {movies} from "../test/dummyData"
import NavBar from './components/NavBar'
import { Movie } from './types/Movie'
import axios from "axios"
import MovieWrapper from './components/MovieWrapper'
import mysql from "mysql2"

function App() {
  const [movies, setMovies] = useState([])
  const [searchResults, setSearchResults] = useState(movies)

  useEffect(() => {
    const fetchData = async () => {
      try{
         const res = await axios.get("http://127.0.0.1:8080/movies")
         console.log(res.data)
         setMovies(res.data)
         setSearchResults(res.data)
      } catch(e) {
        console.error(e)
      }
    };
    fetchData();
  },[])

  return (
    <div className="flex flex-col">
      <NavBar setSearchResults={setSearchResults} movies={movies}/>
      <MovieWrapper searchResults={searchResults}/>
    </div>
  )
}

export default App
