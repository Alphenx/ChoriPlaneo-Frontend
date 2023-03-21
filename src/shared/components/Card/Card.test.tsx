import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { Plan } from '../../../features/plans/plan.model';
import Card from './Card';

describe('When Card component is rendered', () => {
  const plan: Plan = {
    title: 'Choriplan 1',
    description: 'Description 1',
    place: 'Málaga, Spain',
    status: true,
    date: new Date(),
    registeredUsers: [],
    creatorId: '',
    planImgURL: '',
  };

  test('Then it should show plan data', async () => {
    render(
      <Provider store={store}>
        <Card plan={plan} />
      </Provider>,
    );
    const headingsElement = await screen.findAllByRole('heading');
    expect(headingsElement).toHaveLength(2);

    // const paragraphElement = await screen.findAllByRole('paragraph');
    // expect(paragraphElement).toHaveLength(2);

    const userImgElement = await screen.findByAltText('user-img');
    expect(userImgElement).toBeInTheDocument();

    const imgElement = await screen.findByAltText('plan-img');
    expect(imgElement).toBeInTheDocument();
  });
});
