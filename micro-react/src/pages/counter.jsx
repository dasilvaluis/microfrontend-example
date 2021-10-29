import React, { useState } from 'react';
import { triggerEvent } from '../utils/events';

const initialCount = 0;
const buttonStep = 1;

export default function Counter() {
  const [ count, setCount ] = useState(initialCount);

  function handleCountChange(step, count) {    
    triggerEvent('countChange', { step, count })
  }

  function increaseCountBy(step) {
    return () => {
      setCount((prev) => {
        const result = prev + step;

        handleCountChange(step, result)

        return prev + step;
      });
      
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
