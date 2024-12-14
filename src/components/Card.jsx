import React from "react";
import "../styles/Card.scss";
import ReactCardFlip from "react-card-flip";

function Card({ data, onFlip, disabled }) {
	const handleCardClick = () => {
		if (!disabled && !data.isFlipped) {
			onFlip();
		}
	};

	const cardClassName = `card ${data.isGuessed ? "guessed" : ""} ${disabled ? "disabled" : ""}`;

	return (
		<div className={cardClassName}>
			<ReactCardFlip isFlipped={data.isFlipped} flipDirection="horizontal">
				{/* Back side */}
				<img
					src={data.back_side}
					alt=""
					onClick={handleCardClick}
					style={{ cursor: disabled || data.isFlipped ? "default" : "pointer" }}
				/>

				{/* Front side */}
				<img src={data.front_side} alt="" style={{ cursor: "default" }} />
			</ReactCardFlip>
		</div>
	);
}

export default Card;
