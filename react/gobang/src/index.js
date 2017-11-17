import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0;i< 9;i++) {

    }
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Square(props) {
    console.log(props);
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(x,y) {
        return (
            <Square key={x+','+y}
                value={this.props.squares[x,y]}
                onClick={() => this.props.onClick(x,y)} />
        );
    }
    renderCol(i) {
        return (
            <div className="board-row">
                {
                    this.props.cols.map((col,i)=>{
                        return this.renderSquare(i);
                    })
                }
            </div>
        );
    }

    render() {
        
        return (
            <div>
                {
                    this.props.rows.map((row,index) => {
                        return (
                            <div className="board-row" key={'row'+index}>
                                {
                                    this.props.cols.map((col,i)=>{
                                        return this.renderSquare(index,i);
                                    })
                                }
                            </div>
                        );
                    })
                }
                
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        const rows = 3, cols = 3;
        this.state = {
            history: [{
                squares: Array(rows*cols).fill(null),
            }],
            rows:Array(rows).fill(null),
            cols:Array(cols).fill(null),
            stepNumber: 0,
            xIsNext: true,
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];

        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber:history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    jumpTo(step){
        var xIsNext = (step % 2) != 0;
        this.setState({
            stepNumber: step,
            xIsNext: xIsNext,
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 'Move #' + move : 'Game start';
            return (
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        
        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                    squares={current.squares}
                    rows = {this.state.rows}
                    cols = {this.state.cols}
                    onClick = {(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
