import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import Header from './Header';

describe('Given a Header component', () => {
  test('When it renders then it should show logo and 5 links', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const logoElement = screen.getByRole('img');
    const linksElements = screen.getAllByRole('link');

    expect(logoElement).toBeInTheDocument();
    expect(linksElements.length).toEqual(6);
  });

  test('When "Log out" button is clicked, then handleLogout should be called', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
    sessionStorage.setItem('accessToken', 'token');
    const logoutButton = screen.getByTestId('Log out');
    const handleLogout = jest.fn();
    fireEvent.click(logoutButton, handleLogout);
    expect(handleLogout).not.toHaveBeenCalled();
    sessionStorage.clear();
  });

  test('When user is at /home path, then Plans should be highlighted', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const plansLink = screen.getByTestId('Plans icon');
    expect(plansLink).toHaveClass('icon selected');
  });

  test('When user is at /my-plans path, then My plans should be highlighted', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/my-plans']}>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const plansLink = screen.getByTestId('Plans icon');
    expect(plansLink).toHaveClass('icon');
  });
});
