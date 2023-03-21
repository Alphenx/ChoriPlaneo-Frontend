export const getAllPlans = async () => {
  const response = await fetch(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans`,
  );

  return response;
};
