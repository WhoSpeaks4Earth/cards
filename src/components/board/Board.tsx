import { IBoard } from '../../models/IBoard';
import { ICardTheme } from '../../models/ICardTheme';
import { Card } from '../card/Card';
import './board.css';

export const Board = (props: {board: IBoard, cardTheme: ICardTheme}) => {

    return (
        <div className="board">
            <div className="cells">
                {
                    props.board.cells.map((row, yIndex) => (
                        <div key={yIndex} className="cells-row">
                            {
                                row.map((cell, xIndex) => {
                                    const card = props.board.cells[yIndex][xIndex].card;
                                    return card ? <Card key={`${xIndex}${yIndex}`} card={card} theme={props.cardTheme} /> :
                                    (
                                        <div key={`${xIndex}${yIndex}`} className="cell">
                                            {/* {xIndex}, {yIndex} */}
                                        </div>
                                    )                                    
                                })
                            }
                        </div>
                    ))
                }
            </div>

            <div className="status-panel">
                {/* status panel */}
            </div>
        </div>
    )
}