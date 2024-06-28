import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "./components/Card";
import data from "./data/allCards";
import "./App.css";

function App() {
	const [cards, setCards] = useState(data.cards);
	const [flippedCount, setFlippedCount] = useState(0);

	useEffect(() => {
		const filteredCards = cards.filter((card) => card.isFlipped);
		const count = filteredCards.length;

		if (count === 2) {
			const result = filteredCards[0].name === filteredCards[1].name;
			console.log("result", result);
		}
		setFlippedCount(count);
		console.log("count", count);
	}, [cards]);

	return (
		<Container>
			<Row>
				{cards.map((card) => (
					<Col sm={2} key={card.id}>
						<Card data={card} setCards={setCards} cards={cards} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default App;
