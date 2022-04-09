import { ICardDeck } from "../../../models/ICardDeck"
import { Deck } from "../../deck/Deck"
import "./deckSelection.css"

export const DeckSelection = (props: {decks: ICardDeck[], onDeckSelected: any}) => {

    return (
        <div className="deck-selection">
            <h1 style={{marginLeft: '2rem'}}>Select a deck</h1>
            <div className="decks-list">
                {
                    props.decks.map(deck => (
                        <div key={deck.name} onClick={() => props.onDeckSelected(deck)}>
                            <Deck deck={deck} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}