import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        ol,
        ul,
        figure,
        p {
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial;
          font-size: 16px;
        }

        li {
          list-style: none;
        }
      `}
    />
  );
}

export default GlobalStyles;
