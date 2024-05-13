import { movies } from "../../data";
import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorListPage() {
  let actor = movies.map((movie) => movie.cast);
  let combined = [].concat.apply([], actor);
  let actorList = new Set(combined);
  actorList = Array.from(actorList);

  return (
    <div>
      {actorList.map((actor) => (
        <ActorCard actor={actor} key={actor} />
      ))}
    </div>
  );
}
