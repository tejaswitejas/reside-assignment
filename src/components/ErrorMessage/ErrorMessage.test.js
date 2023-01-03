import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorMessage } from './ErrorMessage';

test('Background Component should be rendered', () => {
  render(<ErrorMessage errorMessage={'Something went wrong. Please try again later!'} />);
  const errorMessage = screen.getByText(/Something went wrong. Please try again later!/i);
  expect(errorMessage).toBeInTheDocument();
});
