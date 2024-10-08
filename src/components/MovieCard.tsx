import type React from "react";
import type { Movie } from "../App";

interface MovieCardProps {
  readonly movie: Movie;
  readonly isWatchlisted: boolean;
  readonly toggleWatchlist: (movieId: number) => void;
}

export default function MovieCard({
  movie,
  isWatchlisted,
  toggleWatchlist,
}: MovieCardProps) {
  const handleError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.target.src = "images/default.jpg";
  };

  const ratingClass = (rating: string) => {
    if (Number.parseFloat(rating) >= 8) {
      return "rating-good";
    }

    if (Number.parseFloat(rating) >= 5) {
      return "rating-ok";
    }

    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>

        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${ratingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          />

          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
