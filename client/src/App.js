import React from 'react'
import './App.css';
import CharacterSheet from './pages/character.js'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
  <div>
    <Switch>
      <Route exact path ="/">
         <CharacterSheet/>
      </Route>
      <Route exact path = "/signin">

      </Route>
      <Route exact path = "/signup">

      </Route>
      <Route>

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
