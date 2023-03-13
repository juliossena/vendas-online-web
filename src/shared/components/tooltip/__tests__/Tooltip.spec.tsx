import { render } from '@testing-library/react';

import Tooltip from '../Tooltip';

export enum TooltipTestIds {
  CONTAINER_TOOLTIP = 'CONTAINER_TOOLTIP',
  INFO_TOOLTIP = 'INFO_TOOLTIP',
  ANTD_TOOLTIP = 'ANTD_TOOLTIP',
}

const mockChildren = 'mockChildren';
const mockTitle = 'mockTitle';

describe('Test Tooltip', () => {
  it('should render success', () => {
    const { getByTestId } = render(<Tooltip>{mockChildren}</Tooltip>);

    expect(getByTestId(TooltipTestIds.CONTAINER_TOOLTIP)).toBeDefined();
  });

  it('should render children', () => {
    const { getByText } = render(<Tooltip>{mockChildren}</Tooltip>);

    expect(getByText(mockChildren)).toBeDefined();
  });

  it('should render antd tooltip', () => {
    const { getByText, queryAllByTestId } = render(
      <Tooltip title={mockTitle}>{mockChildren}</Tooltip>,
    );

    expect(getByText(mockChildren)).toBeDefined();
    expect(queryAllByTestId(TooltipTestIds.CONTAINER_TOOLTIP).length).toEqual(0);
  });
});
