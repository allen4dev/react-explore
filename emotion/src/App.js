/** @jsx jsx */
// import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background-color: #bada55;
  padding: 0.5rem;
`;

const Title = styled.h1`
  color: hotpink;
`;

function App() {
  return (
    <Wrapper>
      <Title>Emotion</Title>
    </Wrapper>
  );
}

export default App;
