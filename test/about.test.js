import React from 'react';
import ReactDOM from 'react-dom';

import { toBeInTheDocument } from '@testing-library/jest-dom'; // assertions
import { render, screen } from '@testing-library/react';

import App from '../src/components/About';
import Stock from '../src/components/Stock';

it('render start app', () => {
  render(<App></App>)
})

it('accept valid props to render', () => {
  render(<Stock
    close={123}
    change={1.23}
    link={'abc'}
  />)
})

test('elements are embed correctly', () => {
  const checkString = 'AFK';

  render(<Stock close={123} change={1.23} link={checkString} />);
  expect(screen.getByText(checkString)).toBeInTheDocument();
})