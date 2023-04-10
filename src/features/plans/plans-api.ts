export const getAllPlans = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/plans`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const getPlanById = async (planId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/plans/${planId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const getUserInfo = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/users/info`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const createNewPlan = async (newPlan: FormData) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/plans`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: newPlan,
    },
  );

  return response;
};
