import { RouteObject } from 'react-router-dom';

import Category from './';
import CategoryInsert from './screens/CategoryInsert';

export enum CategoryRoutesEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
  CATEGORY_EDIT = '/category/:categoryId',
}

export const categoryScreens: RouteObject[] = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <Category />,
  },
  {
    path: CategoryRoutesEnum.CATEGORY_INSERT,
    element: <CategoryInsert />,
  },
  {
    path: CategoryRoutesEnum.CATEGORY_EDIT,
    element: <CategoryInsert />,
  },
];
