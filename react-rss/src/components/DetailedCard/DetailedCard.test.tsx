import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import AppRouter from '../AppRouter/AppRouter';
import { mockCharacter, mockResultData } from '../../test/api/mockResultData';

describe('Test Detailed Card component', () => {
  test('A loading indicator is displayed while fetching data', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    waitFor(() => {
      const card = screen.getByText(mockResultData.results[0].name);
      expect(card).toBeDefined();
      fireEvent.click(card);
    });

    waitFor(() => {
      expect(screen.getByAltText('loader')).toBeInTheDocument();
    });
  });

  test('Detailed card component correctly displays the detailed card data', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/?page=1&id=265']}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    const displayedInfo = [
      mockCharacter.name,
      mockCharacter.status,
      mockCharacter.species,
      mockCharacter.gender,
      mockCharacter.origin.name,
      mockCharacter.location.name,
    ];

    waitFor(() => {
      const details = container.querySelector('.details');
      expect(details).toBeInTheDocument();
      expect(screen.getByAltText(mockCharacter.name)).toBeInTheDocument();
      displayedInfo.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  test('Clicking the close button hides the component', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/?page=1&id=265']}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    waitFor(() => {
      const closeBtn = screen.getByText(/close/i);
      expect(closeBtn).toBeDefined();
      fireEvent.click(closeBtn);
    });

    waitFor(() => {
      const details = container.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });
});
