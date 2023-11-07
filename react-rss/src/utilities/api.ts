import { ResultData } from './types';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

const getCharacters = async (
  name: string | null,
  page = 1
): Promise<ResultData> => {
  const searchUrl = name ? `name=${name.trim().replace(' ', '+')}` : '';
  const response = await fetch(`${baseUrl}?page=${page}&${searchUrl}`, {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export default getCharacters;
