import Cell from './cell';
import Piece from './piece';
import React from "react";

export default ({ isTopRow, isBottomRow, pieceShape, pieceColor, children }) => {
  if (isTopRow || isBottomRow) {
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
      console.log('hjreer');
    return (
        <div className="row">
          {children}
            <style jsx>{`
                      
                      .row {
                        display: flex;
                      }
                    `}</style>
        </div>
    );
  }
};