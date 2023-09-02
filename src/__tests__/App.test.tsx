import { render, screen, waitFor } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('should render Counter title', async () => {
    render(<App />);

    waitFor(() => expect(screen.getByText(/Counter/i)).toBeVisible());
  });
  it('should render Spinner title', async () => {
    render(<App />);

    waitFor(() => expect(screen.getByText(/Spinner/i)).toBeVisible());
  });
  it('should render Icons title', async () => {
    render(<App />);

    waitFor(() => expect(screen.getByText(/Icons/i)).toBeVisible());
  });
});
