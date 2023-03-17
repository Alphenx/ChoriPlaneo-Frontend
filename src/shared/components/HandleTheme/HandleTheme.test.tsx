import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import HandleTheme from './HandleTheme';

describe('Given a HandleTheme component', () => {
  test('When the component is rendered, then it should show the switch', () => {
    render(
      <Provider store={store}>
        <HandleTheme />
      </Provider>,
    );

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('When the checkbox is clicked, then it should show change app theme', () => {
    render(
      <Provider store={store}>
        <HandleTheme />
      </Provider>,
    );

    const changeTheme = jest.fn();

    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement, changeTheme());
    expect(checkboxElement).toHaveClass('dark');
    fireEvent.click(checkboxElement, changeTheme());
    expect(checkboxElement).toHaveClass('light');
    expect(changeTheme).toHaveBeenCalledTimes(2);
  });
});
