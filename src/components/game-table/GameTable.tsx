import { ReactChild } from "react"

export const GameTable = (props: {children: ReactChild[]}) => {

    return (
        <div className="game-table">
             {props.children}
        </div>
    )
}