export const plansFullFilledResponse = {
  plans: [
    {
      title: 'Choriplan 1',
      description: 'Description 1',
      creator: {
        name: 'pepe',
        email: 'pepe@pepe.com',
        profileURL: 'https://user-img.com',
      },
      place: 'Málaga, Spain',
      status: true,
      date: '2009-01-01T00:00:00.000Z',
      registeredUsers: [],
    },
    {
      title: 'Choriplan 2',
      description: 'Description 2',
      creator: {
        name: 'pepe',
        email: 'pepe@pepe.com',
        profileURL: 'https://user-img.com',
      },
      place: 'Málaga, Spain',
      status: true,
      date: '2009-01-01T00:00:00.000Z',
      registeredUsers: [],
    },
  ],
};

export const userInfoFullFilledResponse = {
  users: {
    name: 'pepe',
    email: 'pepe@pepe.com',
    profileURL: '',
    friends: [],
    recommendedPlans: [],
    savedPlans: [
      {
        title: 'Choriplan 3',
        description: 'Description 3',
        creator: {
          name: 'pepe',
          email: 'pepe@pepe.com',
          profileURL: 'https://user-img.com',
        },
        place: 'Málaga, Spain',
        status: true,
        date: '2009-01-01T00:00:00.000Z',
        registeredUsers: [],
      },
    ],
    createdPlans: [
      {
        title: 'Choriplan 4',
        description: 'Description 4',
        creator: {
          name: 'pepe',
          email: 'pepe@pepe.com',
          profileURL: 'https://user-img.com',
        },
        place: 'Málaga, Spain',
        status: true,
        date: '2009-01-01T00:00:00.000Z',
        registeredUsers: [],
      },
    ],
  },
};
