import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import LoginForm from './LoginForm';

describe('Given a login form component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When the user clicks submit button, then it should call a function', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    const submitFn = jest.fn();
    const submitElement = screen.getByRole('button');
    userEvent.click(submitElement, submitFn());
    await waitFor(() => {
      expect(submitFn).toHaveBeenCalled();
    });
  });

  test('When a user tries to login with a valid name, email and password, then he should be registered', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'email@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'mySecurePass');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent('Welcome to ChoriPlaneo!');
    });
  });

  test('When a user tries to log in and user info is incorrect, then he should see an error', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'emailtest.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'mySecurePassss');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent(
        'Your password is invalid or this account does not exist.',
      );
    });
  });
});
