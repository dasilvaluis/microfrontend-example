import React, { useState } from 'react';

const initialCount = 0;
const buttonStep = 1;

export default function Counter() {
  const [ count, setCount ] = useState(initialCount);

  function increaseCountBy(step) {
    return () => {
      setCount((prev) => prev + step);
    };
  }

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <div>
        <span>{ `Count: ${ count }` }</span>
        <button onClick={ increaseCountBy(-buttonStep) }>
          -
        </button>
        <button onClick={ increaseCountBy(buttonStep) }>
          +
        </button>
      </div>
    </div>
  );
}
