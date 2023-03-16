import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus, RegisterStatus } from '../../shared/models/api-status';
import { sendUserForSignUp } from './auth-api';
import { UserRegister } from './user.model';

const STATE_NAME = 'usersAuth';

export interface AuthResponse {
  msg: string;
  accessToken: string;
}
export interface AuthState {
  status: APIStatus;
  registerStatus: RegisterStatus;
  responseMsg: string | undefined;
}

const INITIAL_STATE: AuthState = {
  status: APIStatus.IDLE,
  registerStatus: RegisterStatus.NOT_USED,
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

export const authUserSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sendUserForSignUpAsync.pending, state => {
      state.status = APIStatus.LOADING;
      state.registerStatus = RegisterStatus.LOADING;
    });

    builder.addCase(
      sendUserForSignUpAsync.fulfilled,
      (state, action: PayloadAction<AuthResponse>) => {
        state.status = APIStatus.IDLE;
        state.registerStatus = RegisterStatus.SUCCESS;
        state.responseMsg = action.payload.msg;
      },
    );

    builder.addCase(sendUserForSignUpAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.registerStatus = RegisterStatus.ERROR;
      state.responseMsg = action.error.message;
    });
  },
});

export const selectAuthSlice = (state: RootState) => state.auth;

export default authUserSlice.reducer;
