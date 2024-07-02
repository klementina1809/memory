import React from "react";
import "../styles/Card.scss";

function Card({ data, onFlip }) {
	return (
		<div className="card" onClick={onFlip}>
			<img
				src={data.isFlipped ? data.front_side : data.back_side}
				alt=""
			/>
		</div>
	);
}

export default Card;
