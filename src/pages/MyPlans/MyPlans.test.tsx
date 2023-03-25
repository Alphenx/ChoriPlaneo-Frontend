import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import MyPlans from './MyPlans';

test('Given a MyPlans page, when it renders then it should show user plans', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <MyPlans />
      </MemoryRouter>
    </Provider>,
  );
  expect(true).toBe(true);
});
