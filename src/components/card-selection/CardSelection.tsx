import { ICardDeck } from "../../models/ICardDeck"
import { Card } from "../card/Card"
import "./cardSelection.css"


export const CardSelection = (props: {deck: ICardDeck, onCardClick: any}) => {

    console.log(props)
    return (
        <div className="card-selection">
            <h1>Select your cards</h1>
            <div className="cards-list">
                {props.deck.cards.map(card => <Card key={card.title} card={card} theme={props.deck.theme} />)}
            </div>
        </div>
    )
}