import { fireEvent, render } from '@testing-library/react';

import InputMoney from '../InputMoney';

export enum InputMoneyTestId {
  INPUT = 'INPUT',
}

describe('test InputMoney', () => {
  it('should render input', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(<InputMoney value={0} onChange={mockOnChange} />);
    const input = getByTestId(InputMoneyTestId.INPUT);

    expect(input).toBeDefined();
  });

  it('should initial value', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(<InputMoney value={0} onChange={mockOnChange} />);
    const input = getByTestId(InputMoneyTestId.INPUT);

    fireEvent.change(input, { target: { value: '0,00' } });

    expect(input).toHaveAttribute('value', '0,00');
  });
});
