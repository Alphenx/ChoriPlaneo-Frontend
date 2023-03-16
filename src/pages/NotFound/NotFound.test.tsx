import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('Given a page error 404', () => {
  test('When is rendered, Then it should show all information of the page', () => {
    render(<NotFound />, { wrapper: MemoryRouter });

    const titleElement = screen.getByText('Ops...404');
    const subTitleElement = screen.getByText(`Look like you're lost`);
    const paragraphElement = screen.getByText(
      'Sorry, the page you are looking for is not avaible right now.',
    );
    const linkElement = screen.getByRole('link');

    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
