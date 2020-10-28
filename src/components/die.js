import React from 'react';

class Die extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {die_roll: "?"};
    }

	do_roll() {
		const raw_roll = Math.random(); // 0 - 1
		// 1 - sides
		this.setState(state => ({
			die_roll: Math.floor(raw_roll * this.props.sides) + 1
		}));
	}

	render() {
		return (
			<div>
				<button onClick={() => this.do_roll()}>Roll {this.props.sides}-Sided Die</button>
				<span style = {{fontSize: 30}}>{this.state.die_roll}</span>
			</div>
		);
	}	
}

export default Die;