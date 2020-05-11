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
        let cells = [];
        for(let i = 0; i < this.state.cellCount; ++i) {
            cells.push(<Cell />)
        }
        return (
            <div>
                {cells}
                <label>
                    Cell Count:
                    <input type="text" value={this.state.cellCount} onChange={this.handleCellCountChange} />
                </label>
            </div>
        );
    }
}
