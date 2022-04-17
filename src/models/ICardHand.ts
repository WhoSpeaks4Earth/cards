import { CSSProperties } from "react";
import { ICard } from "./ICard";
import { ICardTheme } from "./ICardTheme";

export interface ICardHand {
    cards: ICard[],
    activeIndex: number,
    dealStyles: CSSProperties[]
}

export interface ICardHandProps {
    hand: ICardHand,
    theme: ICardTheme,
    selection?: {activeIndex: number, onSelect: (index: number) => void}
}