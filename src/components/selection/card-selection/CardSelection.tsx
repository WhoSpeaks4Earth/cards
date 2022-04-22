import { GAME_SETTINGS } from "../../../data/game-settings"
import { ICard } from "../../../models/ICard"
import { ICardDeck } from "../../../models/ICardDeck"
import { ICardHand } from "../../../models/ICardHand"
import { CardHand } from "../../card-hand/CardHand"
import { Card } from "../../card/Card"
import { SidePanel } from "../../layout/SidePanel"
import "./cardSelection.css"


export const CardSelection = (props: {
    deck: ICardDeck,
    playerHand: ICardHand,
    onCardClick: any,
    onStartGameClick: any
}) => {

    const getClickableSelectableCss = (card: ICard): string => {
        const existingCard = props.playerHand.cards.find(c => c.title === card.title);
        if (existingCard)
            return 'selected clickable';
        if (props.playerHand.cards.length < GAME_SETTINGS.MAX_CARDS_PER_HAND)
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
                            <Card card={card} cssClasses={getClickableSelectableCss(card)} theme={props.deck.theme.card} />
                        </div>
                    ))}
                </div>
                <button
                    disabled={props.playerHand.cards.length < GAME_SETTINGS.MAX_CARDS_PER_HAND}
                    onClick={props.onStartGameClick}
                    className='primary-btn'>
                    Start
                </button>
            </div>

            <SidePanel theme={props.deck.theme.panel}>
              <CardHand hand={props.playerHand} theme={props.deck.theme.card} />
            </SidePanel>
        </div>
    )
}