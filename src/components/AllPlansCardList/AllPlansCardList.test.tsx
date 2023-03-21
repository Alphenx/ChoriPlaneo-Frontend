import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import AllPlansCardList from './AllPlansCardList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a AllPlansCardList Component', () => {
  describe('When component loads and API responds with all plans', () => {
    test('Then it should show loading and after response should render the list', async () => {
      render(
        <Provider store={store}>
          <AllPlansCardList />
        </Provider>,
      );

      const loadingElement = await screen.findByRole('img');
      expect(loadingElement).toHaveAttribute('alt', 'Loading...');
      await waitFor(() => {
        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(2);
      });
    });
  });
});
describe('When component loads and API responds with error', () => {
  test('Then it should show loading and after response should render the error message', async () => {
    server.use(...errorHandlers);
    render(
      <Provider store={store}>
        <AllPlansCardList />
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
