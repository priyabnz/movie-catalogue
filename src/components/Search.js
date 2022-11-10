import React from "react";

const Search = (props) => {
  return (
	<form onSubmit={e => props.searchHandler(e)} className="form">
		<input
			type="text"
			className="form-control"
			placeholder="Search movies by name..."
			value={props.value}
			onChange={e => props.changeHandler(e)}
			autoFocus
		/>
	</form>
  )
}
export default Search;
