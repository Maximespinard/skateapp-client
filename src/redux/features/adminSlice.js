import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logAdmin() {
      return { loading: true };
    },
  },
});

export const { logAdmin } = adminSlice.actions;

export default adminSlice.reducer;