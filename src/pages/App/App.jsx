import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import NavBar from "../../components/NavBar/NavBar";
import ActorDetailPage from "../ActorDetailPage/ActorDetailPage";
import { movies } from "../../data";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <main className="App">
      {user ? (
        <>
          <h1>Welcome, {user}!</h1>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/actors/:actor" element={<ActorDetailPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}
