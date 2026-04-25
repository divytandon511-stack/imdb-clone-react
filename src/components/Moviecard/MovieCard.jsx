import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, isInWatchlist, onWatchlistToggle }) {
  const { id, title, year, rating, ratingCount, poster, rank } = movie;
  
  
  
  
  function handleWatchlistClick() {
    onWatchlistToggle(id);
  }

  return (
    <div className={styles.card}>

      {rank && <div className={styles.rank}>{rank}</div>}

      <div className={styles.posterWrap}>

        {poster ? (
          <img src={poster} alt={title} className={styles.poster} />
        ) : (
          <div className={styles.posterPlaceholder}>No Image</div>
        )}

        <button
          className={isInWatchlist ? styles.bookmarkActive : styles.bookmark}
          onClick={handleWatchlistClick}
          title={isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        >

          {isInWatchlist ? "✓" : "+"}
        </button>
      </div>

      <div className={styles.info}>

        {rating && (
          <div className={styles.ratingRow}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingVal}>{rating}</span>
            {ratingCount && <span className={styles.ratingCount}>{ratingCount}</span>}
          </div>
        )}

        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>

      <button
        className={isInWatchlist ? styles.addBtnActive : styles.addBtn}
        onClick={handleWatchlistClick}
      >
        {isInWatchlist ? "✓ In Watchlist" : "+ Add to Watchlist"}
      </button>
    </div>
  );
}