import { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';

export enum LogintRoutesEnum {
  LOGIN = '/login',
}

export const loginRoutes: RouteObject[] = [
  {
    path: LogintRoutesEnum.LOGIN,
    element: <LoginScreen />,
  },
];
