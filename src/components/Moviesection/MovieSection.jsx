import { useRef } from "react";
import styles from "./MovieSection.module.css";
import MovieCard from "../Moviecard/MovieCard";

export default function MovieSection({ title, subtitle, movies, watchlist, onWatchlistToggle, showRanks, cta }) {
  const scrollRef = useRef(null);

  function scrollLeft() {
    scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
  }

  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {cta && <button className={styles.ctaBtn}>{cta} ›</button>}
      </div>

      {movies.length === 0 && (
        <p className={styles.empty}>No titles found.</p>
      )}

      {movies.length > 0 && (
        <div className={styles.scrollContainer}>
          <div className={styles.scrollTrack} ref={scrollRef}>
            {movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={showRanks ? { ...movie, rank: index + 1 } : movie}
                isInWatchlist={watchlist.includes(movie.id)}
                onWatchlistToggle={onWatchlistToggle}
              />
            ))}
          </div>

          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={scrollLeft}>‹</button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={scrollRight}>›</button>
        </div>
      )}
    </section>
  );
}