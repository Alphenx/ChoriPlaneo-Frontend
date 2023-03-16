import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { server } from '../../mocks/server';
import RegisterForm from './RegisterForm';
import userEvent from '@testing-library/user-event';
import { store } from '../../app/store';

describe('Given a register form component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When the component is rendered, then it should show 4 inputs', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );

    const inputElements = await screen.findAllByRole('complementary');

    expect(inputElements.length).toEqual(4);
  });

  test('When the user clicks submit button, then it should call a function', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );
    const submitFn = jest.fn();
    const submitElement = screen.getByRole('button');
    userEvent.click(submitElement, submitFn());
    await waitFor(() => {
      expect(submitFn).toHaveBeenCalled();
    });
  });

  test('When a user tries to register with a valid name, email and password, then he should be registered', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );

    const name = screen.getByLabelText('Name:');
    await userEvent.type(name, 'Adrian');
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'email@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'mySecurePass');
    const repeatPassword = screen.getByLabelText('Repeat password:');
    await userEvent.type(repeatPassword, 'mySecurePass');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent(
        'Your account has been successfully created',
      );
    });
  });

  test('When a user tries to register and account already exits, then he should see an error', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );

    const name = screen.getByLabelText('Name:');
    await userEvent.type(name, 'Adrian');
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'registeredEmail@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'mySecurePass');
    const repeatPassword = screen.getByLabelText('Repeat password:');
    await userEvent.type(repeatPassword, 'mySecurePass');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent('User is already registered in app');
    });
  });

  test('When there is an error while registering, then the user should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );

    const name = screen.getByLabelText('Name:');
    await userEvent.type(name, 'Adrian');
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'error@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'mySecurePass');
    const repeatPassword = screen.getByLabelText('Repeat password:');
    await userEvent.type(repeatPassword, 'mySecurePass');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent('User is already registered in app');
    });
  });

  test('When passwords does not match, then the password input should be red', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );

    const name = screen.getByLabelText('Name:');
    await userEvent.type(name, 'Adrian');
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'error@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'mySecurePass');
    const repeatPassword = screen.getByLabelText('Repeat password:');
    await userEvent.type(repeatPassword, 'myNotSecurePass');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByTestId('passwordID');
      expect(message).toHaveClass('notMatch');
    });
  });
});
