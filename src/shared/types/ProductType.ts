import { CategoryType } from './CategoryType';

export interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  category?: CategoryType;
}
