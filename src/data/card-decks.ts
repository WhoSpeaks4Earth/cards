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
                ranks: [6, 5, 7, 7]
            },
            {
                title: "Microsoft",
                ranks: [7, 9, 5, 10]
            },
            {
                title: "Apple",
                ranks: [10, 8, 8, 5]
            },
        ],
        theme: StocksTheme
    }
]