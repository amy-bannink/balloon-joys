import React from 'react';

const Button = ({ buttonType , clickHandler, label  }) => {

    return(
        <button
            type={"button"}
            className={buttonType}
            onClick={() => clickHandler()}
                >{label}</button>
       );
}
//<button onClick={props.onClick}>{props.label}</button>


export default Button;