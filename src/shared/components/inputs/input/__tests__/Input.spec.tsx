import { render, screen } from '@testing-library/react';

import { InputTestIdEnum } from '../enum/inputTestIdEnum';
import Input from '../Input';

const TEST_ID = 'TEST_ID_INPUT';
const TITLE_MOCK = 'TITLE_MOCK';
const MARGIN = '23px';

describe('Test Input', () => {
  beforeEach(() => {
    render(<Input data-testid={TEST_ID} margin={MARGIN} />);
  });

  it('should render', () => {
    expect(screen.getByTestId(TEST_ID)).toBeDefined();
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toBeDefined();
  });

  it('should render with margin', () => {
    expect(screen.getByTestId(InputTestIdEnum.BOX_INPUT)).toHaveAttribute(
      'style',
      `margin: ${MARGIN};`,
    );
  });

  it('should hide Title in title undefined', () => {
    const element = screen.queryAllByTestId(InputTestIdEnum.INPUT_TITLE);

    expect(element.length).toEqual(0);
  });

  it('should render title', () => {
    const { queryAllByTestId } = render(
      <Input title={TITLE_MOCK} data-testid={TEST_ID} margin={MARGIN} />,
    );
    const element = queryAllByTestId(InputTestIdEnum.INPUT_TITLE);

    expect(element.length).toEqual(1);
  });

  it('should render title', () => {
    const { getByText } = render(
      <Input title={TITLE_MOCK} data-testid={TEST_ID} margin={MARGIN} />,
    );
    const element = getByText(TITLE_MOCK);

    expect(element).toBeDefined();
  });
});
