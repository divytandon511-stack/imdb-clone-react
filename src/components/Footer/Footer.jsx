import styles from './Footer.module.css';

const FOOTER_LINKS = [
  'Help', 'Site Index', 'IMDbPro', 'Box Office Mojo', 'License IMDb Data',
  'Press Room', 'Advertising', 'Jobs', 'Conditions of Use', 'Privacy Policy',
  'Your Ads Privacy Choices',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoBlock}>
        <div className={styles.logo}>
          <span className={styles.logoText}>IMDb</span>
        </div>
      </div>

      <div className={styles.links}>
        {FOOTER_LINKS.map((link) => (
          <a key={link} href="#" className={styles.link}>{link}</a>
        ))}
      </div>

      <p className={styles.copy}>
        © 1990-2024 by IMDb.com, Inc.
      </p>

      <div className={styles.amazonBadge}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>An Amazon company</span>
      </div>
    </footer>
  );
}
