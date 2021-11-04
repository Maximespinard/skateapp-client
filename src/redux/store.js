import { configureStore } from '@reduxjs/toolkit';

import {adminApi} from './services/adminApi';
import adminSlice from './features/adminSlice';

export default configureStore({
  reducer: {
    admin: adminSlice,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
