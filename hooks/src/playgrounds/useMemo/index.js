import React, { useState, useMemo } from 'react';

function normalize(arr) {
  // ! only for example purposes
  console.log('Calculating expensive function');

  return Object.values(
    arr.reduce((normalized, item) => {
      return {
        ...normalized,
        [item.id]: item,
      };
    }, {}),
  ).reduce(
    (normalized, item) => ({
      ...normalized,
      [item.id]: item,
    }),
    {},
  );
}

function MemoExample() {
  const [arr] = useState([
    { id: 'item1', text: 'Item 1' },
    { id: 'item2', text: 'Item 2' },
    { id: 'item3', text: 'Item 3' },
    { id: 'item4', text: 'Item 4' },
    { id: 'item5', text: 'Item 5' },
  ]);

  const [flag, setFlag] = useState(false);

  const normalized = useMemo(() => normalize(arr), [arr]);

  return (
    <div>
      <div>
        <button type="button" onClick={() => setFlag(!flag)}>
          Flip
        </button>
      </div>

      <p>Normalized value:</p>

      <pre>{JSON.stringify(normalized, undefined, 2)}</pre>
    </div>
  );
}

export default MemoExample;
