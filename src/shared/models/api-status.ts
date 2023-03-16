export enum APIStatus {
  LOADING = 'loading',
  ERROR = 'failed',
  IDLE = 'idle',
}

export enum RegisterStatus {
  LOADING = 'loading',
  ERROR = 'failed',
  SUCCESS = 'idle',
  NOT_USED = 'notUsed',
}

export interface APIResponse {
  status: 409 | 201 | 500;
}
