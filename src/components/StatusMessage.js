import React from 'react'

const StatusMessage = ({ winner, current }) => {
        // const message = winner ? `Winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : '0'}`

    const noMovesLeft = current.board.every(el => el !== null);

    return (<div className="status-messages">
            {winner && <>
            Winner is <span className={winner === "X" ? "text-green" : "text-orange"}>{winner}</span>
            </>}
            {!winner  && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : '0'}`}
            {!winner && noMovesLeft && 'X and 0 tied'}
        </div>
    );
};

export default StatusMessage