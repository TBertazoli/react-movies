import { useParams } from "react-router-dom";
import { movies } from "../../data";

export default function MovieDetailPage() {
  let { movieName } = useParams();
  const movieDetail = movies.find((movie) => movie.title === movieName);

  return (
    <div className="d-flex justify-content-between m-5">
      <div className="text-start">
        <h1>{movieDetail.title}</h1>
        <h4>Released: {movieDetail.releaseDate}</h4>
        <h3>Cast Members:</h3>
        <ul>
          {movieDetail.cast.map((actor) => (
            <li>{actor}</li>
          ))}
        </ul>
      </div>
      <img src={movieDetail.posterPath} alt={movieDetail.title} />
    </div>
  );
}
