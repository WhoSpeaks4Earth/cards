

export const Card = (props: {cssClass: string}) => {

    return (
        <div className="card-container">
            <div className={`card ${props.cssClass}`}>
                <div className="card-inner">
                <div className="card-front">
                    FRONT
                </div>
                </div>
            </div>
        </div>
    )
}