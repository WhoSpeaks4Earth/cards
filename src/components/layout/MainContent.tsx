import { ReactNode } from "react"


export const MainContent = (props: {children: ReactNode}) => {

    return (
        <>
            {props.children}
        </>
    )
}