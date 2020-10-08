import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {
    SignUp,
    Profile,
    Login,
    Game,
    Game10XP,
    Game20XP,
    Game100XP
} from './pages';

import './App.scss';
import '../src/components/menu/Navbar.scss';
import PersistentDrawerLeft from "./components/menu/Navbar";

function App () {

    return (
        <Router>
            <PersistentDrawerLeft/>
                <Switch>
                     <Route exact path={"/sign-up"}>
                         <SignUp/>
                     </Route>
                     <Route exact path={"/profile"}>
                         <Profile/>
                     </Route>
                    <Route exact path={"/login"}>
                        <Login/>
                    </Route>
                    <Route exact path={"/"}>
                        <Game/>
                    </Route>
                    <Route exact path={"/game10xp"}>
                        <Game10XP/>
                    </Route>
                    <Route exact path={"/game20xp"}>
                        <Game20XP/>
                    </Route>
                    <Route exact path={"/game100xp"}>
                        <Game100XP/>
                    </Route>
                </Switch>
        </Router>
     );
 }

export default App;


