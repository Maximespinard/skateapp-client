import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = '/admin/';

const createRequest = (url, method, body) => ({
  url,
  method,
  body,
});

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => createRequest('login', 'POST', data),
      transformResponse: (data) => data.clientId
    }),
    getAdmin: builder.query({
      query: (id) => createRequest(`get/${id}`),
    }),
  }),
});

export const { useLoginAdminMutation, useGetAdminQuery } = adminApi;
