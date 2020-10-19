/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom'; // assertions
import { render, screen } from '@testing-library/react';
/* eslint-enable no-unused-vars */

import App from '../src/App';
import Dashboard from '../src/containers/Dashboard';


describe('Render', () => {
  it('Display home page', () => {
    render(
      <App>
        <Dashboard />
      </App>
    );

    expect(screen.getByText('EBAY')).toBeInTheDocument();
  });
});