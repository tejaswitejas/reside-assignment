import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { DateInput } from './DateInput';
import { AppContext } from '../../state/context/AppContext';
import { INITIAL_STATE } from '../../state/constants/ContextConstants';
import { DATE_TYPE } from '../../constants/AppConstants';
import { ACTIONS } from '../../state/constants/ContextConstants';

const dispatch = jest.fn();
const renderDateInput = (input) => {
  return render(
    <AppContext.Provider value={input}>
      <DateInput dateType={DATE_TYPE.EARTH_DATE} />
    </AppContext.Provider>
  );
};

test('Date Input Component should be rendered with valid Earth Date', () => {
  renderDateInput({ data: INITIAL_STATE, dispatch });
  const dateTypeContainer = screen.getByTestId('date-input-container');
  userEvent.click(dateTypeContainer);
  const earthDateInput = screen.getByTestId('earth-date-input');
  fireEvent.change(earthDateInput, { target: { value: '2015-12-12' } });
  expect(dispatch).toBeCalledWith({ type: ACTIONS.SET_DATE, payload: '2015-12-12' });
});

test('Date Input Component should be rendered with Invalid Earth Date', () => {
  renderDateInput({ data: INITIAL_STATE, dispatch });
  const earthDateInput = screen.getByTestId('earth-date-input');
  fireEvent.change(earthDateInput, { target: { value: true } });
  expect(dispatch).toBeCalledWith({ type: ACTIONS.SET_DATE_INPUT_ERROR, payload: true });
});
