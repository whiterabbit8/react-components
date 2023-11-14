import { ResultData } from './types';

export const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacters = async (
  name: string | null,
  page = 1
): Promise<ResultData> => {
  const searchUrl = name ? `name=${name.trim().replace(' ', '+')}` : '';
  const response = await fetch(`${baseUrl}?page=${page}&${searchUrl}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
};
