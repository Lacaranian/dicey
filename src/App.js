import logo from './logo.svg';
import './App.css';
import Die from './components/die.js';

function App() {
  return (
    <div className="App">
      <Die sides="4" />
      <Die sides="6" />
      <Die sides="8" />
      <Die sides="10" />
      <Die sides="12" />
      <Die sides="20" />
      <Die sides="100" />
    </div>
  );
}

export default App;
