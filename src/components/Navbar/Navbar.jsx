import styles from './Navbar.module.css';

const NAV_LINKS = ['Movies', 'TV Shows', 'Watch', 'Awards', 'Community'];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.logoText}>IMDb</span>
        </div>

        <div className={styles.menuBtn}>
          <span className={styles.menuIcon}>☰</span>
          <span>Menu</span>
        </div>

        <div className={styles.searchBar}>
          <select className={styles.searchCategory}>
            <option>All</option>
            <option>Movies</option>
            <option>TV</option>
            <option>People</option>
          </select>
          <div className={styles.divider} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search IMDb"
          />
          <button className={styles.searchBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <a className={styles.imdbPro} href="#">IMDbPro</a>

        <button className={styles.watchlistBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
          <span>Watchlist</span>
        </button>

        <button className={styles.signInBtn}>Sign In</button>

        <div className={styles.languageBtn}>
          <span>EN</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
    </nav>
  );
}
