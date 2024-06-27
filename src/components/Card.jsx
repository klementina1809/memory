import { useState } from "react";

function Card({ data }) {
	const [sideOfCard, setSideOfCard] = useState("back");

	const handleFlip = (data) => {
		console.log("data", data);
		sideOfCard === "back" ? setSideOfCard("front") : setSideOfCard("back");
	};

	return (
		<div className="card">
			<img
				onClick={(e) => handleFlip(e.target)}
				side={sideOfCard}
				src={sideOfCard === "back" ? data.back_side : data.front_side}
				alt="back_side"
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
