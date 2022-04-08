import { ICardDeck } from "./ICardDeck";


export type gameView = 'select-deck' | 'select-cards' | 'active-game';

export interface IGame {
    deck: ICardDeck,
    view: gameView
}