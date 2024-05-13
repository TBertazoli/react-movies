import { movies } from "../../data";
import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorListPage() {
  let actor = movies.map((movie) => movie.cast);
  let combined = [].concat.apply([], actor);
  let actorList = new Set(combined);
  actorList = Array.from(actorList);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {actorList.map((actor, i) => (
        <ActorCard actor={actor} key={actor} index={i} />
      ))}
    </div>
  );
}
