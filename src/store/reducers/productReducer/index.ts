import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../../../shared/types/ProductType';

interface ProductState {
  products: ProductType[];
  product?: ProductType;
}

const initialState: ProductState = {
  products: [],
  product: undefined,
};

export const counterSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setProductAction: (state, action: PayloadAction<ProductType | undefined>) => {
      state.product = action.payload;
    },
  },
});

export const { setProductsAction, setProductAction } = counterSlice.actions;

export default counterSlice.reducer;
