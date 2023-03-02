import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderType } from '../../../shared/types/OrderType';

interface OrderState {
  orders: OrderType[];
}

const initialState: OrderState = {
  orders: [],
};

export const counterSlice = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    setOrdersAction: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrdersAction } = counterSlice.actions;

export default counterSlice.reducer;
