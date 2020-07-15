import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render name', () => {
  const { getAllByText } = render(<App />);
  const nameElement = getAllByText(/Fanjia Kong/i);
  expect(nameElement[0]).toBeInTheDocument();
});
