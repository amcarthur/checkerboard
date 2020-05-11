import Cell from './cell';
import Piece from './piece';
import React from "react";

export default ({ even, isTopRow, isBottomRow, pieceShape, pieceColor, children }) => {
  if (isTopRow || isBottomRow) {
    return (
        <div className="row">
          {children.map(c => <div className="cellContainer">
            {c}
          <Piece shape={pieceShape} color={pieceColor}/>

          </div>)}

            <style jsx>{`
                      .cellContainer {
                      position: relative;
                      }
                      
                      .row {
                      display: flex;
                      }
                      
                      .cellContainer:nth-child(odd) {
                        background: ${even ? '#000' : '#fff'};
                        }
                        .cellContainer:nth-child(even) {
                            background: ${even ? '#fff' : '#000'};
                        }
                      
                    `}</style>
        </div>
    );
  } else {
    return (
        <div className="cellContainer">
            <div className="row">
                {children.map(c => <div className="cellContainer">
                    {c}

                </div>)}
                <style jsx>{`
                  
                   .cellContainer {
                  position: relative;
                  }
                  
                  .row {
                    display: flex;
                  }
                  
                  .cellContainer:nth-child(odd) {
                        background: ${even ? '#000' : '#fff'};
                        }
                        .cellContainer:nth-child(even) {
                            background: ${even ? '#fff' : '#000'};
                        }
                `}</style>
            </div>
        </div>
    );
  }
};