import { ICardDeck } from "../models/ICardDeck";
import { SpaceCatTheme } from "./themes";

export const cardDecks: ICardDeck[] = [
    {
        name: "Space Cat",
        cards: [{
            title: "Some Cat",
            ranks: [5, 7, 3, 9]
        }],
        theme: SpaceCatTheme
    }
]