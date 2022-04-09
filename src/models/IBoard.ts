import { ICard } from "./ICard"

export interface IBoardCell {
    card: ICard | null
}

export interface IBoard {
    cells: IBoardCell[][]
}