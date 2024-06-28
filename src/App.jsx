import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "./components/Card";
import data from "./data/allCards";
import "./App.css";

function App() {
	const [cards, setCards] = useState(data.cards);
	const [flippedCount, setFlippedCount] = useState(0);

	const handleControl = (count, filteredCards) => {
		if (count === 2) {
			const result = filteredCards[0].name === filteredCards[1].name;
			console.log("result", result);
			setTimeout(() => {
				setCards((prevCards) =>
					prevCards.map((card) =>
						card.id === filteredCards[0].id ||
						card.id === filteredCards[1].id
							? { ...card, isFlipped: result }
							: card
					)
				);
			}, 1000);
		}
	};

	useEffect(() => {
		const filteredCards = cards.filter((card) => card.isFlipped);
		const count = filteredCards.length;
		handleControl(count, filteredCards);

		setFlippedCount(count);
		console.log("count", count);
	}, [cards]);

	const handleFlip = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

	return (
		<Container>
			<Row>
				{cards.map((card) => (
					<Col sm={2} key={card.id}>
						<Card data={card} onFlip={() => handleFlip(card.id)} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default App;
