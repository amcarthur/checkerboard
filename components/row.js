import Cell from './cell';
import Piece from './piece';
import React from "react";

export default ({ isTopRow, isBottomRow, pieceShape, pieceColor, children }) => {
  if (isTopRow === "true" || isBottomRow === "true") {
    return (
        <div className="row">
          {children.map(c => <div className="cellWithPiece">
            {c}
          <Piece shape={pieceShape} color={pieceColor}/>

          </div>)}

            <style jsx>{`
                      .cellWithPiece {
                      position: relative;
                      }
                      
                      .row {
                      display: flex;
                      }
                      
                    `}</style>
        </div>
    );
  } else {
    return (
        <div className="row">
            <style jsx>{`
                      .board {
                        display: flex;
                      }
                      
                      .row {
                        display: flex;
                      }
                    `}</style>
          {children}
        </div>
    );
  }
};