import { render } from '@testing-library/react';

import Select from '../Select';

export enum SelectTestIds {
  CONTAINER = 'CONTAINER',
  SELECT_ANTD = 'SELECT_ANTD',
  TITLE = 'TITLE',
}

describe('Test Select', () => {
  it('should render Select', () => {
    const { getByTestId } = render(<Select />);

    expect(getByTestId(SelectTestIds.CONTAINER)).toBeDefined();
    expect(getByTestId(SelectTestIds.SELECT_ANTD)).toBeDefined();
  });

  it('should not render title if empty', () => {
    const { queryAllByTestId } = render(<Select />);

    expect(queryAllByTestId(SelectTestIds.TITLE).length).toEqual(0);
  });

  it('should render title', () => {
    const mockTitle = 'mockTitle';
    const { queryAllByTestId, getByText } = render(<Select title={mockTitle} />);

    expect(queryAllByTestId(SelectTestIds.TITLE).length).toEqual(1);
    expect(getByText(mockTitle)).toBeDefined();
  });

  it('should render props margin', () => {
    const mockMargin = '43px 53px 523px 85px';
    const { getByTestId } = render(<Select margin={mockMargin} />);

    expect(getByTestId(SelectTestIds.CONTAINER)).toHaveAttribute('style', `margin: ${mockMargin};`);
  });
});
