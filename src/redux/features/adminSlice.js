import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const initialState = {
  isLogin: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginAdminSuccess(state, action) {
      const { token } = action.payload;
      console.log(token);
      return { isLogin: true };
    },
    loginAdminError(state, action) {
      const { message } = action.payload;
      toast.error(message);
    },
  },
});

export const { loginAdminSuccess, loginAdminError } = adminSlice.actions;

export default adminSlice.reducer;
