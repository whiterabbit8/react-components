import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import SearchInput from './SearchInput';

describe('Tests Search component', () => {
  test('Clicking the Search button saves the entered value to the local storage', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchInput />
        </Provider>
      </MemoryRouter>
    );

    const input = screen.getByRole('searchbox');
    const searchBtn = container.querySelector(
      '.search-bar__button'
    ) as HTMLElement;
    const testValue = 'test';

    fireEvent.change(input, { target: { value: testValue } });
    fireEvent.click(searchBtn);

    expect(localStorage.getItem('query')).toBe(testValue);
  });

  test('Component retrieves the value from the local storage upon mounting', () => {
    const testValue = 'testValue';
    localStorage.setItem('query', testValue);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchInput />
        </Provider>
      </MemoryRouter>
    );

    const input = screen.getByRole('searchbox') as HTMLInputElement;

    expect(input.value).toBe(testValue);
  });
});
