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

export const savePlanById = async (planId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/users/save-plan/${planId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const deletePlanById = async (planId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/users/delete-plan/${planId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};
