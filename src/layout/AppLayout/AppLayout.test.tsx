import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import AppLayout from './AppLayout';

test('render page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    </Provider>,
  );
  expect(true).toBe(true);
});
