import React from "react";
import "../styles/Header.scss";

function Header({ count }) {
	return (
		<div className="header">
			<img src="./assets/logo.png" alt="insideOut-logo" />
			<div>
				<span>Steps: </span> <span className="count">{count}</span>
			</div>
		</div>
	);
}

export default Header;
