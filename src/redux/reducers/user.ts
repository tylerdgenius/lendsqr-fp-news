import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {InitialUserState, User} from '../../types';

const initialState: InitialUserState = {
  user: {
    email: '',
    id: 0,
    pictureUrl: '',
    username: '',
  },
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => ({
      ...state,
      user: action.payload,
    }),
    clearUser: state => ({
      ...state,
      user: initialState.user,
    }),
  },
});

export const {clearUser, updateUser} = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
