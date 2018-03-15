import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// makes each squre into a buttons
class Square extends React.Component{
	// square component now handles state.
	// constructor works the same way as initialize in ruby in terms of passing 
	// in data
	// in this case data will be passed in through 'value'
	// removed contructor from square because it does not handle state anymore

	render(){
		return (
			// setting state upon square click
			<button className="square" onClick={() => this.props.onClick()}>
				{/* passing in value from square value in Board class into square button press */}
				{/*props allows data(values for each square) to be passed in*/}
				{/*state was props, changed to state to pass in data*/}
				{this.props.value}
			</button>
		);
	}
}

// creates all the squares for the table
class Board extends React.Component {
	// new constructor for squares on board
	constructor(props){
		super(props);
		this.state = {
			// array with 9 nulls
			squares: Array(9).fill(null),
		};
	}

	handleClick(i){
		// call slice to copy squares array instead of changing existing array
		// slice copies squares array prior to making changes.
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({squares})
	}

	renderSquare(i){
		// added i value to pass data through square
 		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
	}

	render(){
		const status = 'Next player: X';
		return(
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render(){
		return(
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-infoe">
					<div>{/*status*/}</div>
					<ol>{/*to do items here*/}</ol>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);




