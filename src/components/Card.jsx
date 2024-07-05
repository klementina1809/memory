import React from "react";
import "../styles/Card.scss";

function Card({ data, onFlip, disabled }) {
    const handleCardClick = () => {
        if (!disabled) {
            onFlip();
        }
    };

    const cardClassName = `card ${data.isGuessed ? "guessed" : ""} ${disabled ? "disabled" : ""}`;

    return (
        <div className={cardClassName} onClick={handleCardClick}>
            <img
                src={data.isFlipped ? data.front_side : data.back_side}
                alt=""
            />
        </div>
    );
}

export default Card;
