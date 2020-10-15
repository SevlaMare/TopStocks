import React from 'react';
import ReactDOM from 'react-dom';

import { render, screen } from '@testing-library/react';

import App from '../src/components/About';

it('render start app', () => {
  render(<App />)
})
