import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../App.scss';
import Logo2 from'../Logo2.png';
import "./Game.scss";
import "./ProgressBar.scss";
import { ProgressBar } from '@adobe/react-spectrum';

function Game() {

    return (
        <div className={"logo-field"}>
            {/*<ProgressBar label="Loading…" minValue={0} maxValue={1000} value={100} />*/}
            <img src={Logo2} alt={"logo"}/>
            <div className={"game-field"}>
                <Link exact to={"/game10xp"}>
                <button
                    onClick={useEffect}
                    className={"game-button"}
                    value={10}>5 min challenge <br/> Earn 10XP
                </button>
            </Link>
            <Link exact to={"/game20xp"}>
                <button
                    onClick={useEffect}
                    className={"game-button"}
                    value={20}>15 min challenge <br/> Earn 20XP
                </button>
            </Link>
            <Link exact to={"/game100xp"}>
                <button
                    onClick={useEffect}
                    className={"game-button"}
                    value={100}
                   >Day challenge <br/> Earn 100XP
                </button>
            </Link>
        </div>
    </div>
    )
}
export default Game;