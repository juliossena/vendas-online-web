import { UserType } from '../../modules/login/types/UserType';
import { AddressType } from './AddressType';
import { PaymentType } from './PaymentType';
import { ProductType } from './ProductType';

export interface OrderType {
  id: number;
  date: string;
  userId: number;
  user: UserType;
  amountProducts: number;
  payment?: PaymentType;
  address?: AddressType;
  ordersProduct?: ProductType[];
}
