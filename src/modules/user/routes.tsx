import { RouteObject } from 'react-router-dom';

import User from './screens/User';

export enum UserRoutesEnum {
  USER = '/user',
}

export const userScreens: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <User />,
  },
];
