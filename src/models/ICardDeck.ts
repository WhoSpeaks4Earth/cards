import { ICard } from "./ICard";

export interface ICardTheme {
    backImg: string,
    frontImg: string
    fontColor: 'black' | 'white'
}

export interface CardDeck {
    name: string,
    cards: ICard[],
    theme: ICardTheme
}