import { CSSProperties } from "react";
import { ICard } from "./ICard";

export interface ICardHand {
    cards: ICard[],
    dealStyles: CSSProperties[]
}