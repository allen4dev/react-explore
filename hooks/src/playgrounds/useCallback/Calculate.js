import React from 'react';

const Calculate = React.memo(function Calculate({
  count,
  increment,
  decrement,
}) {
  return (
    <section>
      <p className="Calculate">
        Total count: <span className="amount">{count}</span>
      </p>

      <section className="buttonGroup">
        <button type="button" className="btn" onClick={increment}>
          +
        </button>

        <button type="button" className="btn" onClick={decrement}>
          -
        </button>
      </section>
    </section>
  );
});

export default Calculate;
