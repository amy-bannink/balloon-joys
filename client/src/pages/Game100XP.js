import React, {useEffect, useState} from "react";
import "./Game.scss";
import Logo2 from "../Logo2.png";
import {FiCheckSquare} from "react-icons/fi";
import {IconContext} from "react-icons";

function Game10XP() {
    const [difficultChallenges, setDifficultChallenges] = useState(["difficultChallenge 1", "difficultChallenge 1","difficultChallenge 2", "difficultChallenge 3", "difficultChallenge 4", "difficultChallenge 5", "difficultChallenge 6", "difficultChallenge 7", "difficultChallenge 8", "difficultChallenge 9", "difficultChallenge 10",])
    const [difficultPickedChallenge, setDifficultPickedChallenge] = useState(null);
    useEffect(() =>  {
        const randomChallenge = difficultChallenges[Math.floor(Math.random() * difficultChallenges.length)];
        setDifficultPickedChallenge(randomChallenge);
    });


    return (
        <div className={"logo-field"}>
            <img src={Logo2}/>
            <div className={"challenge-card"}>
                <h1 className={"card-header"}>5 minute challenge</h1>
                {difficultPickedChallenge !== null &&
                <p id="generate-challenge" className={"card-text"}> {difficultPickedChallenge}</p>}
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
