import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";


function Card(props) {

  const navigate = useNavigate();
  function navigateToMovie(movieId) {
 

    navigate(`/home/${movieId}`);
  }
  
  return (
    <div
      className={styles.card}
      onClick={() => {
        navigateToMovie(props.id);
      }}
    >
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w500${props.image}`}
      ></img>
      <div>
        <h2 className={styles.title}>{props.title}</h2>
      </div>
    </div>
  );
}

export default Card;
