import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/ProductType';
import { useAppSelector } from '../../hooks';
import { setProductAction, setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products, product } = useAppSelector((state) => state.productReducer);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  const setProduct = (currentProduct?: ProductType) => {
    dispatch(setProductAction(currentProduct));
  };

  return {
    product,
    products,
    setProducts,
    setProduct,
  };
};
