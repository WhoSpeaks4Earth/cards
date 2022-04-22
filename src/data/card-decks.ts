import { ICardDeck } from "../models/ICardDeck";
import { BasketBallTheme, SpaceCatTheme, SpaceTableTheme, SpaceTheme, StocksTheme } from "./themes";

export const cardDecks: ICardDeck[] = [
    {
        name: "Solar System",
        categories: ["educational"],
        description: "Notable objects from our Solar System. Objects are ranked in categories of mass, size, material, and speed.",
        cards: [
            {
                title: "Jupiter",
                ranks: [2, 9, 7, 9]
            },
            {
                title: "Mars",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Earth",
                ranks: [4, 6, 8, 4]
            },
            {
                title: "Sun",
                ranks: [10, 7, 3, 10]
            },
            {
                title: "Saturn",
                ranks: [6, 3, 1, 8]
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
        name: "Space Cats",
        categories: ["silly"],
        description: "Cats in space. These cat-dets are ranked in categories of fiestiness, cuddliness, purr, and fur.",
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
        categories: ["current-events", "educational"],
        description: "Includes the top performing companies in the S&P 500. Card ranks are updated quarterly based on company performance. Acheive the strongest cards and see how they change over time!",
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
    },
    {
        name: "March Madness",
        categories: ["current-events", "sports"],
        description: "Stay up-to-date with team performances. Card ranks updated nightly.",
        cards: [
            {
                title: "Kansas",
                ranks: [8, 7, 10, 9]
            },
            {
                title: "UNC",
                ranks: [6, 5, 7, 7]
            },
            {
                title: "Duke",
                ranks: [7, 9, 5, 10]
            },
            {
                title: "Villanova",
                ranks: [10, 8, 8, 5]
            },
            {
                title: "Saint Peters",
                ranks: [8, 7, 10, 9]
            },
            {
                title: "Arkansas",
                ranks: [6, 5, 7, 7]
            },
            {
                title: "Miami",
                ranks: [7, 9, 5, 10]
            },
            {
                title: "Michigan",
                ranks: [10, 8, 8, 5]
            },
        ],
        theme: {card: BasketBallTheme, table: SpaceTableTheme, panel: {bgColor: "rgba(0,0,0,0.5)"} }
    }
]