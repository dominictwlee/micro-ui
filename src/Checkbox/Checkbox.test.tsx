import userEvent from '@testing-library/user-event';
import { render, screen } from '../utils/testUtils';
import Checkbox from './Checkbox';

describe('Checkbox Uncontrolled', () => {
  test('checkbox defaults to unchecked icon', () => {
    render(<Checkbox />);
    expect(screen.getByTestId('checkbox-unchecked-icon')).toBeInTheDocument();
  });

  test('checkbox shows checked icon on change', () => {
    render(<Checkbox data-testid="checkbox" />);
    userEvent.click(screen.getByTestId('checkbox'));
    expect(screen.getByTestId('checkbox-checked-icon')).toBeInTheDocument();
  });
});
