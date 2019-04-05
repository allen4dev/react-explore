import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const handleNameChange = e => setValue(e.target.value);

  return (
    <div>
      <p className="total">
        Total count: <span className="amount">{count}</span>
      </p>

      <section className="buttonGroup">
        <button
          type="button"
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </section>

      <section>
        <input
          type="text"
          className="input-text"
          value={value}
          onChange={handleNameChange}
        />
      </section>
    </div>
  );
}

export default Counter;
