import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MovieSection from "./components/Moviesection/MovieSection";
import Footer from "./components/Footer/Footer";
import { trendingMovies, topRatedMovies, popularTvShows, allMovies } from "./data/movies";

export default function App() {
  
  const [movies, setMovies] = useState([]); 
  const [topRated, setTopRated] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);   
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([])
  const [watchlist, setWatchlist] = useState([]);    

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setMovies(trendingMovies);
      setTopRated(topRatedMovies);
      setTvShows(popularTvShows);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults([]);
      return;
    }

    const filtered = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
 
    setSearchResults(filtered);
 
  }, [searchQuery]);

  function handleWatchlistToggle(movieId) {
    const isAlreadyAdded = watchlist.includes(movieId);

    if (isAlreadyAdded) {
      const updated = watchlist.filter((id) => id !== movieId);
      setWatchlist(updated);
    } else {
      setWatchlist([...watchlist, movieId]);
    }
  }


  const watchlistMovies = allMovies.filter((movie) =>
    watchlist.includes(movie.id)
  );
  return (
    <div className={styles.app}>

      <Navbar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        watchlistCount={watchlist.length}
      />

      {searchQuery === "" && <HeroBanner featuredMovies={movies} />}

      {isLoading && (
        <div className={styles.loadingWrap}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      )}

      {!isLoading && (
        <main className={styles.main}>
          {searchQuery !== "" ? (
            <MovieSection
              title={"Search results for: " + searchQuery}
              subtitle={searchResults.length + " titles found"}
              movies={searchResults}
              watchlist={watchlist}
              onWatchlistToggle={handleWatchlistToggle}
            />
          ) : (
            <>
              <MovieSection
                title="Trending This Week"
                movies={movies}
                watchlist={watchlist}
                onWatchlistToggle={handleWatchlistToggle}
              />

              <div className={styles.divider} />

              <MovieSection
                title="IMDb Top 250 Movies"
                movies={topRated}
                watchlist={watchlist}
                onWatchlistToggle={handleWatchlistToggle}
                showRanks={true}
              />

              <div className={styles.divider} />

              <MovieSection
                title="Popular TV Shows"
                movies={tvShows}
                watchlist={watchlist}
                onWatchlistToggle={handleWatchlistToggle}
              />

              {watchlist.length > 0 && (
                <>
                  <div className={styles.divider} />
                  <MovieSection
                    title={"⭐ My Watchlist (" + watchlist.length + ")"}
                    movies={watchlistMovies}
                    watchlist={watchlist}
                    onWatchlistToggle={handleWatchlistToggle}
                  />
                </>
              )}
            </>
          )}
        </main>
      )}

      <Footer />
    </div>
  );
}