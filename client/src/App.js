import React from 'react'
import './App.css';
import CharacterSheet from './pages/character.js'
import NavTop from './components/navTop.js'
import NoPage from './pages/nopage'
import Profile from './pages/profile'
import Signin from './pages/signin'
import Signup from './pages/signup'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function requireAuth(nextState, replace, next) {
    const loggedIn = false;
    if(!loggedIn()) {
        replace({
            pathname: "/signin",
            // This is where we would've gone, pass this to signin, so signin can redirect there
            state: {nextPathname: nextState.location.pathname}
        });
    }
    next();
}

function App() {
  return (
<BrowserRouter onEnter={requireAuth}>
  <div>
    <NavTop/>
    <Switch>
      <Route exact path ="/">
         <Profile/>
      </Route>

      <Route exact path = "/signin">
        <Signin/>
      </Route>

      <Route exact path = "/signup">
        <Signup/>
      </Route>

      <Route exact path = "/profile/:character">
        <CharacterSheet/>
      </Route>

      <Route>
        <NoPage/>
      </Route>
    </Switch>
  </div>
</BrowserRouter>);
}

{/* <Die sides="4" />
<Die sides="6" />
<Die sides="8" />
<Die sides="10" />
<Die sides="12" />
<Die sides="20" />
<Die sides="100" /> */}
export default App;
