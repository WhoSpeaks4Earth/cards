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
}