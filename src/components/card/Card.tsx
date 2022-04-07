import { CardRanks } from './CardRanks';
import { ICard } from '../../models/ICard';
import './card.css';
import { ICardTheme } from '../../models/ICardTheme';


export const Card = (props: {card: ICard, shouldFaceUp: boolean, theme: ICardTheme}) => {

    const getFrontStyle = () => ({
        backgroundImage: props.theme.frontImg,
        color: props.theme.fontColor,
        opacity: props.shouldFaceUp ? '1' : '0'
    });
    const getBackStyle = () => ({backgroundImage: props.theme.backImg});

    return (
        <div className='card'>
            <div className='back'
                style={getBackStyle()}>
                <div className='front'
                    style={getFrontStyle()}>
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