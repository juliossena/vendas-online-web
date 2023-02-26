import { render } from '@testing-library/react';

import Button from '../Button';

describe('Test Button', () => {
  it('teste render', () => {
    render(<Button />);
    expect(1).toBe(1);
  });
});
