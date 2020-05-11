import React from 'react'
import Cell from './cell'
import Row from './row';

export default class Board extends React.Component {
    constructor() {
        super();
        this.handleCellCountChange = this.handleCellCountChange.bind(this);
        this.state = {
            cellCount: "8",
            topTwoRowsShape: 'circle',
            topTwoRowsColor: 'red',
            bottomTwoRowsShape: 'circle',
            bottomTwoRowsColor: 'black'
        };
    }

    handleCellCountChange(event) {
        this.setState({
            cellCount: event.target.value
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
                cellRows.push(<Row isTopRow="true" pieceShape={this.state.topTwoRowsShape} pieceColor={this.state.topTwoRowsColor}>{cells}</Row>);
            }
            else if (i >= this.state.cellCount - 1) {
                // Bottom two rows
                cellRows.push(<Row isBottomRow="true" pieceShape={this.state.bottomTwoRowsShape} pieceColor={this.state.bottomTwoRowsColor}>{cells}</Row>);
            } else {
                // Rows in-between
                cellRows.push(<Row>{cells}</Row>);
            }
        }
        return (
            <div>
                <div className="board">
                    {cellRows}
                    <style jsx>{`
                      .board {
                        display: flex;
                      }
                      
                      .cellWithPiece {
                        position: relative;
                      }
                    `}</style>
                </div>
                <label>
                    Cell Count:
                    <input type="text" value={this.state.cellCount} onChange={this.handleCellCountChange} />
                </label>
            </div>
        );
    }
}
