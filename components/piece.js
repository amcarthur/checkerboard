export default ({ shape, color, children }) => {
    const style = (
        <style jsx>{`
              .piece {
                position: absolute;
                top: 24px;
                left: 25px;
              }
              .piece-circle {
                height: 50px;
              width: 50px;
              border-radius: 50%;
              background: ${color};
              }
              
              .piece-triangle {
                width: 0;
                height: 0;
                border-left: 25px solid transparent;
                border-right: 25px solid transparent;
                border-bottom: 50px solid ${color};
              }
              
              .piece-square {
                height: 50px;
                width: 50px;
                border: 1px solid blue;
                background: ${color}
              }
            `}</style>
    );

    if (shape === "triangle") {
        return (
            <div className="piece piece-triangle">{style}</div>
        );
    } else if (shape === 'square') {
        return (
            <div className="piece piece-square">{style}</div>
        );
    }

    return (
        <div className="piece piece-circle">{style}</div>
    );
}