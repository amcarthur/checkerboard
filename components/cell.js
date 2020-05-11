export default ({ row, children }) => {
    // This could be improved. Code duplication is bad.
    if (row % 2 === 0) {
        return (
            <div className="cell">
                <style jsx>{`
      .cell {
        width: 100px;
        height: 100px;
      }
      
      .cell:nth-child(odd) {
        background: #000;
        }
        .cell:nth-child(even) {
            background: #fff;
        }
    `}</style>
            </div>
        );
    } else {
        return (
            <div className="cell">
                <style jsx>{`
      .cell {
        width: 100px;
        height: 100px;
      }
      
      .cell:nth-child(odd) {
        background: #fff;
        }
        .cell:nth-child(even) {
            background: #000;
        }
    `}</style>
            </div>
        );
    }
}