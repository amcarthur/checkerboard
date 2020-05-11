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
                      
                      .cellContainer:nth-child(odd) .cell {
                        background: #000;
                        }
                        .cellContainer:nth-child(even) .cell {
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
                      
                      .cellContainer:nth-child(odd) .cell {
                        background: #fff;
                        }
                        .cellContainer:nth-child(even) .cell {
                            background: #000;
                        }
                        
                        
                    `}</style>
            </div>
        );
    }
}