import { ReactChild }  from "react";
import './layout.css';


export const Layout = (props: { children: ReactChild}) => {

    const main = props.children;

    return (
        <div className="layout-container">
            {main}
        </div>
    )
}