export default function MovieCard({ movie }) {
  return (
    <>
      <h3 className="MovieCard">{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      <img src={movie.posterPath} alt={movie.title}></img>
      <p>{movie.cast.join(" ")}</p>
    </>
  );
}
