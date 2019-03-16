import styled from '@emotion/styled';

// eslint-disable-next-line
export const Button = styled.button`
  background-color: blue;
  border: none;
  color: ${({ badass }) => (badass ? '#bada55' : 'darkgray')};
`;

export const EnhancedButton = styled(Button)(props => ({
  backgroundColor: 'darkred',
  textTransform: 'uppercase',
  fontSize: props.fontSize,
}));

export const GlamorousButton = styled.button(
  {
    fontSize: '12px',
    border: 'none',
    backgroundColor: 'hotpink',
    color: 'white',
  },
  props => ({
    color: props.color,
  }),
);
