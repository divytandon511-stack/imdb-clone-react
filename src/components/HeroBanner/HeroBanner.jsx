import styles from './HeroBanner.module.css';

const UP_NEXT_ITEMS = [
  {
    id: 1,
    duration: '1:50',
    title: 'Leviticus',
    subtitle: 'Watch the Trailer',
    likes: 42,
    dislikes: 23,
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=120&q=80',
  },
  {
    id: 2,
    duration: '5:35',
    title: 'Oscar Isaac & Carey Mulligan Reunite for "Beef" Season 2',
    subtitle: 'Watch the Interview',
    likes: 130,
    dislikes: 35,
    thumbnail: null,
    isImdbCard: true,
  },
  {
    id: 3,
    duration: '1:59',
    title: "Yahya Abdul-Mateen Stars in 'Man on Fire'",
    subtitle: 'Watch the Trailer',
    likes: 87,
    dislikes: 12,
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=120&q=80',
  },
];

export default function HeroBanner() {
  return (
    <section className={styles.heroBanner}>
      {/* Main Video Area */}
      <div className={styles.videoArea}>
        <div className={styles.videoWrapper}>
          <img
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80"
            alt="Featured content"
          />

          {/* Gradient overlay */}
          <div className={styles.gradientOverlay} />

          {/* Bottom title bar */}
          <div className={styles.titleBar}>
            <div className={styles.titleLeft}>
              <button className={styles.prevBtn}>&#8249;</button>
            </div>
            <div className={styles.titleCenter}>
              <div className={styles.titleChip}>
                <span className={styles.chipDot} />
                TRAILER
              </div>
              <p className={styles.heroTitle}>Interview with the Vampire: Lestat</p>
            </div>
            <div className={styles.titleRight}>
              <button className={styles.nextBtn}>&#8250;</button>
            </div>
          </div>

          {/* Play button */}
          <button className={styles.playBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className={styles.thumbnailStrip}>
            <button className={styles.addThumb}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </button>
            <div className={styles.thumbItem}>
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=80&q=80"
                alt="Thumbnail"
                className={styles.thumbImg}
              />
              <span className={styles.thumbLabel}>JUNE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Up Next Panel */}
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
                  <div className={styles.playCircle}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                  <span className={styles.duration}>{item.duration}</span>
                </div>
              </div>

              <div className={styles.itemInfo}>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemSubtitle}>{item.subtitle}</p>
                <div className={styles.itemReactions}>
                  <span className={styles.reaction}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
                    </svg>
                    {item.likes}
                  </span>
                  <span className={styles.reaction}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/>
                    </svg>
                    {item.dislikes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
