import { useSelector } from "react-redux";
import styles from "./cardGrid.module.css";
import Card from "./card";

function CardGrid() {
  const movies = useSelector((state) => state.movie_slice.product);
  console.log(movies);


  
  return (
    <div className={styles.body1}>
      {movies == null ? (
        <div class={styles.loading}>loading </div>
      ) : (
        <div className={styles.container}>
          {movies.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                image={item.poster_path}
                title={item.original_title}
              
              ></Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CardGrid;
