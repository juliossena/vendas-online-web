import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/ProductType';
import { useAppSelector } from '../../hooks';
import { setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer);

  const setProducts = (products: ProductType[]) => {
    dispatch(setProductsAction(products));
  };

  return {
    products,
    setProducts,
  };
};
