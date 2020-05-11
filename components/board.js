import React from 'react'
import Cell from './cell'

export default class Board extends React.Component {
    constructor() {
        super();
        this.handleCellCountChange = this.handleCellCountChange.bind(this);
        this.state = {
            cellCount: "8"
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
            cellRows.push(<div className="row">{cells}</div>);
        }
        return (
            <div>
                <div className="board">
                    {cellRows}
                    <style jsx>{`
                      .board {
                        display: flex;
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
