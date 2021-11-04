import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginAdminError, loginAdminSuccess } from '../features/adminSlice';

const baseUrl = 'http://localhost:4000/admin/';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          const { token } = response.data;
          dispatch(loginAdminSuccess({ token }));
        } catch (err) {
          const { message } = err.error.data;
          dispatch(loginAdminError({ message }));
        }
      },
    }),
  }),
});

export const { useLoginAdminMutation } = adminApi;
