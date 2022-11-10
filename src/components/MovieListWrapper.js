import React from "react";
import MovieSummary from "./MovieSummary";

/**
 * @param  {array} {movies}
 */
const MovieListWrapper = ({movies}) => {
	return (
		<div className="movie-wrapper">
			{movies.map(
				({ Title, Poster, Year, imdbID: id }) => (
					<MovieSummary
						key={id}
						title={Title}
						poster={Poster}
						year={Year}
						imdbID={id}
					/>
				)
			)}
		</div>
	);
}
export default MovieListWrapper;
