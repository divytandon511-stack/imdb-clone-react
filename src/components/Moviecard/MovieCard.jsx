import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const {
    title = 'Untitled',
    year = '2024',
    rating = null,
    ratingCount = null,
    poster,
    rank,
    badge,
    isNew,
  } = movie;

  return (
    <div className={styles.card}>

      {rank && <div className={styles.rank}>{rank}</div>}


      <div className={styles.posterWrap}>
        {poster ? (
          <img src={poster} alt={title} className={styles.poster} />
        ) : (
          <div className={styles.posterPlaceholder}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
        )}

        <button className={styles.watchlistIcon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>

        {isNew && <div className={styles.newBadge}>NEW</div>}
        {badge && <div className={styles.badge}>{badge}</div>}
      </div>

      <div className={styles.info}>
        {rating !== null && (
          <div className={styles.ratingRow}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#f5c518">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span className={styles.ratingVal}>{rating}</span>
            {ratingCount && <span className={styles.ratingCount}>{ratingCount}</span>}
          </div>
        )}
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
      </div>

      <button className={styles.addBtn}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        Add to Watchlist
      </button>
    </div>
  );
}