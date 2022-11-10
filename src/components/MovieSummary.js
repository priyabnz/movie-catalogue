import React from "react";
import history from "../router/history";

/**
 * @param  {strings} props
 */
const MovieSummary = (props) => {
	const { title, poster, year, imdbID } = props;

	function movieSelected(id) {
		history.push(`/${id}`);
	}
	
	return (
		<div className="movie" onClick={() => movieSelected(imdbID)}>
			<div className="image-wrapper">
			<img src={poster} alt={title} />
			</div>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p>{year}</p>
			</div>
		</div>
	);
}
export default MovieSummary;
