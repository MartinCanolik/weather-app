import React from "react";
import SearchBar from "./SearchBar.jsx";

import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<Link to='/'>
				<span id='brand' className='navbar-brand mb-0 h1'>
					{" "}
					Weather App
				</span>
			</Link>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
