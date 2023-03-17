import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Login from './Login';

describe('Given a Login page', () => {
  test('When is rendered, then it should show elements in the page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    const homeImgElement = screen.getByAltText('home-img');
    const logoImgElement = screen.getByAltText('logo');

    const formInputsElement = screen.getByRole('textbox');

    expect(homeImgElement).toBeInTheDocument();
    expect(logoImgElement).toBeInTheDocument();
    expect(formInputsElement).toBeInTheDocument();
  });
});
