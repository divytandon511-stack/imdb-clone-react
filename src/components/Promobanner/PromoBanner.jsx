import styles from './PromoBanner.module.css';

export default function PromoBanner({ title, subtitle, cta, bgImage, logoText }) {
  return (
    <div className={styles.banner}>
      <div
        className={styles.imageHalf}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      >
        <div className={styles.overlay} />
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>{title || 'THE BOYS'}</h2>
          {subtitle && <p className={styles.bannerSub}>{subtitle}</p>}
          {cta && <button className={styles.bannerCta}>{cta}</button>}
        </div>
      </div>

      <div className={styles.logoHalf}>
        <div className={styles.logoContent}>
          <span className={styles.logoText}>{logoText || 'amazon\nprime'}</span>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#FF9900" className={styles.smileIcon}>
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-7.5a4 4 0 0 0 7 0"/>
          </svg>
        </div>
        <span className={styles.sponsored}>Sponsored</span>
      </div>
    </div>
  );
}