import { ICardProps } from "../../models/ICard";
import { RankDescriptions } from "./RankDescriptions";
import "./cardDetails.css";

export const CardDetails = (props: ICardProps) => {

    return (
        <div className="card-details">
            <div className="title-description">
                <h2>{props.card.title}</h2>
                <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after
                     the Moon and Venus, and it has been observed since prehistoric times. It was named after the Roman god Jupiter, the king of... 
                     <a href="#">read more</a></p>
            </div>

            <RankDescriptions {...props} />

        </div>
    )
}