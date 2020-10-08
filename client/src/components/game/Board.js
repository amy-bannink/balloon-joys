import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick}) => (
    <div className={"board"}>
        {squares.map((square, i)=> (
            <Square key={i} value{"100xp"} onClick={console.log("klik")}/>
        ))}
    </div>
);

export default Board;