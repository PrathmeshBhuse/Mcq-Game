import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div className="score-container">
      <h2>Your Score</h2>
      <p>
        You scored {score} out of {total}
      </p>
    </div>
  );
};

export default Score;
