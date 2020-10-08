import React, {useState} from "react";
import "./Game.scss";
import Logo2 from "../Logo2.png";

function Game10XP() {
    const [challenges, setChallenges] = useState(["challenge 1", "challenge 1","challenge 2", "challenge 3", "challenge 4", "challenge 5", "challenge 6", "challenge 7", "challenge 8", "challenge 9", "challenge 10",])
    const [pickedChallenge, setPickedChallenge] = useState(null);
    const randomGenerate = () => {
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        setPickedChallenge(randomChallenge);
    };

    return (
        <div className={"logo-field"}>
            <img src={Logo2}/>
            <div className={"challenge-card"}>
                <h1 className={"card-header"}>5 minute challenge</h1>
            {pickedChallenge !== null &&
            <p className={"card-text"}> {pickedChallenge}</p>}
                <hr className={"card-divider"}/>
                <p className={"card-text"}>This is your explanation accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel</p>
                <button onClick={randomGenerate}>generate</button>
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