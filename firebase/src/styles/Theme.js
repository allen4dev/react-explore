import React, { Fragment } from 'react';
import { oneOfType, arrayOf, element } from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    lightgray: '#f5f5f5',
    gray: '#728f9f',
    blue: '#20b1ea',
    red: '#f55b4f',
    orange: '#ffa724',
    purple: '#9c28b1',
  },
};

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default Theme;
