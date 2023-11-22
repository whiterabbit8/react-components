import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Home from '../Home/Home';
import Oops from './Oops';

describe('Tests 404 Page component', () => {
  test('404 page is displayed when navigating to an invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid_route']}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Oops />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByAltText('404 error')).toBeDefined();
    expect(screen.getByText(/get me home/i)).toBeInTheDocument();
  });
});
