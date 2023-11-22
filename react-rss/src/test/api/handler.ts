import { HttpResponse, http } from 'msw';
import { baseUrl } from '../../utilities/api';
import { mockCharacter, mockResultData } from './mockResultData';

export const handlers = [
  http.get(`${baseUrl}`, () => HttpResponse.json(mockResultData)),
  http.get(`${baseUrl}/265`, () => HttpResponse.json(mockCharacter)),
];
