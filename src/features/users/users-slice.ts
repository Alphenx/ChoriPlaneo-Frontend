import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '../../shared/models/api-status';
import { UserInfo } from './user.model';
import { deletePlanById, getUserInfo, savePlanById } from './users-api';
import { RootState } from '../../app/store';

const STATE_NAME = 'users';

export interface UsersState {
  user: UserInfo;
  status: APIStatus;
  responseMsg: string | undefined;
}

const INITIAL_STATE: UsersState = {
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
};

export interface UserInfoResponse {
  msg: string;
  users: UserInfo;
}

export const getUserInfoAsync = createAsyncThunk(
  `${STATE_NAME}/getUserInfo`,
  async () => {
    const apiResponse = await getUserInfo();
    const data: UserInfoResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const savePlanByIdAsync = createAsyncThunk(
  `${STATE_NAME}/savePlanById`,
  async (planId: string) => {
    const apiResponse = await savePlanById(planId);
    const data: { msg: string } = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const deletePlanByIdAsync = createAsyncThunk(
  `${STATE_NAME}/deletePlanById`,
  async (planId: string) => {
    const apiResponse = await deletePlanById(planId);
    const data: { msg: string } = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const usersSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    // GET USER INFO
    builder.addCase(getUserInfoAsync.pending, state => {
      state.status = APIStatus.LOADING;
    });
    builder.addCase(
      getUserInfoAsync.fulfilled,
      (state, action: PayloadAction<UserInfoResponse>) => {
        state.status = APIStatus.IDLE;
        state.user = action.payload.users;
      },
    );
    builder.addCase(getUserInfoAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
    });

    // SAVE PLAN BY ID
    builder.addCase(savePlanByIdAsync.pending, state => {
      state.status = APIStatus.LOADING;
    });
    builder.addCase(
      savePlanByIdAsync.fulfilled,
      (state, action: PayloadAction<{ msg: string }>) => {
        state.status = APIStatus.IDLE;
      },
    );
    builder.addCase(savePlanByIdAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
    });

    // DELETE PLAN BY ID
    builder.addCase(deletePlanByIdAsync.pending, state => {
      state.status = APIStatus.LOADING;
    });
    builder.addCase(
      deletePlanByIdAsync.fulfilled,
      (state, action: PayloadAction<{ msg: string }>) => {
        state.status = APIStatus.IDLE;
      },
    );
    builder.addCase(deletePlanByIdAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
    });
  },
});

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
