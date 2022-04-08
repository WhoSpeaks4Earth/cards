import { ICardDeck } from "../models/ICardDeck";
import { SpaceCatTheme, SpaceTableTheme, StocksTheme } from "./themes";

export const cardDecks: ICardDeck[] = [
    {
        name: "Astronomy",
        cards: [
            {
                title: "Black Hole",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "White Dwarf",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Ptolemy",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Carl Sagan",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Huugens",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Amromeda",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Milky Way",
                ranks: [5, 7, 3, 9]
            },
            {
                title: "Kepler",
                ranks: [5, 7, 3, 9]
            },
        ],
        theme: {card: StocksTheme, table: SpaceTableTheme, panel: {bgColor: "rgba(0,0,0,0.5)"} }
    },
    // {
    //     name: "Space Cat",
    //     cards: [
    //         {
    //             title: "Smokey",
    //             ranks: [5, 7, 3, 9]
    //         },
    //         {
    //             title: "Ashes",
    //             ranks: [5, 7, 3, 9]
    //         },
    //         {
    //             title: "Stinky",
    //             ranks: [5, 7, 3, 9]
    //         },
    //         {
    //             title: "TyGuy",
    //             ranks: [5, 7, 3, 9]
    //         },
    //         {
    //             title: "Charles",
    //             ranks: [5, 7, 3, 9]
    //         },
    //         {
    //             title: "Frank",
    //             ranks: [5, 7, 3, 9]
    //         },
    //         {
    //             title: "Sum Cat",
    //             ranks: [5, 7, 3, 9]
    //         },
    //         {
    //             title: "Cat5",
    //             ranks: [5, 7, 3, 9]
    //         },
    //     ],
    //     theme: {card: SpaceCatTheme, table: SpaceTableTheme }
    // },
    // {
    //     name: "Stocks",
    //     cards: [
    //         {
    //             title: "Tesla",
    //             ranks: [8, 7, 10, 9]
    //         },
    //         {
    //             title: "IBM",
    //             ranks: [6, 5, 7, 7]
    //         },
    //         {
    //             title: "Microsoft",
    //             ranks: [7, 9, 5, 10]
    //         },
    //         {
    //             title: "Apple",
    //             ranks: [10, 8, 8, 5]
    //         },
    //         {
    //             title: "Johnson & Johnson",
    //             ranks: [8, 7, 10, 9]
    //         },
    //         {
    //             title: "Costco",
    //             ranks: [6, 5, 7, 7]
    //         },
    //         {
    //             title: "Visa",
    //             ranks: [7, 9, 5, 10]
    //         },
    //         {
    //             title: "Honeywell",
    //             ranks: [10, 8, 8, 5]
    //         },
    //     ],
    //     theme: {card: StocksTheme, table: SpaceTableTheme }
    // }
]