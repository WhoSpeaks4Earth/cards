import { IBoard, IBoardCell } from "../models/IBoard";
import { ICard } from "../models/ICard";


export class BoardService {

    public createBoard(xCellCount: number, yCellCount: number): IBoard {
        const cells = [];
        const defaultCellValue = {card: null};

        for (let y = 0; y < yCellCount; y++) {
            const row = [];
            for (let x = 0; x < xCellCount; x++) {
                row.push(defaultCellValue);
            }
            cells.push(row);
        }

        return {cells: cells}
    }

    public isBoardFull = (board: IBoard): boolean => {
        const emptyCell = this.getEmptyCell(board.cells);
        if (emptyCell)
            return false;
        return true; 
    }

    public getEmptyCell = (cells: IBoardCell[][]): [number, number] | null => {
        let emptyCell: [number, number] | null = null;
        rows:
        for (let y = 0; y < cells.length; y++) {
            for (let x = 0; x < cells[y].length; x++) {
                if (!cells[x][y].card) {
                    emptyCell = [x, y];
                    break rows;
                }
            }
        }

        return emptyCell;
    }

    public getBestMove(board: IBoard, cards: ICard[]): [[number, number], ICard] {
        const [cell, cardToPlay] = [[0,0] as [number, number], cards[0]];

        return [cell, cardToPlay];
    }

    public getNewBoardFromMove = (board: IBoard, cell: [number, number], cardToPlay: ICard): IBoard => {
        const newBoard = {...board};
        return newBoard;
    }
}