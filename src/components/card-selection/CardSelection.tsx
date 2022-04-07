import { ICardDeck } from "../../models/ICardDeck"
import { Card } from "../card/Card"
import "./cardSelection.css"


export const CardSelection = (props: {deck: ICardDeck, onCardClick: any}) => {

    return (
        <div className="card-selection">
            <h1>Select your cards</h1>

            <div className="cards-list">
                {props.deck.cards.map(card => (
                    <div key={card.title} onClick={() => props.onCardClick(card)}>
                        <Card card={card} cssClass={'clickable'} theme={props.deck.theme} />
                    </div>
                ))}
            </div>
        </div>
    )
}