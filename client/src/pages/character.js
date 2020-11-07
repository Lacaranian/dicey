
import React from 'react'
import '../App.css';
import Die from '../components/die.js';
import dice from '../dice.json';
import NavTop from '../components/navTop.js'


function CharacterSheet() {
  return (
    <div className="App">
<NavTop/>
{dice.map((item)=>(
  <Die sides={item.sides} img={item.img}/> 
))}
   
    </div>
  );
}


export default CharacterSheet;