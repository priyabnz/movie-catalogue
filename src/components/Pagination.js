import React from "react";

const RESULT_PER_PAGE = 10;

const Pagination = (props) => {

	function pageNumberClicked(pageNo) {
		props.paginationHandler(pageNo);
	}

	function preparePaginationView() {
		const noOfPages = Math.ceil(props.totalResults / RESULT_PER_PAGE);

		const itemsToRender = [];
		for (let i = 1; i <= noOfPages; i++) {
			let styleClass = "page-item";
			styleClass += props.currentPage === i ? " active" : "";

			itemsToRender.push(
				<li className={styleClass}
					key={`${i}-link`}
					onClick={() => pageNumberClicked(i)}
				> <a className="page-link">{i}</a>
				</li>
			);
		}
		return itemsToRender;
	}

	const { totalResults } = props;

	if (!totalResults) {
		return null;
	}

	return (
		<nav className="overflow-auto" aria-label="Pagination">
			<ul className="pagination">{preparePaginationView()}</ul>
		</nav>
	);
}

export default Pagination;
