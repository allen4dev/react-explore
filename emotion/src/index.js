import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Global, css } from '@emotion/core';

import Theme from './Theme';

import App from './App';

function renderApp() {
  render(
    <Theme>
      <Fragment>
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

            body {
              margin: 0;
              padding: 0;
            }
          `}
        />
        <App />
      </Fragment>
    </Theme>,
    document.getElementById('root'),
  );
}

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
