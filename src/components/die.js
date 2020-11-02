import React, { useState } from 'react';

function Die(props) {
    const [die_roll, setDieRoll] = useState("?");

	function doRoll() {
		const raw_roll = Math.random(); // 0 - 1
		// 1 - sides
		let normalized_roll = Math.floor(raw_roll * props.sides) + 1;

		setDieRoll(normalized_roll);
	}
	
	return (
		<div>
			<img src={props.img} width="35" height="35" />
			<button style = {{margin: "10px", padding: "10px", borderRadius: "10px"}} onClick={() => doRoll()}>Roll {props.sides}-Sided Die</button>
			<span style = {{fontSize: 30}}>{die_roll}</span>
		</div>
	);
		
}

export default Die;

