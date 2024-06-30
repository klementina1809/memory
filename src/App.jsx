import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "./components/Card";
import data from "./data/allCards";
import "./App.css";

function App() {
	const [cards, setCards] = useState([]);
	const [flippedCount, setFlippedCount] = useState(0);

	useEffect(() => {
		setCards(shuffleArray(data.cards));
	}, []);

	useEffect(() => {
		const filteredCards = cards.filter((card) => card.isFlipped);
		const count = filteredCards.length;
		if (count % 2 === 0 && count !== 0) {
			handleControl(count, filteredCards);
		}
		setFlippedCount(count);
		console.log("count", count);
	}, [cards]);

	const handleControl = (count, filteredCards) => {
		const result =
			filteredCards[filteredCards.length - 1].name ===
			filteredCards[filteredCards.length - 2].name;
		console.log("result", result);
		setTimeout(() => {
			setCards((prevCards) =>
				prevCards.map((card) =>
					card.id === filteredCards[filteredCards.length - 1].id ||
					card.id === filteredCards[filteredCards.length - 2].id
						? { ...card, isFlipped: result }
						: card
				)
			);
		}, 1000);
	};

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

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
