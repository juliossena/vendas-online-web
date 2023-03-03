import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderType } from '../../../shared/types/OrderType';

interface OrderState {
  orders: OrderType[];
  order?: OrderType;
}

const initialState: OrderState = {
  orders: [],
  order: undefined,
};

export const counterSlice = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    setOrdersAction: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
    setOrderAction: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload;
    },
  },
});

export const { setOrdersAction, setOrderAction } = counterSlice.actions;

export default counterSlice.reducer;
