import MovieCard from "../../components/MovieCard/MovieCard";
import { Container, Row } from "react-bootstrap";

export default function MoviesListPage({ movies }) {
  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </Row>
    </Container>
  );
}
