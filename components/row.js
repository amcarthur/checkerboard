import Cell from './cell';
import Piece from './piece';
import React from "react";

export default ({ isTopRow, isBottomRow, pieceShape, pieceColor, children }) => {
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
                      
                    `}</style>
        </div>
    );
  } else {
    return (
        <div className="cellContainer">
            <div className="row">
              {children}
                <style jsx>{`
                  
                   .cellContainer {
                  position: relative;
                  }
                  
                  .row {
                    display: flex;
                  }
                `}</style>
            </div>
        </div>
    );
  }
};