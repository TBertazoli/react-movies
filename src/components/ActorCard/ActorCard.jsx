import { Link } from "react-router-dom";

export default function ActorCard({ actor }) {
  return (
    <Link to={`/actors/${actor}`}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div
            style={{
              backgroundImage: `url(https://picsum.photos/200/300?random=1)`,
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              height: "30vh",
              width: "30vw",
              backgroundSize: "cover",
              margin: "1vh",
              border: "0.5px  solid rgba(150, 150, 150, 0.5)",
            }}
          >
            <h1
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "4px",
              }}
            >
              {actor}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
