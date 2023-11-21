import { HttpResponse, http } from 'msw';
import { baseUrl } from '../../utilities/api';
import { mockResultData } from './mockResultData';

export const handlers = [
  http.get(`${baseUrl}`, () => HttpResponse.json(mockResultData)),
  http.get(`${baseUrl}/1`, () => HttpResponse.json(mockResultData.results[0])),
];
