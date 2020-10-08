import React, { useState } from "react";
import Logo2 from '../Logo2.png'
import { Link} from "react-router-dom";
import './Game.scss';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <img src={Logo2}/>
        <div id="sign-up-form">
            <label htmlFor={"Login"}>
                <fieldset>
                    <input
                        type={"text"}
                        placeholder={"Email"}
                        name={"email"}
                        id={"email"}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                    <input
                        type={"password"}
                        placeholder={"Password"}
                        name={"password"}
                        id={"password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}/>
                    <button className={'signUpButton'}>LOG IN</button>
                    <p>Don't have an account yet? <Link to={"/sign-up"}>SIGN UP HERE</Link></p>
                </fieldset>
            </label>
        </div>
            </>
    )
}


export default Login;

