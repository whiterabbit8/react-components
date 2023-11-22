import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

describe('Test ErrorBoundary conponent', () => {
  test('Error page appears when throw an error', () => {
    render(
      <ErrorBoundary>
        <div>Some content</div>
      </ErrorBoundary>
    );

    const throwError = () => {
      throw new Error('Error');
    };

    jest.spyOn(console, 'error').mockImplementation(() => null);
    expect(() => throwError()).toThrow('Error');

    waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeDefined();
      expect(screen.getByRole('img')).toBeDefined();
    });
  });
});
