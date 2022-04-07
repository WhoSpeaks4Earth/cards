import { ICard } from "./ICard";
import { ICardTheme } from "./ICardTheme";

export interface ICardDeck {
    name: string,
    cards: ICard[],
    theme: ICardTheme
}