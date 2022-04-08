import { ReactChild } from "react"
import "./selection.css"

export const Selection = (props: {children: ReactChild | ReactChild[]}) => {

    return (
        <div className="selection">
            {props.children}
        </div>
    )
}