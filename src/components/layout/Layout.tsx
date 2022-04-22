import { ReactChild }  from "react";
import './layout.css';


export const Layout = (props: { children: ReactChild}) => {

    return (
        <div className="layout-container">
            {props.children}
        </div>
    )
}