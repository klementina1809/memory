import { useState } from "react";

function Card({ data, setCards, cards }) {
	const handleFlip = () => {
		setCards(
			cards.map((card) =>
				card.id === data.id
					? { ...card, isFlipped: !card.isFlipped }
					: card
			)
		);
	};

	return (
		<div className="card">
			<img
				onClick={handleFlip}
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
