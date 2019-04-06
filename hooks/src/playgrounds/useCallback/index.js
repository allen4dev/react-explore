import React, { useState, useCallback } from 'react';

import Calculate from './Calculate';

function Counter() {
  const [count, setCount] = useState(0);
  const [something, setSomething] = useState(false);

  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);

  return (
    <div>
      <div>
        <p>Some value: {something}</p>
        <button type="button" onClick={() => setSomething(!something)}>
          Flip
        </button>
      </div>
      <Calculate count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default Counter;
