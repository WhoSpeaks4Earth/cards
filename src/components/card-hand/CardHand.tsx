import { ICardHandProps } from "../../models/ICardHand";
import { Card } from "../card/Card"
import './cardHand.css';


export const CardHand = (props: ICardHandProps) => {

    const getCssClasses = (cardIndex: number) => {
        let css = '';
        const selection = props.selection;

        if (selection) {
            css += 'selectable ';

            if (selection.activeIndex === cardIndex) {
                css += 'active ';
            }
        }
        
        return css;
    }

    return (
        <div className="card-hand">
            {
                props.hand.cards.map((card, i) => (
                    <div
                        key={card.title + i} 
                        style={props.hand.dealStyles[i]} 
                        className={getCssClasses(i)}
                        onClick={() => props.selection?.onSelect(i)}>
                        <Card card={card} theme={props.theme}/>
                    </div>
                ))
            }
        </div>
    )
}