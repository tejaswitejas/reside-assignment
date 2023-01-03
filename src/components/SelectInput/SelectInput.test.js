import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SelectInput } from './SelectInput';
import { AppContext } from '../../state/context/AppContext';
import { INITIAL_STATE } from '../../state/constants/ContextConstants';

const ROVER_OPTIONS = ['curiosity', 'opportunity', 'spirit'];
const renderDateInput = () => {
  return render(
    <AppContext.Provider value={{ data: INITIAL_STATE }}>
      <SelectInput id="rover" label="Rover" name="rover" value="rover" options={ROVER_OPTIONS} />
    </AppContext.Provider>
  );
};

test('SelectInput Component should be rendered', () => {
  renderDateInput();
  const selectInputContainer = screen.getByTestId('select-input-container');
  expect(selectInputContainer).toBeInTheDocument();
  const selectOptions = screen.getByTestId('select-options');
  expect(selectOptions).toHaveValue('curiosity');
});
test('SelectInput Component should have below options', () => {
  renderDateInput();
  const selectOptions = screen.getByTestId('select-options');
  expect(selectOptions).toHaveValue('curiosity');
});
