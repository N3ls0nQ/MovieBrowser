import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../types/Movie";
import mysql from "mysql2";
import axios from "axios";

interface Props {
  movies: Movies;
  setSearchResults: Function;
}

interface Movies extends Array<Movie> {}

const SearchBar = ({ movies, setSearchResults }: Props) => {
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => e.preventDefault();

  const [search, setSearch] = useState("");

  const filterMovies = async () => {
    const res = await axios.get(`http://127.0.0.1:8080/movie?search=${search}`)

    setSearchResults(res.data);
  };

  useEffect(() => {
    filterMovies();
  }, [search]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    // if (!e.target.value) return setSearchResults(movies);

    // const resultsArray = movies.filter((movie: Movie) =>
    //   movie.name.toLowerCase().includes(e.target.value) || movie.name.includes(e.target.value) || movie.year.toString().includes(e.target.value)
    // );

    setSearch(e.target.value);

    //setSearchResults(resultsArray);
  };

  return (
    <header>
      <form className="bg-blue-400 rounded-lg p-3">
        <input
          className="bg-blue-400 font-poppins outline-none placeholder:text-white placeholder:font-poppins font-medium text-lg"
          placeholder="Suche..."
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={"white"} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
