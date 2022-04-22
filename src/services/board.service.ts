import { IBoard, IBoardCell } from "../models/IBoard";


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
        let hasEmptyCell = false;

        rows:
        for (let y = 0; y < board.cells.length; y++) {
            cells:
            for (let x = 0; x < board.cells[y].length; x++) {
                if (!board.cells[x][y].card) {
                    hasEmptyCell = true;
                    break rows;
                }
            }
        }

        return !hasEmptyCell;
    }
}