import { render } from '@testing-library/react';

import Loading from '../Loading';

export enum LoadingTestIds {
  SPIN = 'SPIN',
}

describe('Test loading', () => {
  it('should render success', () => {
    const { getByTestId } = render(<Loading data-testid={LoadingTestIds.SPIN} />);

    expect(getByTestId(LoadingTestIds.SPIN)).toBeDefined();
  });
});
