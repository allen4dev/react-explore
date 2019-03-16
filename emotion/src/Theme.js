import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    primary: '#bada55',
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
