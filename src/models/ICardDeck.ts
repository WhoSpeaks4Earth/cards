import { ICard } from "./ICard";
import { ICardTheme } from "./ICardTheme";
import { IGameTableTheme, IPanelTheme } from "./IGameTableTheme";

export interface ICardDeck {
    name: string,
    cards: ICard[],
    theme: {card: ICardTheme, table: IGameTableTheme, panel: IPanelTheme}
}