import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={{
        pathname: `/movies/${movie.title}`,
      }}
      style={{ textDecoration: "none", color: "black" }}
    >
      ,
      <div
        style={{
          backgroundImage: `url(${movie.posterPath})`,
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
          <h3 className="MovieCard">{movie.title}</h3>
          <p>Released Date: {movie.releaseDate}</p>
        </div>
      </div>
    </Link>
  );
}
