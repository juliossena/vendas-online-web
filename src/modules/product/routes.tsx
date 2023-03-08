import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';
import ProductInsert from './screens/ProductInsert';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
  PRODUCT_EDIT = '/product/:productId',
}

export const productScreens: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: ProductRoutesEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
  },
  {
    path: ProductRoutesEnum.PRODUCT_EDIT,
    element: <ProductInsert />,
  },
];
