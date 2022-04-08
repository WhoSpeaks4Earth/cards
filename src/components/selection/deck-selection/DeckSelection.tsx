import { ICardDeck } from "../../../models/ICardDeck"
import { Deck } from "../../deck/Deck"
import "./deckSelection.css"

export const DeckSelection = (props: {decks: ICardDeck[], onDeckSelected: any}) => {

    return (
        <div className="deck-selection">
            <div onClick={() => props.onDeckSelected(props.decks[0])}>
                <Deck />
            </div>
        </div>
    )
}