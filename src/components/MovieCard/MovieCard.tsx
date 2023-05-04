interface Movie {
  Poster: string;
  imdbID: string;
  Title: string;
  Type: string;
  Year: number;
}

interface Movies {
  movie: Movie[];
}

const MovieCard = ({
  movie: { imdbID, Year, Poster, Title, Type },
}: Movies) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
