import { ICard } from "../../../models/ICard"
import { ICardDeck } from "../../../models/ICardDeck"
import { CardHand } from "../../card-hand/CardHand"
import { Card } from "../../card/Card"
import { SidePanel } from "../../layout/SidePanel"
import "./cardSelection.css"


export const CardSelection = (props: {deck: ICardDeck, playerHand: ICard[], maxCards: number, onCardClick: any, onStartRoundClick: any}) => {

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
            <div className="left-side">
                <h1>{props.deck.name}</h1>
                <div className="cards-list">
                    {props.deck.cards.map(card => (
                        <div key={card.title} onClick={() => props.onCardClick(card)}>
                            <Card card={card} cssClass={getCss(card)} theme={props.deck.theme.card} />
                        </div>
                    ))}
                </div>
                <button
                    disabled={props.playerHand.length < props.maxCards}
                    onClick={props.onStartRoundClick}
                    className='primary-btn'>
                    Start Round
                </button>
            </div>

            <SidePanel theme={props.deck.theme.panel}>
              <CardHand cards={props.playerHand} theme={props.deck.theme.card} />
            </SidePanel>
        </div>
    )
}