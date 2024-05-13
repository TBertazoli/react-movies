import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link
        to="/"
        style={{
          textDecorationLine: "none",
        }}
      >
        <button className="btn2">Movies List</button>
      </Link>

      <Link
        to="/actors"
        style={{
          textDecorationLine: "none",
        }}
      >
        <button className="btn2">Actors List</button>
      </Link>
    </nav>
  );
}
