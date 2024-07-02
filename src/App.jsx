import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data/allCards";
import "./App.css";

function App() {
	const [cards, setCards] = useState([]);
	const [count, setCount] = useState(0);
	const [flippedCards, setFlippedCards] = useState([]);

	useEffect(() => {
		setCards(shuffleArray([...data.cards]));
	}, []);

	useEffect(() => {
		if (flippedCards.length === 2) {
			const [firstCard, secondCard] = flippedCards;
			if (firstCard.name === secondCard.name) {
				setCards((prevCards) =>
					prevCards.map((card) =>
						card.name === firstCard.name
							? { ...card, isGuessed: true }
							: card
					)
				);
			} else {
				setTimeout(() => {
					setCards((prevCards) =>
						prevCards.map((card) =>
							card.id === firstCard.id ||
							card.id === secondCard.id
								? { ...card, isFlipped: false }
								: card
						)
					);
				}, 1000);
			}
			setFlippedCards([]);
		}
	}, [flippedCards, cards]);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const handleFlip = (id) => {
		setCount((prev) => prev + 1);
		setCards((prevCards) =>
			prevCards.map((card) =>
				card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
			)
		);
		const flippedCard = cards.find((card) => card.id === id);
		setFlippedCards((prev) => [...prev, flippedCard]);
	};

	return (
		<Container>
			<Row>
				<Header count={count} />
			</Row>
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
