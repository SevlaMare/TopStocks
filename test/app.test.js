/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
/* eslint-enable no-unused-vars */

import App from '../src/App';

describe('Start app', () => {
  it('Routes, provider and entry points are correcly setup', () => {
    render(<App />);
  });
});
