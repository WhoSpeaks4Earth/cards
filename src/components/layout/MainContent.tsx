import { ReactNode } from "react"


export const MainContent = (props: {children: ReactNode}) => {

    return (
        <div className="main-content">
            {props.children}
        </div>
    )
}