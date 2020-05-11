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

        </div>
    );
  } else {
    return (
        <div className="row">
          {children}
        </div>
    );
  }
};