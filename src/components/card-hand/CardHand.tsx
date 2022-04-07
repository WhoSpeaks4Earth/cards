import { ICard } from "../../models/ICard"
import { ICardTheme } from "../../models/ICardTheme"
import { Card } from "../card/Card"
import './cardHand.css';


export const CardHand = (props: {cards: ICard[], theme: ICardTheme}) => {

    return (
        <div className="card-hand">
            {
                props.cards.map((card, i) => (
                    <Card key={card.title + i} card={card} theme={props.theme} />
                ))
            }
        </div>
    )
}