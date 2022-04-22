import { ReactChild, ReactChildren } from "react"
import "./layout.css";


export const CenterPiece = (props:{children: ReactChild[]}) => {

    return (
        <div className="center-piece">
            {props.children}
        </div>
    )
}