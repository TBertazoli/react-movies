import { useParams } from "react-router-dom";
import { movies } from "../../data";

export default function ActorDetailPage() {
  let { actor } = useParams();
  const actorDetail = movies.filter((movie) => movie.cast.includes(actor));
  console.log(actorDetail);

  return (
    <div>
      {actorDetail.map((movie) => (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.posterPath} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}
