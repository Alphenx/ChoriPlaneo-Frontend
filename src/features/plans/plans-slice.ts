import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus, PlanStatus } from '../../shared/models/api-status';
import { Plan } from './plan.model';
import { createNewPlan, getAllPlans, getPlanById } from './plans-api';

const STATE_NAME = 'plans';

export interface PlansResponse {
  msg: string;
  plans: Plan[];
}

export interface PlanResponse {
  msg: string;
  plans: Plan;
}

export interface CreatePlanResponse {
  msg: string;
  plans: Plan;
}

export interface PlansState {
  plans: Plan[];
  plan: Plan;
  status: APIStatus;
  planStatus: PlanStatus;
  createPlanStatus: PlanStatus;
  responseMsg: string | undefined;
}

const INITIAL_STATE: PlansState = {
  plans: [],
  plan: {
    _id: '0000',
    title: '404 Plan not found',
    description: '',
    creator: {
      name: '',
      email: '',
      profileURL: '',
      savedPlans: [],
    },
    place: '',
    status: '',
    date: '',
    registeredUsers: [],
  },
  status: APIStatus.IDLE,
  planStatus: PlanStatus.NOT_USED,
  createPlanStatus: PlanStatus.NOT_USED,
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

export const getPlanByIdAsync = createAsyncThunk(
  `${STATE_NAME}/getPlanById`,
  async (planId: string) => {
    const apiResponse = await getPlanById(planId);
    const data: PlanResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const createPlanAsync = createAsyncThunk(
  `${STATE_NAME}/createPlan`,
  async (newPlanForm: HTMLFormElement) => {
    const newPlan = new FormData(newPlanForm);
    const apiResponse = await createNewPlan(newPlan);
    const data: CreatePlanResponse = await apiResponse.json();
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
    // GET ALL PLANS
    builder.addCase(getAllPlansAsync.pending, state => {
      state.status = APIStatus.LOADING;
      state.planStatus = PlanStatus.LOADING;
    });
    builder.addCase(
      getAllPlansAsync.fulfilled,
      (state, action: PayloadAction<PlansResponse>) => {
        state.status = APIStatus.IDLE;
        state.planStatus = PlanStatus.SUCCESS;
        state.plans = action.payload.plans;
        state.responseMsg = action.payload.msg;
      },
    );
    builder.addCase(getAllPlansAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.planStatus = PlanStatus.ERROR;
      state.responseMsg = action.error.message;
    });

    // GET PLAN BY ID
    builder.addCase(getPlanByIdAsync.pending, state => {
      state.status = APIStatus.LOADING;
      state.planStatus = PlanStatus.LOADING;
    });
    builder.addCase(
      getPlanByIdAsync.fulfilled,
      (state, action: PayloadAction<PlanResponse>) => {
        state.status = APIStatus.IDLE;
        state.planStatus = PlanStatus.SUCCESS;
        state.plan = action.payload.plans;
        state.responseMsg = action.payload.msg;
      },
    );
    builder.addCase(getPlanByIdAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.planStatus = PlanStatus.ERROR;
      state.responseMsg = action.error.message;
    });

    // CREATE PLAN
    builder.addCase(createPlanAsync.pending, state => {
      state.status = APIStatus.LOADING;
      state.createPlanStatus = PlanStatus.LOADING;
    });
    builder.addCase(
      createPlanAsync.fulfilled,
      (state, action: PayloadAction<CreatePlanResponse>) => {
        state.status = APIStatus.IDLE;
        state.createPlanStatus = PlanStatus.SUCCESS;
        state.responseMsg = action.payload.msg;
      },
    );
    builder.addCase(createPlanAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.createPlanStatus = PlanStatus.ERROR;
      state.responseMsg = action.error.message;
    });
  },
});

export const selectPlans = (state: RootState) => state.plans;

export default plansSlice.reducer;
