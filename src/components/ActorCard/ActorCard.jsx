import { Link } from "react-router-dom";

export default function ActorCard({ actor, index }) {
  return (
    <Link
      to={`/actors/${actor}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          backgroundImage: `url(https://picsum.photos/200/300?random=${index})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          width: "30vw",
          border: "0.5px  solid rgba(150, 150, 150, 0.5)",
          margin: "1vh",
          borderRadius: "5px",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "4px",
          }}
        >
          <h1>{actor}</h1>
        </div>
      </div>
    </Link>
  );
}
