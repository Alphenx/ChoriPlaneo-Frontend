import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../mocks/test-util';
import CreatePlanForm from './CreatePlanForm';

describe('Given a CreatePlan form component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When the component is rendered, then it should show the form', async () => {
    renderWithProviders(
      <Provider store={store}>
        <CreatePlanForm />
      </Provider>,
    );

    const inputElements = await screen.findAllByRole('complementary');
    expect(inputElements.length).toEqual(4);
  });

  test('When the user clicks create button, then it should call a function', async () => {
    renderWithProviders(
      <Provider store={store}>
        <CreatePlanForm />
      </Provider>,
    );
    const createFn = jest.fn();
    const createElement = screen.getByRole('button');
    userEvent.click(createElement, createFn());
    await waitFor(() => {
      expect(createFn).toHaveBeenCalled();
    });
  });

  test('When a user tries to CreatePlan with a valid title, desciption, place, then a plan will be created', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        msg: 'Your plan has been successfully created',
      }),
    });
    renderWithProviders(
      <Provider store={store}>
        <CreatePlanForm />
      </Provider>,
    );

    const formElement = screen.getByTestId('form');
    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const placeInput = screen.getByPlaceholderText('Place');
    const dateInput = screen.getByPlaceholderText('Date');
    const createPlanButton = screen.getByText('Create plan');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'Test Description' },
    });
    fireEvent.change(placeInput, { target: { value: 'Test Place' } });
    fireEvent.change(dateInput, { target: { value: '2018-06-07T00:00' } });
    fireEvent.click(createPlanButton);

    expect(formElement).toHaveFormValues({
      title: 'Test Title',
      description: 'Test Description',
      place: 'Test Place',
      date: '2018-06-07T00:00',
      status: true,
    });

    await waitFor(() => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent(
        'Your plan has been successfully created',
      );
    });
  });
  test('When a user clicks Create new plan and status is not refresh', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        msg: '',
      }),
    });
    renderWithProviders(
      <Provider store={store}>
        <CreatePlanForm />
      </Provider>,
    );
    const createPlanButton = screen.getByText('Create plan');
    fireEvent.click(createPlanButton);

    await waitFor(() => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent('');
    });
  });

  test('When a user upload a image, then file input and preview img should change', () => {
    const mockCreateObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    mockCreateObjectURL.mockReturnValue('https://mock-url.com');
    renderWithProviders(
      <Provider store={store}>
        <CreatePlanForm />
      </Provider>,
    );
    const fileInput = screen.getByTestId('File');
    const imageElement = screen.getByAltText('Insert your img');

    const file = new File(['test-image'], 'image/png');
    const event = { target: { files: [file] } };
    fireEvent.change(fileInput, event);

    expect(imageElement).toHaveAttribute('src', 'https://mock-url.com');
  });
  test('When a user does not upload a image, then it shoud show default img', () => {
    const mockCreateObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    mockCreateObjectURL.mockReturnValue('');
    renderWithProviders(
      <Provider store={store}>
        <CreatePlanForm />
      </Provider>,
    );
    const fileInput = screen.getByTestId('File');
    const imageElement = screen.getByAltText('Insert your img');
    const event = { target: { files: [] } };
    fireEvent.change(fileInput, event);

    expect(imageElement).toHaveAttribute('src', '/assets/imgs/default-img.png');
  });

  test('When a user tries to create a plan with invalid info, then it should show an error', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({
        msg: 'User not found',
      }),
    });
    renderWithProviders(
      <Provider store={store}>
        <CreatePlanForm />
      </Provider>,
    );

    const formElement = screen.getByTestId('form');
    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const placeInput = screen.getByPlaceholderText('Place');
    const dateInput = screen.getByPlaceholderText('Date');
    const createPlanButton = screen.getByText('Create plan');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'Test Description' },
    });
    fireEvent.change(placeInput, { target: { value: 'Test Place' } });
    fireEvent.change(dateInput, { target: { value: '2018-06-07T00:00' } });
    fireEvent.click(createPlanButton);

    expect(formElement).toHaveFormValues({
      title: 'Test Title',
      description: 'Test Description',
      place: 'Test Place',
      date: '2018-06-07T00:00',
      status: true,
    });

    await waitFor(() => {
      const message = screen.getByRole('heading');
      expect(message).toHaveTextContent('User not found');
    });
  });
});
