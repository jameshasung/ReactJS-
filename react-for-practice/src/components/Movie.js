import protoTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        <li>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

Movie.protoTypes = {
  coverImg: protoTypes.string.isRequired,
  title: protoTypes.string.isRequired,
  summary: protoTypes.string.isRequired,
  genres: protoTypes.arrayOf(protoTypes.string).isRequired,
};

export default Movie;
