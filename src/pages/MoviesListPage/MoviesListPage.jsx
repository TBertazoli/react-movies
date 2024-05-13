import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))}
    </div>
  );
}
