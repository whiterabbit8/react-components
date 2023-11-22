import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, ResultData } from '../../utilities/types';
import { baseUrl } from '../../utilities/api';
import { setDetailsLoading, setResultsLoading } from '../slice/loadingSlice';

type getCharactersProps = {
  name: string | undefined;
  page: string | null;
};

export const apiSlice = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ResultData, getCharactersProps>({
      query: ({ name, page = 1 }) => {
        const queryParams = name ? `name=${name.trim().replace(' ', '+')}` : '';
        return `/?page=${page}&${queryParams}`;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setResultsLoading(true));
        try {
          await queryFulfilled;
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(setResultsLoading(false));
        }
      },
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id: string) => `/${id}`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setDetailsLoading(true));
        try {
          await queryFulfilled;
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(setDetailsLoading(false));
        }
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = apiSlice;
