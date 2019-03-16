import React from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.h1`
  color: white;
`;

function Title({ children, ...props }) {
  return (
    <Wrapper {...props} data-testid="title">
      {children}
    </Wrapper>
  );
}

Title.propTypes = {
  children: string.isRequired,
};

export default Title;
