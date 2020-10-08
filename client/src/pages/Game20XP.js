import React from "react";
import "./Game.scss";
import Logo2 from "../Logo2.png";

function Game20XP() {
    return(
        <div className={"logo-field"}>
            <img src={Logo2}/>
        <div className={"challenge-card"}>
            <h1 className={"card-header"}>5 minute challenge</h1>
            <p className={"card-text"}> This is your first challenge test test test nog iets en ik blijf even doortypen want ik moet kunnen zien hoe het eruit ziet. ook kan het dat er soms lange uitleg moet staan, want ze moeten de oefeningen wel kunnen gebrijpen natuurlijk</p>
            <hr className={"card-divider"}/>
            <p className={"card-text"}>This is your explanation so this i what you would do if you could just trust me honsetly that would be great thanks im a bitch yeah</p>
        </div>
        </div>
    );
}

export default Game20XP;