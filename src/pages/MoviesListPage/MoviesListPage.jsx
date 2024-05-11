import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../data";

export default function MoviesListPage() {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
