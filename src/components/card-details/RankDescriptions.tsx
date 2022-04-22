import { ICardProps } from "../../models/ICard"
import { Card } from "../card/Card"
import "./rankDescriptions.css";


export const RankDescriptions = (props: ICardProps) => {

    return (
        <div className="rank-descriptions">
            <div className="top-row">
                <p><strong>Materials</strong> Jupiter has a basic composition of materials, namely hydrogen and helium</p>
            </div>
            <div className="bottom-row">
                <div className="left-side-contents">
                    <p><strong>Mass</strong> The solar system's 2nd most massive object</p>
                    <p><strong>Speed</strong> Jupiter's clouds zip around at an astonishing 28,000 miles per hour</p>
                </div>
                
                <Card card={props.card} theme={props.theme} />

                <div className="right-side-contents">
                    <p><strong>Size</strong> Similar to it's mass, Jupiter is second largest in size, just behind the sun</p>
                </div>
            </div>
        </div>
    )
}