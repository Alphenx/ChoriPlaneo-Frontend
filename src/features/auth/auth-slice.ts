import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus, AuthStatus } from '../../shared/models/api-status';
import { sendUserForLogIn, sendUserForSignUp } from './auth-api';
import { UserLogin, UserRegister } from './user.model';

const STATE_NAME = 'usersAuth';

export interface AuthResponse {
  msg: string;
  accessToken: string;
}
export interface AuthState {
  status: APIStatus;
  registerStatus: AuthStatus;
  loginStatus: AuthStatus;
  responseMsg: string | undefined;
}

const INITIAL_STATE: AuthState = {
  status: APIStatus.IDLE,
  registerStatus: AuthStatus.NOT_USED,
  loginStatus: AuthStatus.NOT_USED,
  responseMsg: '',
};

export const sendUserForSignUpAsync = createAsyncThunk(
  `${STATE_NAME}/signUpUser`,
  async (userForSignUp: UserRegister) => {
    const apiResponse = await sendUserForSignUp(userForSignUp);
    const data: AuthResponse = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const sendUserForLogInAsync = createAsyncThunk(
  `${STATE_NAME}/logInUser`,
  async (userForLogIn: UserLogin) => {
    const apiResponse = await sendUserForLogIn(userForLogIn);
    const data: AuthResponse = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const authUserSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    // REGISTER
    builder.addCase(sendUserForSignUpAsync.pending, state => {
      state.status = APIStatus.LOADING;
      state.registerStatus = AuthStatus.LOADING;
    });

    builder.addCase(
      sendUserForSignUpAsync.fulfilled,
      (state, action: PayloadAction<AuthResponse>) => {
        state.status = APIStatus.IDLE;
        state.registerStatus = AuthStatus.SUCCESS;
        state.responseMsg = action.payload.msg;
      },
    );

    builder.addCase(sendUserForSignUpAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.registerStatus = AuthStatus.ERROR;
      state.responseMsg = action.error.message;
    });

    // LOGIN'

    builder.addCase(sendUserForLogInAsync.pending, state => {
      state.status = APIStatus.LOADING;
      state.loginStatus = AuthStatus.LOADING;
    });

    builder.addCase(
      sendUserForLogInAsync.fulfilled,
      (state, action: PayloadAction<AuthResponse>) => {
        state.status = APIStatus.IDLE;
        state.loginStatus = AuthStatus.SUCCESS;
        state.responseMsg = action.payload.msg;
        sessionStorage.setItem('accessToken', action.payload.accessToken);
      },
    );

    builder.addCase(sendUserForLogInAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.loginStatus = AuthStatus.ERROR;
      state.responseMsg = action.error.message;
    });
  },
});

export const selectAuthSlice = (state: RootState) => state.auth;

export default authUserSlice.reducer;
