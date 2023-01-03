import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Background } from './Background';

test('Background Component should be rendered', () => {
  render(<Background />);
  const bgContainer = screen.getByTestId('bg-container');
  expect(bgContainer).toBeInTheDocument();
});
