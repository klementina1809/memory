import { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Card from "./components/Card";
import data from "./data/allCards";
import "./App.css";

function App() {
	const [cards, setCards] = useState(data.cards);

	return (
		<Container>
			<Row>
				{cards.map((card) => (
					<Col sm={2} key={card.id}>
						<Card data={card} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default App;
