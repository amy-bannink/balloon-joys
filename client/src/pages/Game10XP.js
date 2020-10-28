import React, {useEffect, useState} from "react";
import "./Game.scss";
import Logo2 from "../Logo2.png";
import {FiCheckSquare} from "react-icons/fi";
import {IconContext} from "react-icons";
import PublicIcon from '@material-ui/icons/Public';
import {RiGitRepositoryPrivateFill} from "react-icons/ri";
import {AiOutlineFileProtect} from "react-icons/ai";
import {FcDataProtection} from "react-icons/fc";
import {FaEye, FaEyeSlash} from "react-icons/fa";

function Game10XP() {
    const [easyChallenges, setEasyChallenges] = useState(["challenge 1", "challenge 1","challenge 2", "challenge 3", "challenge 4", "challenge 5", "challenge 6", "challenge 7", "challenge 8", "challenge 9", "challenge 10",])
    const [easyPickedChallenge, setEasyPickedChallenge] = useState(null);
    useEffect(() =>  {
            const randomChallenge = easyChallenges[Math.floor(Math.random() * easyChallenges.length)];
            setEasyPickedChallenge(randomChallenge);
    });

    // const completeChallenge = (e) => {
    //     //value optellen (usestate)
    //
    //
    // }

    return (
        <div className={"logo-field"}>
            <img src={Logo2}/>
            <div className={"challenge-card"}>
                <h1 className={"card-header"}>5 minute challenge</h1>
            {easyPickedChallenge !== null &&
            <p id="generate-challenge" className={"card-text"}> {easyPickedChallenge}</p>}
                <hr className={"card-divider"}/>
                <p className={"card-text"}>This is your explanation accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel</p>
                {/*<button onClick={randomGenerate}>generate</button>*/}
                {/*<p id={"challenge-generate-field"}/>*/}
                <br/>
                <IconContext.Provider value={{ className: 'add-to-challenge'}}>
                    <FaEye/>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'icon-challenge'}}>
                    <FiCheckSquare
                    value={10}
                    />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'add-to-challenge'}}>
                    <FaEyeSlash/>
                </IconContext.Provider>

            </div>
        </div>
)}
export default Game10XP;



// let show = myShows[Math.floor(Math.random() * myShows.length)];



// <>
//     <button onClick={console.log(randomGenerate)}>Click here to generate</button>
// </>


// <div className={"logo-field"}>
//     <img src={Logo2}/>
// <div className={"challenge-card"}>
//     <h1 className={"card-header"}>5 minute challenge</h1>
//     <p className={"card-text"}> This is your first challenge test test test nog iets en ik blijf even doortypen want ik moet kunnen zien hoe het eruit ziet. ook kan het dat er soms lange uitleg moet staan, want ze moeten de oefeningen wel kunnen gebrijpen natuurlijk</p>
//     <hr className={"card-divider"}/>
//     <p className={"card-text"}>This is your explanation so this i what you would do if you could just trust me honsetly that would be great thanks im a bitch yeah</p>
// </div>
// </div>