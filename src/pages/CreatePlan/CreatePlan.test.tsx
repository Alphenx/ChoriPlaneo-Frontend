import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import CreatePlan from './CreatePlan';

test('Given a CreatePlan page, when it renders then it should show create form', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreatePlan />
      </MemoryRouter>
    </Provider>,
  );
  const formElement = screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
});
