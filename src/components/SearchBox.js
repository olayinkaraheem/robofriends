import React from 'react';

const SearchBox = ({ onSearchChange })=> {
	console.log('SearchBox')
	// OR { onSearchChange } = props    when you pass in props as arg
	return (
		<div className="pa2">
		<input type="search" placeholder="search robots" className="pa3 ba b--green bg-lightest-blue" onChange={onSearchChange}/>
		</div>
	)
}

export default SearchBox;