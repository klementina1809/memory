import React from "react";

function Card({ data, onFlip }) {
	return (
		<div className="card" onClick={onFlip}>
			<img
				src={data.isFlipped ? data.front_side : data.back_side}
				alt=""
				style={{
					width: "100%",
					borderRadius: "8px",
					marginBottom: "16px",
					cursor: "pointer",
				}}
			/>
		</div>
	);
}

export default Card;
