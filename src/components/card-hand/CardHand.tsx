import { ICardHand } from "../../models/ICardHand";
import { ICardTheme } from "../../models/ICardTheme"
import { Card } from "../card/Card"
import './cardHand.css';


export const CardHand = (props: {hand: ICardHand, theme: ICardTheme}) => {

    return (
        <div className="card-hand">
            {
                props.hand.cards.map((card, i) => (
                    <div key={card.title + i} style={props.hand.dealStyles[i]}>
                        <Card card={card} theme={props.theme}/>
                    </div>
                ))
            }
        </div>
    )
}