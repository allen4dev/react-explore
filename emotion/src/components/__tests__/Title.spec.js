import React from 'react';
import { render } from 'react-testing-library';

import Title from '../Title';

it('should render', () => {
  const { container } = render(<Title>My title</Title>);

  expect(container.firstChild).toMatchSnapshot();
});
