import { IBoardProps } from '../../models/IBoard';
import { Card } from '../card/Card';
import './board.css';

export const Board = (props: IBoardProps) => {

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
                                        <div key={`${xIndex}${yIndex}`} className="cell" onClick={() => props.onCellClick([xIndex, yIndex])}>
                                            {/* {xIndex}, {yIndex} */}
                                        </div>
                                    )                                    
                                })
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}