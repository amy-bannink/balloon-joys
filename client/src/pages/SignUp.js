import React, { useState } from "react";
import axios from 'axios';
import Logo2 from '../Logo2.png'
import { Link} from "react-router-dom";
import '../components/default/main.scss'

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const sendData = () => {
        try {
            axios.post('http://localhost:8081/api/users', {
                username: username,
                email: email,
                password: password
            }).then(response => {
                console.log(response);
            })
        } catch(error){
         alert("Something went wrong. Please try again at a later moment")
        }
    };
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    const validateData = () => {
        if(password !== password2 || !password.match(checkPassword)){
            alert('Make sure your passwords are the same. Your password must contain 6 to 15 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
        } else if (!email.includes('@') || email.includes(' ')) {
            alert('Your email adress information is incorrect')
        } else {
            sendData();
        }
    }

    return (
        <>
            <img src={Logo2}/>
            <div id="sign-up-form">
            <label htmlFor={"Registration"}>
                <fieldset>
                    <input
                        type={"text"}
                        placeholder={"Username"}
                        name={"email"}
                        id={"email"}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}/>
                    <input
                        type={"text"}
                        placeholder={"Email"}
                        name={"email"}
                        id={"email"}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                    <br className={"sign-up-br"}/>
                        <input
                        type={"password"}
                        placeholder={"Make a password"}
                        name={"password"}
                        id={"password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}/>
                    <input
                        type={"password"}
                        placeholder={"Repeat password"}
                        name={"password2"}
                        id={"password2"}
                        value={password2}
                        onChange={(event) => setPassword2(event.target.value)}/>

                    {password !== password2 &&
                    <p>Make sure your passwords are the same</p>}
                    {(!email.includes('@') || !email.includes('.') || email.includes(' ')) &&
                    <p>Incorrect email adress</p>}

                    <button className={'signUpButton'} onClick={validateData}>SIGN UP</button>
                    <p>Already have an account? <Link to={"/Login"}>LOG IN HERE</Link></p>
                </fieldset>
            </label>
        </div>
        </>
    )}
export default SignUp;

