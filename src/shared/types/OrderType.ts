import { UserType } from '../../modules/login/types/UserType';

export interface OrderType {
  id: number;
  date: string;
  userId: number;
  user: UserType;
  amountProducts: number;
}
