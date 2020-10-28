
import './App.css';
import Die from './components/die.js';
let dice = [{sides:4},{sides:6},{sides:8},{sides:10},{sides:12},{sides:20},{sides:100}]

function App() {
  return (
    <div className="App">
{dice.map((item)=>(
  <Die sides = {item.sides}/> 
))}
   
    </div>
  );
}

{/* <Die sides="4" />
<Die sides="6" />
<Die sides="8" />
<Die sides="10" />
<Die sides="12" />
<Die sides="20" />
<Die sides="100" /> */}
export default App;
