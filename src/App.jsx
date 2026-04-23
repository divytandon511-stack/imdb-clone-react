import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import PromoBanner from './components/PromoBanner/PromoBanner';
import MovieSection from './components/Moviesection/MovieSection';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />

      <PromoBanner
        title="THE BOYS"
        subtitle="FINAL SEASON"
        cta="WATCH NOW"
      />

      <HeroBanner />

      <main className={styles.main}>
        <MovieSection
          title="Featured today"
          cta="See more"
        />

        <div className={styles.divider} />

        <MovieSection
          title="Top picks for you"
          subtitle="Movies & TV shows we think you'll like"
          cta="See all recommendations"
        />

        <div className={styles.divider} />

        <MovieSection
          title="IMDb Top 250 Movies"
          cta="See the full list"
          showRanks
        />

        <div className={styles.divider} />

        <MovieSection
          title="Fan favourites"
          subtitle="This week's top movies & TV shows"
          cta="See more"
        />

        <div className={styles.divider} />

        <MovieSection
          title="Most popular movies"
          cta="See more movies"
        />

        <div className={styles.divider} />

        <MovieSection
          title="Most popular TV shows"
          cta="See more TV shows"
        />
      </main>

      <Footer />
    </div>
  );
}