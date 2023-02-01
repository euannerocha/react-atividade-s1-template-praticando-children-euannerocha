import { Children } from "react";

const CenteredCard = ({ name, status }) => {
    return (
        <div className="all">
            <h1 className="name">{name}</h1>
            <p className="status">{status}</p>
            {status === 'Aprovado!' && Children}
            {status === 'Aprovada!' && Children}
        </div>
    )
}

export default CenteredCard;