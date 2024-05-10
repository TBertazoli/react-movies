import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Movies List Page</Link>
      &nbsp;|&nbsp;
      <Link to="/actors">Actors List Page</Link>
    </nav>
  );
}
