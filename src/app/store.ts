import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth-slice';
import plansReducer from '../features/plans/plans-slice';
import usersReducer from '../features/users/users-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plans: plansReducer,
    users: usersReducer,
  },
});
const rootReducer = combineReducers({
  auth: authReducer,
  plans: plansReducer,
  users: usersReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
