import { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import data from "./data/allCards";
import "./App.css";

function App() {
	const [cards, setCards] = useState(data.cards);

	return (
		<Container>
			<Row>
				{cards.map((card) => (
					<Col sm={2} key={card.id}>
						<img
							src={card.back_side}
							alt="back_side"
							style={{
								width: "100%",
								borderRadius: "8px",
								marginBottom: "16px",
								cursor: "pointer",
							}}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default App;
