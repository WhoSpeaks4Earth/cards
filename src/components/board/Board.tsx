import { IBoard } from '../../models/IBoard';
import './board.css';

export const Board = (props: {board: IBoard}) => {

    return (
        <div className="board">
            <div className="board-cells">
                board cells
            </div>
            <div className="board-status-panel">
                status panel
            </div>
        </div>
    )
}