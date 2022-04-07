import { ICardDeck } from "../models/ICardDeck";
import { SpaceCatTheme, StocksTheme } from "./themes";

export const cardDecks: ICardDeck[] = [
    {
        name: "Space Cat",
        cards: [
            {
                title: "Smokey",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Ashes",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Stinky",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "TyGuy",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Charles",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Frank",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Sum Cat",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Cat5",
                ranks: [5, 7, 3, 9]
            },
        ],
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
            {
                title: "Johnson & Johnson",
                ranks: [8, 7, 10, 9]
            },
            {
                title: "Costco",
                ranks: [6, 5, 7, 7]
            },
            {
                title: "Visa",
                ranks: [7, 9, 5, 10]
            },
            {
                title: "Honeywell",
                ranks: [10, 8, 8, 5]
            },
        ],
        theme: StocksTheme
    }
]