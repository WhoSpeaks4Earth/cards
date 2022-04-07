import { CardRanks } from './CardRanks';
import { ICard } from '../../models/ICard';
import { ICardTheme } from '../../models/ICardTheme';
import './card.css';


export const Card = (props: {card: ICard, cssClass?: string, theme: ICardTheme}) => {

    const getFrontStyle = () => ({
        backgroundImage: props.theme.frontImg,
        color: props.theme.fontColor
    });
    const getBackStyle = () => ({backgroundImage: props.theme.backImg});

    return (
        <div className={'card ' + (props.cssClass ? props.cssClass : '')}>
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