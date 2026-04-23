import styles from './MovieSection.module.css';
import MovieCard from '../Moviecard/MovieCard';

const FEATURED_MOVIES = [
  {
    id: 1,
    title: 'Dune: Part Two',
    year: '2024',
    rating: '8.6',
    ratingCount: '452K',
    poster: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dh588sc-bcbfe65d-862f-4332-abb6-d000dd101fde.jpg',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    year: '2023',
    rating: '8.9',
    ratingCount: '710K',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSp8mKKSyvt9cZwVPE5th8X9fHf0QAvQZvRg&s',
    isNew: true,
  },
  {
    id: 3,
    title: 'Dark',
    year: '2017',
    rating: '8.7',
    ratingCount: '542K',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRRhx2Eb2CdGFUQLycDcIYZQ1pqGOnXQBuA&s',
  },
  {
    id: 4,
    title: 'Stranger Things',
    year: '2016',
    rating: '8.6',
    ratingCount: '2530K',
    poster: 'https://4kwallpapers.com/images/wallpapers/stranger-things-5120x3657-18568.jpg',
  },
  {
    id: 5,
    title: 'Civil War',
    year: '2024',
    rating: '7.2',
    ratingCount: '88K',
    poster: 'https://m.media-amazon.com/images/M/MV5BZGMwYmVhZmItMGZlNC00NGEwLTk1MTAtMjA2YzEyMTIwYjhhXkEyXkFqcGc@._V1_.jpg',
    isNew: true,
  },
  {
    id: 6,
    title: 'Monkey Man',
    year: '2024',
    rating: '7.0',
    ratingCount: '64K',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtAMdaBnU9fE3d4c9Y1mEAdcO-MIOPGuhVw&s',
  },
  {
    id: 7,
    title: 'Dhurandhar: The Revenge',
    year: '2026',
    rating: '8.5',
    ratingCount: '47k',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2ZiODdiMzMtYzU2Yy00ZWNlLWIyNGQtZjc0ZmFhZGRkNjZhXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 8,
    title: 'Past Lives',
    year: '2023',
    rating: '7.9',
    ratingCount: '179K',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDdIVGiq7O-DMNRxTUEaHF1qGwGcgJwuURw&s',
  },
];

const TOP_RATED = [
  { id: 1, rank: 1, title: 'The Shawshank Redemption', year: '1994', rating: '9.3', poster: 'https://image.tmdb.org/t/p/original/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg' },
  { id: 2, rank: 2, title: 'The Godfather', year: '1972', rating: '9.2', poster: 'https://image.tmdb.org/t/p/original/kGzFbGhp99zva6oZODW5atUtnqi.jpg' },
  { id: 3, rank: 3, title: 'The Godfather Part II', year: '1974', rating: '9.0', poster: 'https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg' },
  { id: 4, rank: 4, title: "Schindler's List", year: '1993', rating: '9.0', poster: 'https://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg' },
  { id: 5, rank: 5, title: 'The Lord of the Rings: The Return of the King', year: '2003', rating: '9.0', poster: 'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
  { id: 6, rank: 6, title: 'Pulp Fiction', year: '1994', rating: '8.9', poster: 'https://image.tmdb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg' },
  { id: 7, rank: 7, title: "Dilwale Dulhania Le Jayenge", year: '1995', rating: '8.0', poster: 'https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg' },
  { id: 8, rank: 8, title: "Interstellar", year: '2014', rating: '8.7', poster: 'https://image.tmdb.org/t/p/original/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg' }
];

export default function MovieSection({ title, subtitle, movies, showRanks, cta }) {
  const items = movies || (showRanks ? TOP_RATED : FEATURED_MOVIES);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {cta && (
          <button className={styles.ctaBtn}>
            {cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}
      </div>

      <div className={styles.scrollContainer}>
        <div className={styles.scrollTrack}>
          {items.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>


        <button className={`${styles.scrollArrow} ${styles.scrollLeft}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button className={`${styles.scrollArrow} ${styles.scrollRight}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
