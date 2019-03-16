import React from 'react';
import styled from '@emotion/styled';

import Title from './components/Title';

const Wrapper = styled.div`
  background-color: #bada55;
  padding: 0.5rem;
`;

function App() {
  return (
    <Wrapper>
      <Title css={{ color: 'blue' }}>Emotion</Title>
    </Wrapper>
  );
}

export default App;
