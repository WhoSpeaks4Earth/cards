import "./statusPanel.css";


export const StatusPanel = (props: {isPlayerTurn: boolean}) => {

    return (
        <div className="status-panel">
            { props.isPlayerTurn ? "Your turn!" : "opponent turn"}
        </div>
    )
}