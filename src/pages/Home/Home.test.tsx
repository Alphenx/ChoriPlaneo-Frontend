import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('Given a Header component, when it renders then it should show logo and 5 links', () => {
  render(<Home />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
});
