import { fireEvent, render } from '@testing-library/react';

import { logout } from '../../../functions/connection/auth';
import { HeaderTestIdEnum } from '../enum/headerTestIdEnum';
import Header from '../Header';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../functions/connection/auth', () => ({
  logout: jest.fn(),
}));

describe('Test Button', () => {
  it('should render', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId(HeaderTestIdEnum.HEADER_CONTAINER)).toBeDefined();
    expect(getByTestId(HeaderTestIdEnum.HEADER_LOGO)).toBeDefined();
  });

  it('should render modal in click logo', () => {
    const { getByTestId, queryAllByTestId } = render(<Header />);

    const logo = getByTestId(HeaderTestIdEnum.HEADER_LOGO);

    expect(queryAllByTestId(HeaderTestIdEnum.HEADER_MODAL).length).toBe(0);

    fireEvent.click(logo);

    expect(queryAllByTestId(HeaderTestIdEnum.HEADER_MODAL).length).toBe(1);
  });

  it('should render modal in click logo an confirm logout', () => {
    const { getByTestId, getByText } = render(<Header />);

    const logo = getByTestId(HeaderTestIdEnum.HEADER_LOGO);
    fireEvent.click(logo);

    const confirmButton = getByText('Sim');

    fireEvent.click(confirmButton);

    expect(logout).toBeCalled();
  });
});
