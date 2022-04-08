import { ReactChild } from "react"
import "./gameTable.css"

export const GameTable = (props: {children: ReactChild[]}) => {

    return (
        <div className="game-table">
             {props.children}
        </div>
    )
}