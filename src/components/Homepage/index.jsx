import { Children } from "react";

const CenteredCard = ({ name, status }) => {
    return(
        <div className="all">
            <h1 className="name">{name}</h1>
            <p className="status">{status}</p>
            {Children}
        </div>
    )
}

export default CenteredCard;