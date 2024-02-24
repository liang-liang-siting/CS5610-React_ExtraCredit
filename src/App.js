import React, { useState } from 'react';
import './App.css';

function BoxGrid() {
  const [selectedBoxes, setSelectedBoxes] = useState(Array(9).fill(false));

  const handleClick = (index) => {
    const newSelectedBoxes = [...selectedBoxes];
    newSelectedBoxes[index] = !newSelectedBoxes[index];

    const row = Math.floor(index / 3);
    const col = index % 3;

    const adjacentIndices = [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1]   // right
    ];

    adjacentIndices.forEach(pos => {
      const newRow = row + pos[0];
      const newCol = col + pos[1];
      if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 3) {
        const adjacentIndex = newRow * 3 + newCol;
        newSelectedBoxes[adjacentIndex] = !newSelectedBoxes[adjacentIndex];
      }
    });

    setSelectedBoxes(newSelectedBoxes);
  };

  return (
    <div className="container">
      {selectedBoxes.map((selected, index) => (
        <div
          key={index}
          className={`box ${selected ? 'selected' : ''}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default BoxGrid;
