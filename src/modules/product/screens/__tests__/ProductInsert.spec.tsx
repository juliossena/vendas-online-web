import { render } from '@testing-library/react';

import { mockProductInsert } from '../../__mocks__/productInsert.mock';
import { ProductInsertTestIdEnum } from '../../enum/ProductInsertTestIdEnum';
import ProductInsert from '../ProductInsert';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('../../../category/hooks/useCategory', () => ({
  useCategory: () => ({
    categories: [],
  }),
}));

jest.mock('../../hooks/useInsertProduct', () => ({
  useInsertProduct: () => ({
    product: mockProductInsert,
    loading: false,
    disabledButton: false,
    onChangeInput: jest.fn(),
    handleInsertProduct: jest.fn(),
    handleChangeSelect: jest.fn(),
  }),
}));

describe('Test Button', () => {
  it('should render', () => {
    const { getByTestId } = render(<ProductInsert />);

    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_NAME)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_SELECT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER)).toBeDefined();
  });
});
