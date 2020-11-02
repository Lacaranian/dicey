
import './App.css';
import Die from './components/die.js';
import dice from './dice.json';

function App() {
  return (
    <div className="App">
{dice.map((item)=>(
  <Die sides={item.sides} img={item.img}/> 
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
