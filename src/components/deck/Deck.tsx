import { ICardDeck } from '../../models/ICardDeck';
import { Card } from '../card/Card';
import './deck.css';

export const Deck = (props: {deck: ICardDeck}) => {

    return (
        <div className="deck">
            <div className="description">
                <h4>{props.deck.name}</h4>
                <p>{props.deck.description}</p>
            </div>
            <div className="ranks-description">
                <Card card={props.deck.cards[0]} theme={props.deck.theme.card} />
            </div>
        </div>
    )
}