import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import Register from './Register';

describe('Given a register page', () => {
  test('When is rendered, then it should show elements in the page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>,
    );

    const homeImgElement = screen.getByAltText('home-img');
    const logoImgElement = screen.getByAltText('logo');

    const formInputsElements = screen.getAllByRole('textbox');

    expect(homeImgElement).toBeInTheDocument();
    expect(logoImgElement).toBeInTheDocument();
    expect(formInputsElements.length).toEqual(2);
  });
});
