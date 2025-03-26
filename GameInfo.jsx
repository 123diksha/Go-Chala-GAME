import React, { useRef } from 'react';

const GameInfo = () => {
  const detailsRef = useRef(null);

  const handleToggle = (event) => {
    if (event.target.open) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="gameInfo" >
        <details onToggle={handleToggle}>
          <summary><b>How to Play!</b></summary>
          <ol>
            <li>Each square starts with a value of <b>5</b>.</li>
            <li>Clicking a square:
              <ol>
                <li>The clicked square’s value becomes <b>0</b>.</li>
                <li>The value is distributed counterclockwise.</li>
              </ol>
            </li>
            <li>If a square reaches <b>0</b>, the next square’s value is added to the player’s score.</li>
            <li><b>Winning:</b> The game ends when only one square has a value of 1, and all others are 0.</li>
          </ol>
        </details>
      </div>
    </div>
  );
};

export default GameInfo;
