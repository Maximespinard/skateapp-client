import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  token: '',
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logAdmin() {
      return { loading: true };
    },
    logAdminError(state, action) {
      const { message } = action.payload;
      toast.error(message);
      return { ...action, loading: false };
    },
    logAdminSuccess(state, action) {
      const { token } = action.payload;
      return { token, loading: false, };
    },
  },
});

export const { logAdmin, logAdminError, logAdminSuccess } = adminSlice.actions;

export default adminSlice.reducer;
