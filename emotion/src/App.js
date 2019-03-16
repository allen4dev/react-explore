import React from 'react';
import styled from '@emotion/styled';

import Title, { Subtitle } from './components/Title';
import { Button, EnhancedButton, GlamorousButton } from './components/Button';

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 0.5rem;

  ${Button} {
    font-size: 40px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title css={{ color: 'hotpink' }}>Emotion rocks!!!</Title>
      <Subtitle>Emotion</Subtitle>
      <Button badass shadow="black">
        Click me
      </Button>
      <GlamorousButton as="a" href="/">
        So glamorous
      </GlamorousButton>
      <EnhancedButton shadow="blue" badass fontSize="24px">
        Enhanced click
      </EnhancedButton>
    </Wrapper>
  );
}

export default App;
