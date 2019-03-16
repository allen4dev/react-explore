/** @jsx jsx */
// import React from 'react';
import { jsx, css } from '@emotion/core';

const style = css`
  background-color: #bada55;
  padding: 0.5rem;
`;

const titleStyle = css`
  color: hotpink;
`;

function App() {
  return (
    <div css={style}>
      <h1 css={titleStyle}>Emotion</h1>
    </div>
  );
}

export default App;
