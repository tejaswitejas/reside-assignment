import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title';

test('Title Component should be rendered', () => {
  render(<Title />);
  const titleContainer = screen.getByText('Mars');
  expect(titleContainer).toBeDefined();
  const subText = screen.getByTestId('sub-text');
  expect(subText).toBeInTheDocument();
});
