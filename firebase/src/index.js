import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';

import App from './App';

function renderApp() {
  render(
    <Theme>
      <GlobalStyles />
      <App />
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
