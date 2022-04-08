import { ReactChild } from "react"
import { IGameTableTheme } from "../../models/IGameTableTheme"
import "./gameTable.css"

export const GameTable = (props: {children: ReactChild[], theme: IGameTableTheme}) => {

    return (
        <div
            className="game-table" 
            style={{
                backgroundColor: props.theme.bgColor,
            }}>
             {props.children}
        </div>
    )
}