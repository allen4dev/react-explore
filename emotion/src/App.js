import React from 'react';
import styled from '@emotion/styled';

import Title, { Subtitle } from './components/Title';
import { Button, EnhancedButton, GlamorousButton } from './components/Button';

const Wrapper = styled.div`
  background-color: #bada55;
  padding: 0.5rem;

  ${Button} {
    font-size: 40px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title css={{ color: 'hotpink' }}>Emotion</Title>
      <Subtitle>Emotion</Subtitle>
      <Button badass>Click me</Button>
      <GlamorousButton>So glamorous</GlamorousButton>
      <EnhancedButton badass fontSize="24px">
        Enhanced click
      </EnhancedButton>
    </Wrapper>
  );
}

export default App;
