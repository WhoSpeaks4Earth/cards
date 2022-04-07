import { ReactChild }  from "react";
import './layout.css';


export const Layout = (props: { children: ReactChild[] }) => {

    const [leftSide, main, rightSide] = props.children;

    return (
        <div className="layout-container">
            <div className="layout">
                <div>
                    {leftSide}
                </div>
                <div className="main">
                    {main}
                </div>
                <div>
                    {rightSide}
                </div>
            </div>
        </div>
    )
}