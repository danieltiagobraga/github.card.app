import { render, screen } from '@testing-library/react';
import App from './app.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/the github cards app/i);
  expect(linkElement).toBeInTheDocument();
});
