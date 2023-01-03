import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { AppContext } from '../../state/context/AppContext';
import { INITIAL_STATE } from '../../state/constants/ContextConstants';

test('Button Component should be rendered', () => {
  const mockOnClick = jest.fn();
  render(
    <AppContext.Provider value={{ data: INITIAL_STATE }}>
      <Button buttonText="Get Images" onClick={mockOnClick} iconName="images-outline" />
    </AppContext.Provider>
  );
  const buttonEl = screen.getByText(/Get Images/i);
  userEvent.click(buttonEl);
  expect(buttonEl).toBeDefined();
  expect(mockOnClick).toBeCalled();
});
