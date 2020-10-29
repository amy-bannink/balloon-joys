import React, {useState, useEffect}from 'react';
import AuthService from "./AuthService";
import UserService from "./UserService";

const UserDetails = () => {

    const currentUser = AuthService.getCurrentUser();
    const [user, setUser] = useState({});

    const getUser = (userId) => {
        UserService.get(userId).then(response => {
            if(response.data != null) {
                setUser({
                    username: response.data.username,
                    email: response.data.email,
                    firstName: response.data.profile.firstName,
                    lastName: response.data.profile.lastName
                });
            }
        }).catch((error) => { // Else error
            console.error("Error - "+error)
        })
    }

    useEffect(() => {
        const userId = AuthService.getCurrentUser().id;
        if(userId) {
            getUser(userId);
        }
    }, [])

return (
    <div>
        {/*<h4>*/}
        {/*    Hello <strong>{user.firstName && user.lastName ? user.firstName + " " + user.lastName : <Link to="/profile-details">what is your name?</Link>}</strong>*/}
        {/*</h4>*/}
        <p>
            <strong>Username:</strong>{" "}
            {currentUser.username}
        </p>
        <p>
            <strong>Email:</strong>{" "}
            {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
            {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
    </div>
    )
}

export default UserDetails;