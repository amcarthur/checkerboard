import React from 'react'
import Cell from './cell'
import Row from './row';

export default class Board extends React.Component {
    constructor() {
        super();
        this.handleCellCountChange = this.handleCellCountChange.bind(this);
        this.state = {
            cellCount: "8",
            pieceShape: 'circle',
            pieceColor: 'red'
        };
    }

    handleCellCountChange(event) {
        this.setState({
            cellCount: event.target.value
        })
    }

    handlePieceShapeChange(event) {
        this.setState({
            pieceShape: event.target.value
        })
    }

    handlePieceColorChange(event) {
        this.setState({
            pieceColor: event.target.value
        })
    }

    render() {
        // Create a specified amount of cell components
        let cellRows = [];
        for(let i = 0; i < this.state.cellCount; ++i) {
            let cells = [];
            for(let k = 0; k < this.state.cellCount; ++k) {
                cells.push(<Cell key={i.toString() + k.toString()} row={i} />)
            }
            if (i <= 1) {
                // Top two rows
                cellRows.push(<Row isTopRow={true} pieceShape={this.state.pieceShape} pieceColor={this.state.pieceColor}>{cells}</Row>);
            }
            else if (i >= this.state.cellCount - 2) {
                // Bottom two rows
                cellRows.push(<Row isBottomRow={true} pieceShape={this.state.pieceShape} pieceColor={this.state.pieceColor}>{cells}</Row>);
            } else {
                // Rows in-between
                cellRows.push(<Row>{cells}</Row>);
            }
        }
        return (
            <div>
                <div className="board">
                    {cellRows}
                </div>
                <label>
                    Cell Count:
                    <input type="text" value={this.state.cellCount} onChange={this.handleCellCountChange} />
                </label>
                <label>
                    Piece Shape:
                    <select value={this.state.pieceShape} onChange={this.handlePieceShapeChange}>
                        <option value="circle">Circle</option>
                        <option value="square">Square</option>
                        <option value="triangle">Triangle</option>
                    </select>
                </label>
                <label>
                    Piece Color:
                    <select value={this.state.pieceColor} onChange={this.handlePieceColorChange}>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                    </select>
                </label>
            </div>
        );
    }
}
