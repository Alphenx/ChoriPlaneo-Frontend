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
        status: APIStatus.IDLE,
        planStatus: PlanStatus.NOT_USED,
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
