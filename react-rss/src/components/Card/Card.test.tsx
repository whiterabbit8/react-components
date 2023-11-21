import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Card from './Card';
import { mockResultData } from '../../test/api/mockResultData';
import { store } from '../../store/store';
import AppRouter from '../AppRouter/AppRouter';
import { server } from '../../test/api/server';
import { baseUrl } from '../../utilities/api';

const character = mockResultData.results[0];

describe('Test Card component', () => {
  test('Card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Card character={character} />
        </Provider>
      </MemoryRouter>
    );

    const displayedImg = screen.getByAltText(character.name);
    expect(displayedImg).toBeInTheDocument();

    const displayedData = [
      character.name,
      character.species,
      character.location.name,
      character.status,
    ];

    displayedData.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('Clicking on a card opens a detailed card component', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    waitFor(() => {
      const card = screen.getByText(character.name);
      expect(card).toBeDefined();
      fireEvent.click(card);
    });

    waitFor(() => {
      expect(screen.getByText(/properties/i)).toBeInTheDocument();
    });
  });

  test('Clicking triggers an additional API call to fetch detailed information', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    const mockRequest = jest.fn();
    server.events.on('request:start', ({ request }) => {
      mockRequest(request.url);
    });

    waitFor(() => {
      const card = screen.getByText(character.name);
      expect(card).toBeDefined();
      fireEvent.click(card);
    });

    waitFor(() => {
      expect(mockRequest).toHaveBeenCalledWith(`${baseUrl}${character.id}`);
    });
  });
});
