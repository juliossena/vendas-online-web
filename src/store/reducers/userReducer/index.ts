import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../modules/login/types/UserType';

interface UserState {
  users: UserType[];
}

const initialState: UserState = {
  users: [],
};

export const counterSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersAction } = counterSlice.actions;

export default counterSlice.reducer;
