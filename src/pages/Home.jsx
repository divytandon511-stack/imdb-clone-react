import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

const Home = () => {
  return (
    <div className="home">
      
      <h1 className="home__title">Popular Movies</h1>

      <div className="home__container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
};

export default Home;