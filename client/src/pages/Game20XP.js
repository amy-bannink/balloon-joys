import React, {useEffect, useState} from "react";
import "./Game.scss";
import Logo2 from "../Logo2.png";
import {FiCheckSquare} from "react-icons/fi";
import {IconContext} from "react-icons";

function Game10XP() {
    const [mediumChallenges, setMediumChallenges] = useState(["mediumChallenge 1", "mediumChallenge 1","mediumChallenge 2", "mediumChallenge 3", "mediumChallenge 4", "mediumChallenge 5", "mediumChallenge 6", "mediumChallenge 7", "mediumChallenge 8", "mediumChallenge 9", "mediumChallenge 10",])
    const [mediumPickedChallenge, setMediumPickedChallenge] = useState(null);
    useEffect(() =>  {
        const randomChallenge = mediumChallenges[Math.floor(Math.random() * mediumChallenges.length)];
        setMediumPickedChallenge(randomChallenge);
    });


    return (
        <div className={"logo-field"}>
            <img src={Logo2}/>
            <div className={"challenge-card"}>
                <h1 className={"card-header"}>5 minute challenge</h1>
                {mediumPickedChallenge !== null &&
                <p id="generate-challenge" className={"card-text"}> {mediumPickedChallenge}</p>}
                <hr className={"card-divider"}/>
                <p className={"card-text"}>This is your explanation accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel</p>
                {/*<button onClick={randomGenerate}>generate</button>*/}
                {/*<p id={"challenge-generate-field"}/>*/}
                <br/>
                <IconContext.Provider value={{ className: 'icon-test'}}>
                    <FiCheckSquare/>
                </IconContext.Provider>
            </div>
        </div>
    )}
export default Game10XP;

