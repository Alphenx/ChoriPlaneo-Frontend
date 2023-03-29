import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { Plan } from '../../../features/plans/plan.model';
import Card from './Card';

describe('Given a Card component', () => {
  const plan: Plan = {
    _id: '12314',
    title: 'Choriplan 1',
    description: 'Description 1',
    place: 'Málaga, Spain',
    status: 'public',
    date: 'December 25, 1995 23:15:30',
    registeredUsers: [],
    creator: {
      name: 'pepe',
      email: 'pepe@pepe.com',
      profileURL: 'https://user-img.com',
    },
    planImgURL: 'https://plan-img.com',
  };

  const plan2: Plan = {
    _id: '12314',
    title: 'Choriplan 1',
    description: 'Description 1',
    place: 'Málaga, Spain',
    date: 'December 25, 1995 23:15:30',
    registeredUsers: [],
    creator: {
      name: 'pepe',
      email: 'pepe@pepe.com',
    },
    planImgURL: undefined,
    status: undefined,
  };

  test('When public Card component is rendered, then it should show plan data and public action buttons', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card plan={plan} cardType={'public'} />
        </MemoryRouter>
      </Provider>,
    );
    const headingElements = await screen.findAllByRole('heading');
    expect(headingElements).toHaveLength(2);

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
        <MemoryRouter>
          <Card plan={plan} cardType={'myplans'} />
        </MemoryRouter>
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
        <MemoryRouter>
          <Card plan={plan2} cardType={'public'} />
        </MemoryRouter>
      </Provider>,
    );

    const userImgElement = await screen.findByAltText('user-img');
    expect(userImgElement).toBeInTheDocument();
    expect(userImgElement).toHaveAttribute(
      'src',
      'https://api.dicebear.com/5.x/thumbs/svg?seed=pepe&scale=70',
    );
  });

  test('When the user wants to go to plan detail and clicks img, then it should dispatch save action', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card plan={plan2} cardType={'public'} detail={true} />
        </MemoryRouter>
      </Provider>,
    );
  });

  test('When public Card component is rendered and plan dont have img, then it should show default img', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card plan={plan2} cardType={'public'} />
        </MemoryRouter>
      </Provider>,
    );

    const imgElement = await screen.findByAltText('plan-img');
    expect(imgElement).toHaveAttribute('src', '/assets/imgs/default-img.png');
    expect(imgElement).toBeInTheDocument();
  });

  test('When the user wants to save a plan and clicks save, then it should dispatch save action', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card plan={plan2} cardType={'public'} />
        </MemoryRouter>
      </Provider>,
    );

    const saveFn = jest.fn();

    const buttonElement = await screen.findByText(/Save/);
    await fireEvent.click(buttonElement, saveFn());

    expect(buttonElement).toBeInTheDocument();
    expect(saveFn).toHaveBeenCalled();
  });
});

describe('Card component', () => {
  test('clicking Save button dispatches savePlanByIdAsync action', () => {
    const plan: Plan = {
      _id: '12314',
      title: 'Choriplan 1',
      description: 'Description 1',
      place: 'Málaga, Spain',
      status: 'public',
      date: 'December 25, 1995 23:15:30',
      registeredUsers: [],
      creator: {
        name: 'pepe',
        email: 'pepe@pepe.com',
        profileURL: 'https://user-img.com',
      },
      planImgURL: 'https://plan-img.com',
    };
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card plan={plan} cardType={'public'} />
        </MemoryRouter>
      </Provider>,
    );

    const dispatchMock = jest.fn();
    const saveBtn = screen.getByText(/Save/);
    fireEvent.click(saveBtn, dispatchMock());

    expect(dispatchMock).toHaveBeenCalled();
  });
});
