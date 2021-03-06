import { ICard } from "./ICard";
import { ICardTheme } from "./ICardTheme";
import { IGameTableTheme, IPanelTheme } from "./IGameTableTheme";

export type cardCategory = 'educational' | 'current-events' | 'silly' | 'sports';

export interface ICardDeck {
    name: string,
    categories: cardCategory[],
    description: string,
    cards: ICard[],
    theme: {card: ICardTheme, table: IGameTableTheme, panel: IPanelTheme}
}