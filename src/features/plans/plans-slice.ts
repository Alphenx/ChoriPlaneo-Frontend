import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/models/api-status';
import { Plan } from './plan.model';
import { getAllPlans } from './plans-api';

const STATE_NAME = 'plans';

export interface PlansResponse {
  msg: string;
  plans: Plan[];
}

export interface PlansState {
  plans: Plan[];
  status: APIStatus;
  responseMsg: string | undefined;
}

const INITIAL_STATE: PlansState = {
  plans: [],
  status: APIStatus.IDLE,
  responseMsg: '',
};

export const getAllPlansAsync = createAsyncThunk(
  `${STATE_NAME}/getAllPlans`,
  async () => {
    const apiResponse = await getAllPlans();
    const data: PlansResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const plansSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllPlansAsync.pending, state => {
      state.status = APIStatus.LOADING;
    });

    builder.addCase(
      getAllPlansAsync.fulfilled,
      (state, action: PayloadAction<PlansResponse>) => {
        state.status = APIStatus.IDLE;
        state.plans = action.payload.plans;
        state.responseMsg = action.payload.msg;
      },
    );

    builder.addCase(getAllPlansAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.responseMsg = action.error.message;
    });
  },
});

export const selectPlans = (state: RootState) => state.plans;

export default plansSlice.reducer;
