import React,{useState} from "react";
import MovieListWrapper from "../src/components/MovieListWrapper";
import Search from "../src/components/Search";
import { Router, Switch, Route } from "react-router-dom";
import history from "./router/history";
import MovieDetail from "../src/components/MovieDetail";
import Pagination from "../src/components/Pagination";
import { searchMovie } from "./actions/index"
import {useSelector, useDispatch} from 'react-redux';
import Loader from "../src/components/Loader/Loader";

const App = () => {
	const { loading, error, movies, totalResults } = useSelector((state) => state);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useDispatch();

	function searchHandler (e){
		e.preventDefault();
		if (searchTerm) {
			setCurrentPage(1)
			fetchMovies();
		}
	}
	function paginationHandler(pageNo) {
		fetchMovies(pageNo);
		setCurrentPage(pageNo);
	}

	async function fetchMovies(pageNo = 1) {
		await dispatch(searchMovie(searchTerm, pageNo));
	}

	function changeHandler(e) {
		setSearchTerm(e.target.value);
		searchHandler(e)
	}

	const viewToRender =
			loading && !error ? (
				<Loader/>
			) : error ? (
				<div className="error-message">{error}</div>
			) : (
				<div>
					<MovieListWrapper movies={movies} />
					<Pagination
						totalResults={totalResults}
						paginationHandler={paginationHandler}
						currentPage={currentPage}
					/>
				</div>
			);
  return (
			<div className="container">
				<Router history={history}>
					<Switch>
						<Route path="/" exact>
							<Search
								value={searchTerm}
								changeHandler={changeHandler}
								searchHandler={searchHandler}
							/>
							{viewToRender}
						</Route>
						<Route path="/:imdbID" exact>
							<MovieDetail />
						</Route>
					</Switch>
				</Router>
			</div>
		);
}

export default App;
