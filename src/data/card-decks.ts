import { ICardDeck } from "../models/ICardDeck";
import { SpaceCatTheme, SpaceTableTheme, SpaceTheme, StocksTheme } from "./themes";

export const cardDecks: ICardDeck[] = [
    {
        name: "Solar System",
        description: "A card deck that includes objects from our Solar System. Objects are ranked in categories of mass, size, material, and speed.",
        cards: [
            {
                title: "Jupiter",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Mars",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Earth",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Sun",
                ranks: [5, 7, 3, 10]
            },
            {
                title: "Saturn",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Neptune",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Venus",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Europa",
                ranks: [5, 7, 3, 9]
            },
        ],
        theme: {card: SpaceTheme, table: SpaceTableTheme, panel: {bgColor: "rgba(0,0,0,0.5)"} }
    },
    {
        name: "Space Cat",
        description: "A card deck of cats in space. These cat-dets are ranked in categories of fiestiness, cuddliness, purr, and fur.",
        cards: [
            {
                title: "The Fuzz",
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
        theme: {card: SpaceCatTheme, table: SpaceTableTheme, panel: {bgColor: "rgba(0,0,0,0.5)"} }
    },
    {
        name: "Stocks",
        description: "A card deck including most of the companies in the S&P 500. Stay familiar with current stock performance of companies, updated quarterly. Acheive the strongest cards and see how they change over time!",
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
        theme: {card: StocksTheme, table: SpaceTableTheme, panel: {bgColor: "rgba(0,0,0,0.5)"} }
    }
]