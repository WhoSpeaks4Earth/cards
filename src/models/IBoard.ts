import { ICard } from "./ICard"
import { ICardTheme } from "./ICardTheme"

export interface IBoardCell {
    card: ICard | null
}

export interface IBoard {
    cells: IBoardCell[][]
}

export interface IBoardProps {
    board: IBoard,
    cardTheme: ICardTheme,
    isClickable: boolean,
    onCellClick: (position: [number, number]) => void
}