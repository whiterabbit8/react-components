import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';
import { mockResultData } from '../../utilities/mockResultData';

const character = mockResultData.results[0];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResultData),
  })
) as jest.Mock;

describe('Test Card component', () => {
  test('Card component renders the relevant card data', () => {
    const { container } = render(
      <MemoryRouter>
        <Card character={character} />
      </MemoryRouter>
    );

    const displayedImg = container.querySelector(
      '.character__img'
    ) as HTMLImageElement;
    expect(displayedImg.alt).toBe(character.name);
    expect(displayedImg.src).toContain(`avatar/${character.id}`);

    const displayedData = [
      screen.getByText(character.name),
      screen.getByText(character.species),
      screen.getByText(character.location.name),
      screen.getByText(character.status),
    ];

    displayedData.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  //This test need to be fix
  // eslint-disable-next-line
  /*test('Clicking on a card opens a detailed card component', async () => {
    const { container } = render(
      <MemoryRouter>
        <SearchContext.Provider
          value={{
            query: '',
            setQuery: jest.fn(),
            resultData: mockResultData,
            setResultData: jest.fn(),
          }}
        >
          <AppRouter/>
        </SearchContext.Provider>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(container.querySelectorAll('.character')[0]).toBeInTheDocument();
    })

    fireEvent.click(container.querySelectorAll('.character')[0]);

    await waitFor(() => {
      expect(screen.getByText(/properties/i)).toBeInTheDocument();
    })
  })*/

  //This test need to be fix
  // eslint-disable-next-line
  /*test('Clicking triggers an additional API call to fetch detailed information', async () => {
    const { container } = render(
      <BrowserRouter>
        <SearchContext.Provider
          value={{
            query: '',
            setQuery: jest.fn(),
            resultData: mockResultData,
            setResultData: jest.fn(),
          }}
        >
          <AppRouter />
        </SearchContext.Provider>
      </BrowserRouter>
    );

    const fetchSpy = jest.spyOn(global, 'fetch');

    await waitFor(() => {
      expect(container.querySelectorAll('.character')[0]).toBeInTheDocument();
    })

    fireEvent.click(container.querySelectorAll('.character')[0]);

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(5);
    })
  })*/
});
