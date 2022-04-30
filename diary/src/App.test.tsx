import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {generateYear} from "./services/generateYear";

test('renders learn react link', () => {
  render(<App years={[generateYear(2021)]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
