import React from "react";
import "../../pages/Home.scss"

const Square = ({value, onClick}) => {
    return (
        <button onClick={onClick}>
            {value}
        </button>
    )

}

export default Square;