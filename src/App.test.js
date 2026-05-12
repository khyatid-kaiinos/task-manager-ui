import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// We mock the global fetch function
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, title: 'Test Task', completed: false }]),
    })
  );
});

test('renders task manager title after loading', async () => {
  render(<App />);
  
  // Wait for the "Connecting..." text to disappear and the title to appear
  const titleElement = await screen.findByText(/My Task Manager/i);
  expect(titleElement).toBeInTheDocument();
});