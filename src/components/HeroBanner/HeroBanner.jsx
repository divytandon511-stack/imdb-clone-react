import { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";

const UP_NEXT_ITEMS = [
  { id: 1, duration: "1:50", title: "Leviticus", subtitle: "Watch the Trailer", likes: 42, dislikes: 23, thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=120&q=80" },
  { id: 2, duration: "5:35", title: 'Oscar Isaac & Carey Mulligan Reunite for "Beef" Season 2', subtitle: "Watch the Interview", likes: 130, dislikes: 35, thumbnail: null, isImdbCard: true },
  { id: 3, duration: "1:59", title: "Yahya Abdul-Mateen Stars in 'Man on Fire'", subtitle: "Watch the Trailer", likes: 87, dislikes: 12, thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=120&q=80" },
];

export default function HeroBanner({ featuredMovies = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {

    if (featuredMovies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);

    return () => clearInterval(interval);

  }, [featuredMovies.length]);
  
  function handlePrev() {
    setCurrentIndex((prev) => {
      if (prev === 0) return featuredMovies.length - 1; 
      return prev - 1;
    });
  }


  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
  }

  const currentMovie = featuredMovies[currentIndex];

  return (
    <section className={styles.heroBanner}>

      <div className={styles.videoArea}>
        <div className={styles.videoWrapper}>

          {currentMovie ? (
            <img
              className={styles.heroImage}
              src={currentMovie.poster || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80"}
              alt={currentMovie.title}
            />
          ) : (
            <div className={styles.heroPlaceholder} />
          )}

          <div className={styles.gradientOverlay} />

          <div className={styles.dots}>
            {featuredMovies.map((_, index) => (
              <button
                key={index}
                className={index === currentIndex ? styles.dotActive : styles.dot}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <div className={styles.titleBar}>
            <button className={styles.prevBtn} onClick={handlePrev}>‹</button>

            <div className={styles.titleCenter}>
              {currentMovie && (
                <>
                  <div className={styles.titleChip}>
                    <span className={styles.chipDot} /> TRAILER
                  </div>

                  <p className={styles.heroTitle}>{currentMovie.title}</p>
                  <p className={styles.heroYear}>{currentMovie.year}</p>
                </>
              )}
            </div>

            <button className={styles.nextBtn} onClick={handleNext}>›</button>
          </div>

          <button className={styles.playBtn}>▶️</button>
        </div>
      </div>

      <div className={styles.upNext}>
        <h3 className={styles.upNextTitle}>Up next</h3>
        <div className={styles.upNextList}>

          {UP_NEXT_ITEMS.map((item) => (
            <div key={item.id} className={styles.upNextItem}>
              <div className={styles.itemThumbnail}>
                {item.isImdbCard ? (
                  <div className={styles.imdbThumb}>
                    <span className={styles.imdbThumbBadge}>IMDb</span>
                    <span className={styles.imdbThumbSub}>INTERVIEWS</span>
                  </div>
                ) : (
                  <img src={item.thumbnail} alt={item.title} className={styles.itemImg} />
                )}
                <div className={styles.playOverlay}>
                  <div className={styles.playCircle}>▶️</div>
                  <span className={styles.duration}>{item.duration}</span>
                </div>
              </div>

              <div className={styles.itemInfo}>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemSubtitle}>{item.subtitle}</p>
                <div className={styles.itemReactions}>
                  <span className={styles.reaction}>👍 {item.likes}</span>
                  <span className={styles.reaction}>👎 {item.dislikes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}