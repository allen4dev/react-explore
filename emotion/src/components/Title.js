/** @jsx jsx */
import React from 'react'; // eslint-disable-line
import { string } from 'prop-types';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Wrapper = styled.h1`
  color: white;
`;

function Title({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

Title.propTypes = {
  children: string.isRequired,
};

export default Title;
