import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './AppLayout';

test('render page', () => {
  render(<MainLayout />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
