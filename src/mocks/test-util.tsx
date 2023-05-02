import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { RootState, AppStore, setupStore } from '../app/store';
import { APIStatus, AuthStatus, PlanStatus } from '../shared/models/api-status';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      auth: {
        status: APIStatus.IDLE,
        registerStatus: AuthStatus.NOT_USED,
        loginStatus: AuthStatus.NOT_USED,
        responseMsg: '',
      },
      plans: {
        plans: [],
        plan: {
          _id: '1234',
          title: 'Choriplan',
          description: '',
          creator: {
            name: '',
            email: '',
            profileURL: '',
            savedPlans: [],
          },
          place: '',
          status: 'public',
          date: 'December 17, 1995 03:24:00',
          registeredUsers: [
            { name: '', email: '' },
            { name: '', email: '' },
          ],
        },
        status: APIStatus.IDLE,
        planStatus: PlanStatus.NOT_USED,
        createPlanStatus: PlanStatus.NOT_USED,
        responseMsg: '',
      },
      users: {
        user: {
          name: '',
          email: '',
          profileURL: '',
          friends: [],
          recommendedPlans: [],
          savedPlans: [],
          createdPlans: [],
        },
        status: APIStatus.IDLE,
        responseMsg: '',
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
