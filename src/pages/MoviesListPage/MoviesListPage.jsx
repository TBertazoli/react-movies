import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderStyle: "double",
        borderRadius: "10px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))}
    </div>
  );
}
