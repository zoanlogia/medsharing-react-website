import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ServicesCard from "./ServicesCard.jsx";

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <ServicesCard onClick={handleClick} >
                
                
            </ServicesCard>

            <ServicesCard onClick={handleClick}>
                
                
            </ServicesCard>
        </ReactCardFlip>
    );
}

export default FlipCard;
