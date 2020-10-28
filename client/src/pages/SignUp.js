import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import './SignUp.scss';
import FormField from "./SignUpFormField";
import AuthService from "./AuthService";

function SignUp() {
    // const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [password2, setPassword2] = useState('');
    //
    // const sendData = () => {
    //     try {
    //         axios.post('http://localhost:8081/api/users', {
    //             username: username,
    //             email: email,
    //             password: password
    //         }).then(response => {
    //             alert("Your sign up was successful. Welcome to Joys!");
    //             window.location = 'http://localhost:3000/login'
    //         })
    //     } catch(error){
    //      alert("Something went wrong. Please try again at a later moment")
    //     }
    // };

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .required("Username is a required field")
            .min(6, "Username must be at least 6 characters"),
        email: yup
            .string()
            .email()
            .required("Email is a required field"),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special character"
            ),
        confirmPassword: yup
            .string()
            .required("Please confirm your password")
            .when("password", {
                is: password => (password && password.length > 0 ? true : false),
                then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
            })
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        // onSubmit
    });

    const usernameProps = formik.getFieldProps("username");
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps('password');
    const confirmPasswordProps = formik.getFieldProps('confirmPassword');



    return (
        <div className={"sign-up-form"}>
        <form>
            <div className={"fieldset"}>
            <FormField
                label="Username"
                type="text"
                placeholder="Enter a username"
                {...usernameProps}
            />
            {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ) : null}

            <FormField
                label="Email"
                type="email"
                placeholder="Enter your email"
                {...emailProps}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <FormField
                label="Password"
                type="password"
                placeholder="Enter a password"
                {...passwordProps}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <FormField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                {...confirmPasswordProps}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
            ) : null}

            <button className={"sign-up-button"} type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>

            </div>
        </form>
        </div>

        // <>
        //     <img src={Logo2}/>
        //     <div id="sign-up-form">
        //     <label htmlFor={"Registration"}>
        //         <fieldset>
        //             <input
        //                 type={"text"}
        //                 placeholder={"Username"}
        //                 name={"email"}
        //                 id={"email"}
        //                 value={username}
        //                 onChange={(event) => setUsername(event.target.value)}/>
        //             <input
        //                 type={"text"}
        //                 placeholder={"Email"}
        //                 name={"email"}
        //                 id={"email"}
        //                 value={email}
        //                 onChange={(event) => setEmail(event.target.value)}/>
        //             <br className={"sign-up-br"}/>
        //                 <input
        //                 type={"password"}
        //                 placeholder={"Make a password"}
        //                 name={"password"}
        //                 id={"password"}
        //                 value={password}
        //                 onChange={(event) => setPassword(event.target.value)}/>
        //             <input
        //                 type={"password"}
        //                 placeholder={"Repeat password"}
        //                 name={"password2"}
        //                 id={"password2"}
        //                 value={password2}
        //                 onChange={(event) => setPassword2(event.target.value)}/>
        //
        //             {password !== password2 &&
        //             <p>Make sure your passwords are the same</p>}
        //             {(!email.includes('@') || !email.includes('.') || email.includes(' ')) &&
        //             <p>Incorrect email adress</p>}
        //
        //             <button className={'signUpButton'} onClick={validateData}>SIGN UP</button>
        //             <p>Already have an account? <Link to={"/Login"}>LOG IN HERE</Link></p>
        //         </fieldset>
        //     </label>
        // </div>
        // </>
    );}
export default SignUp;

