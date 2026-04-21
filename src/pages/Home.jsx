import { useState } from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="home">
      <h1 className="home__title">Popular Movies</h1>

      {selectedMovie ? (
        <div className="movieDetails">
          <button className="backButton" onClick={() => setSelectedMovie(null)}>⬅ Back</button>

          <h2>{selectedMovie.title}</h2>

          <img src={selectedMovie.image} alt={selectedMovie.title}/>

          <p>⭐ Rating: {selectedMovie.rating}</p>
          <p>📅 Year: {selectedMovie.year}</p>

          <p>🧠 Overview: {selectedMovie.overview}</p>

          <p>🔥 Popularity: {selectedMovie.popularity}</p>
          <p>⭐ Vote Average: {selectedMovie.vote_average}</p>
          <p>Vote Count: {selectedMovie.vote_count}</p>
        </div>
      ) : (
        <div className="home__container">
          {movies.map((movie) => (
            <div key={movie.id} onClick={() => setSelectedMovie(movie)}><MovieCard movie={movie} /></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home;