import React from "react";
import {Link} from "react-router-dom";
import '../App.scss';
import Logo2 from'../Logo2.png';
import "./Game.scss";


function Game() {
    return (
        <div className={"logo-field"}>
            <img src={Logo2}/>
        <div className={"game-field"}>
            <Link exact to={"/game10xp"}>
                <button
                    className={"game-button"}
                    value={"10XP"}>5 min challenge <br/> Earn 10XP
                </button>
            </Link>
            <Link exact to={"/game20xp"}>
                <button
                    className={"game-button"}
                    value={"20XP"}>15 min challenge <br/> Earn 20XP
                </button>
            </Link>
            <Link exact to={"/game100xp"}>
                <button
                    className={"game-button"}
                    value={"100XP"}
                   >Day challenge <br/> Earn 100XP
                </button>
            </Link>
        </div>
    </div>
    )
}
export default Game;