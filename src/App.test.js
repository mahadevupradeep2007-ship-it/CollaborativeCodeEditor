import { render, screen } from '@testing-library/react';
import App from './App';

test('renders join button', () => {
  render(<App />);
  
  const joinButton = screen.getByText(/join/i);

  expect(joinButton).toBeInTheDocument();
});