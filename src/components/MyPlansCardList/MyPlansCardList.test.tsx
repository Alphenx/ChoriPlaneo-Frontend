import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import MyPlansCardList from './MyPlansCardList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('When component loads and API responds with error', () => {
  test('Then it should show loading and after response should render the error message', async () => {
    server.use(...errorHandlers);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MyPlansCardList />
        </MemoryRouter>
      </Provider>,
    );
    const loadingElement = await screen.findByRole('img');
    expect(loadingElement).toHaveAttribute('alt', 'Loading...');

    await waitFor(() => {
      const errorMessage = screen.getByText('Error. Plans not found.');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});

describe('Given a MyPlansCardList Component', () => {
  describe('When component loads and API responds with all plans', () => {
    test('Then it should show loading and after response should render the list', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <MyPlansCardList />
          </MemoryRouter>
        </Provider>,
      );
      sessionStorage.setItem(
        'acessToken',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWY0ZjE3NmQ5M2I2NmY2OGY1ODkxMSIsImlhdCI6MTY3OTc3MzQ4MX0.Ug4j4t3FqeU9ClGfe8OvCw6wkHAXkoDdg7WIUCrVlU8',
      );
      const loadingElement = await screen.findByRole('img');
      expect(loadingElement).toHaveAttribute('alt', 'Loading...');

      await waitFor(() => {
        const items = screen.getByTestId('listitem');
        expect(items).toBeInTheDocument();
      });
    });
  });
});
