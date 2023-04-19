import styles from "./Search.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../store/moviedataSlice";
import axios from "axios";
function SearchBar() {
  const [query, search] = useState(null);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  function searchMovie(moviename) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=cfe422613b250f702980a3bbf9e90716`;
    axios.get(url).then((response) => {
      console.log(response);
      dispatch(movieAction.getMovie(response.data.results));
    });
  }
  return (
    <form
      className={styles.search}
      onInput={(event) => {
        searchMovie(event.target.value);
      }}
    >
      <input
        className="form-control input"
        type="search"
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search For Movie Title...."
        value={searchText}
      ></input>
    </form>
  );
}
export default SearchBar;
