import React, {useState, useEffect} from "react";
import history from "../router/history";
const MovieDetail = () => {
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const imdbID = history.location.pathname.substr(1);
	
		fetch(
			`http://www.omdbapi.com/?apikey=c32f98b8&type=movie&plot=full&i=${imdbID}`
		).then(res => {
			res.json().then(json => {
				if (json.Response && json.Response === "False") {
					setMovie(null);
				} else {
					setMovie(...json);
				}
				setLoading(false);
			});
		});
	}, []);

	if (!movie) {
		return null;
	}

	const { Title,Director, Writer, Actors, Plot,Poster} = movie;
		
	const render = loading ? (
		<div className="lds-ripple">
			<div></div>
			<div></div>
		</div>
	) : (
		<div>
			<div className="main-detail-wrapper">
				<div>
					<img src={Poster} />
				</div>
				<div className="detail-wrapper">
					<div>
						<h1>{Title}</h1>
						<p>{Plot}</p>
					</div>
					<div>
						<p>
							<span className="subtitle">Director</span>:{" "}
							<span>{Director}</span>
						</p>
						<p>
							<span className="subtitle">Writer</span>:{" "}
							<span>{Writer}</span>
						</p>
						<p>
							<span className="subtitle">Cast and Crew</span>:{" "}
							<span>{Actors}</span>
						</p>
					</div>
				</div>
			</div>
			<div>
				<button
					type="button"
					className="btn btn-link"
					onClick={() => history.push("/")}
				>
					Back
				</button>
			</div>
		</div>
	);
		return <div>{render}</div>;
}

export default MovieDetail;
