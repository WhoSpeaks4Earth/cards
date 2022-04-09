import { IBoard } from "../models/IBoard";


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
}