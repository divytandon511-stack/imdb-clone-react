let MovieCard = ({movie}) => {
  return (
    <div className="moviecard">
      <img className="moviecard__image"
      src={movie.image}
      alt = {movie.title}
      />

      <p className="moviecard__rating">⭐️ {movie.rating}</p>
      <p className="moviecard__title">{movie.title}</p>
      <p className="moviecard__year">{movie.year}</p>
    </div>
  )
}

export default MovieCard;