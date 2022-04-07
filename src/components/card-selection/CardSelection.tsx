import { ICard } from "../../models/ICard"
import { ICardDeck } from "../../models/ICardDeck"
import { Card } from "../card/Card"
import "./cardSelection.css"


export const CardSelection = (props: {deck: ICardDeck, playerHand: ICard[], maxCards: number, onCardClick: any}) => {

    const getCss = (card: ICard): string => {
        const existingCard = props.playerHand.find(c => c.title === card.title);
        if (existingCard)
            return 'selected clickable';
        if (props.playerHand.length < 5)
            return 'clickable';
        return '';
    }


    return (
        <div className="card-selection">
            <h1>Select your cards</h1>

            <div className="cards-list">
                {props.deck.cards.map(card => (
                    <div key={card.title} onClick={() => props.onCardClick(card)}>
                        <Card card={card} cssClass={getCss(card)} theme={props.deck.theme} />
                    </div>
                ))}
            </div>
        </div>
    )
}