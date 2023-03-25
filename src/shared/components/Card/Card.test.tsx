import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { Plan } from '../../../features/plans/plan.model';
import Card from './Card';

describe('Given a Card component', () => {
  const plan: Plan = {
    title: 'Choriplan 1',
    description: 'Description 1',
    place: 'Málaga, Spain',
    status: 'public',
    date: new Date(),
    registeredUsers: [],
    creator: {
      name: 'pepe',
      email: 'pepe@pepe.com',
      profileURL: 'https://user-img.com',
    },
    planImgURL: 'https://plan-img.com',
  };

  const plan2: Plan = {
    title: 'Choriplan 1',
    description: 'Description 1',
    place: 'Málaga, Spain',
    status: 'public',
    date: new Date(),
    registeredUsers: [],
    creator: {
      name: 'pepe',
      email: 'pepe@pepe.com',
    },
    planImgURL: undefined,
  };

  test('When public Card component is rendered, then it should show plan data and public action buttons', async () => {
    render(
      <Provider store={store}>
        <Card plan={plan} cardType={'public'} />
      </Provider>,
    );
    const headingElements = await screen.findAllByRole('heading');
    expect(headingElements).toHaveLength(3);

    const userImgElement = await screen.findByAltText('user-img');
    expect(userImgElement).toBeInTheDocument();

    const imgElement = await screen.findByAltText('plan-img');
    expect(imgElement).toBeInTheDocument();

    const buttonElements = await screen.findAllByRole('button');
    expect(buttonElements).toHaveLength(2);
  });

  test('When my-plans Card component is rendered, then it should show plan dataand private action buttons', async () => {
    render(
      <Provider store={store}>
        <Card plan={plan} cardType={'myplans'} />
      </Provider>,
    );
    const headingElements = await screen.findAllByRole('heading');
    expect(headingElements).toHaveLength(2);

    const userImgElement = await screen.findByTestId('creator-info');
    expect(userImgElement).toHaveStyle('display:none');

    const editShareButtonElements = await screen.findByTestId('edit-share');
    expect(editShareButtonElements).toHaveStyle('display:flex');

    const imgElement = await screen.findByAltText('plan-img');
    expect(imgElement).toBeInTheDocument();

    const buttonElements = await screen.findAllByRole('button');
    expect(buttonElements).toHaveLength(3);
  });

  test('When public Card component is rendered and user dont have img, then it should show default profile img', async () => {
    render(
      <Provider store={store}>
        <Card plan={plan2} cardType={'public'} />
      </Provider>,
    );

    const userImgElement = await screen.findByAltText('user-img');
    expect(userImgElement).toBeInTheDocument();
    expect(userImgElement).toHaveAttribute(
      'src',
      'https://ui-avatars.com/api/?name=PEPE&background=0D8ABC&color=fff',
    );
  });

  test('When public Card component is rendered and plan dont have img, then it should show default img', async () => {
    render(
      <Provider store={store}>
        <Card plan={plan2} cardType={'public'} />
      </Provider>,
    );

    const imgElement = await screen.findByAltText('plan-img');
    expect(imgElement).toHaveAttribute('src', '/assets/imgs/default-img.png');
    expect(imgElement).toBeInTheDocument();
  });
});
