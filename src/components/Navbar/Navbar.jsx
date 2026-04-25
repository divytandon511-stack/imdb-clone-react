import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ onSearch, searchQuery, watchlistCount }) {
  
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSearch() {
    onSearch(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleClear() {
    setInputValue("");
    onSearch(""); 
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>

        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>IMDb</span>
        </div>

        <div className={styles.menuBtn}>
          <span>☰</span>
          <span>Menu</span>
        </div>

        <div className={styles.searchBar}>
          <select className={styles.searchCategory}>
            <option>All</option>
            <option>Movies</option>
            <option>TV</option>
          </select>

          <div className={styles.divider} />

          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search IMDb"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          {inputValue && (
            <button className={styles.clearBtn} onClick={handleClear}>
              ✕
            </button>
          )}

          <button className={styles.searchBtn} onClick={handleSearch}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <a className={styles.imdbPro} href="#">IMDbPro</a>

        <button className={styles.watchlistBtn}>
          <div className={styles.watchlistIconWrap}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            {watchlistCount > 0 && (
              <span className={styles.watchlistBadge}>{watchlistCount}</span>
            )}
          </div>
          <span>Watchlist</span>
        </button>

        <button className={styles.signInBtn}>Sign In</button>

        <div className={styles.languageBtn}>
          <span>EN ▾</span>
        </div>
      </div>
    </nav>
  );
}