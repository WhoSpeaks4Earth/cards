import { ReactNode } from "react"
import { IPanelTheme } from "../../models/IGameTableTheme"
import "./layout.css"


export const SidePanel = (props: { children: ReactNode, theme: IPanelTheme }) => {


    return (
        <div className="side-panel" style={{background: props.theme.bgColor}}>{props.children}</div>
    )
}