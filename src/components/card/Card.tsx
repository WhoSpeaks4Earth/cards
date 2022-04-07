

import { CardRanks } from './CardRanks';
import { ICard } from '../../models/ICard';
import './card.css';

export const Card = (props: {card: ICard}) => {

    return (
        <div className='card'>
            <div className='back'>
                <div className='front'>
                    <div className='header'>
                        <CardRanks ranks={props.card.ranks} />
                    </div>
                    
                    <div className='footer'>
                        <div className='title'>{props.card.title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}