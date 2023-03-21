import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('Given a Header component, when it renders then it should show logo and 5 links', () => {
  render(<Header />, { wrapper: MemoryRouter });

  const logoElement = screen.getByRole('img');
  const linksElements = screen.getAllByRole('link');

  expect(logoElement).toBeInTheDocument();
  expect(linksElements.length).toEqual(5);
});
