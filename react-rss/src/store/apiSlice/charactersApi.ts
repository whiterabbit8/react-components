import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Character, ResultData } from '../../utilities/types'

type getCharactersProps = {
  name: string | undefined;
  page: string | null;
}

export const apiSlice = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ResultData, getCharactersProps>({
      query: ({ name, page = 1 }) => {
        const queryParams = name ? `name=${name.trim().replace(' ', '+')}` : '';
        return `/?page=${page}&${queryParams}`
      }
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id: string) => `/${id}`
    })
  })
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery }= apiSlice