/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom'; // assertions
import { render, screen } from '@testing-library/react';
/* eslint-enable no-unused-vars */

import Stock from '../src/components/Stock';

it('accept valid props to render', () => {
  render(<Stock
    close={123}
    change={1.23}
    link={<a href="#">abc</a>}
  />);
});

it('elements are embed correctly', () => {
  render(<Stock close={123} change={1.23} link={<a href="#">AFK</a>} />);
  expect(screen.getByText('AFK')).toBeInTheDocument();
});
