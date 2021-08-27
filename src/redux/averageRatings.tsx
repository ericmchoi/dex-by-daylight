/* eslint-disable no-param-reassign */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ratingApi = createApi({
  reducerPath: 'ratingApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ['Rating'],
  endpoints: (builder) => ({
    getRatings: builder.query<{ [key: string]: number }, void>({
      query: () => 'ratings',
      providesTags: ['Rating'],
    }),
    addRating: builder.mutation<null, { id: string; rating: number }>({
      query: (body) => ({
        url: 'ratings',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Rating'],
    }),
  }),
});

export default ratingApi;
export const { useGetRatingsQuery, useAddRatingMutation } = ratingApi;
