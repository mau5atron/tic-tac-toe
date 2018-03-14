import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// makes each squre into a buttons
class Square extends React.Component{
	render(){
		return (
			<button>
				{}
			</button>
		);
	}
}

// creates all the squares for the table
class Board extends React.Component {
	renderSquare(i){
		return <Square />;
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




