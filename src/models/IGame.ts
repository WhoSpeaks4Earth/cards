import { IBoard } from "./IBoard";
import { ICardDeck } from "./ICardDeck";
import { ICardHand } from "./ICardHand";


export type gameView = 'select-deck' | 'select-cards' | 'active-game';

export interface IGame {
    deck: ICardDeck,
    view: gameView,
    playerHand: ICardHand,
    board: IBoard
}