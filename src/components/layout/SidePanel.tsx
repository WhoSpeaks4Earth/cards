import { ReactNode } from "react"


export const SidePanel = (props: { children: ReactNode }) => {


    return (
        <div className="side-panel">{props.children}</div>
    )
}