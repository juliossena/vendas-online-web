import { CityType } from './CityType';

export interface AddressType {
  id: number;
  complement: string;
  numberAddress: number;
  cep: string;
  city?: CityType;
}
