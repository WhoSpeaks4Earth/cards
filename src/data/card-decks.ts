import { ICardDeck } from "../models/ICardDeck";
import { SpaceCatTheme, StocksTheme } from "./themes";

export const cardDecks: ICardDeck[] = [
    {
        name: "Space Cat",
        cards: [{
            title: "Some Cat",
            ranks: [5, 7, 3, 9]
        }],
        theme: SpaceCatTheme
    },
    {
        name: "Stocks",
        cards: [
            {
                title: "Tesla",
                ranks: [8, 7, 10, 9]
            },
            {
                title: "IBM",
                ranks: [8, 7, 10, 9]
            },
            {
                title: "Microsoft",
                ranks: [8, 7, 10, 9]
            },
            {
                title: "Apple",
                ranks: [8, 7, 10, 9]
            },
        ],
        theme: StocksTheme
    }
]