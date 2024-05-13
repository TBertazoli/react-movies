import { useParams } from "react-router-dom";
import { movies } from "../../data";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function ActorDetailPage() {
  let { actor } = useParams();
  const actorDetail = movies.filter((movie) => movie.cast.includes(actor));
  console.log(actorDetail);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {actorDetail.map((movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))}
    </div>
  );
}
