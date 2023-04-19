import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MovieDesc.module.css"
function MovieDesc() {
  const params = useParams();
  const [movie, setMovieDetails] = useState(null);

  const fetchDetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=cfe422613b250f702980a3bbf9e90716`
)
      .then((response) => {
        console.log(response.data)
        setMovieDetails(
          response.data
        );
      });
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {movie==null?(<div>LOADING....</div>):(
      <div className={styles .movie}>
        <img  className={styles.image}src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
        {/* {console.log(movie[0])} */}
      <div>
        <h2>{movie.original_title}</h2>
      <p>{movie.overview}</p>
      <p> {movie.release_date}</p>
      </div>
      </div>
      )
  }
    </>
  );
}

export default MovieDesc;
