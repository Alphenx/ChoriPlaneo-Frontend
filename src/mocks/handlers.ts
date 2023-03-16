import { rest } from 'msw';

export const handlers = [
  rest.post(
    `https://adrian-garcia-final-project-back-202301.onrender.com/auth/register`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'Your account has been successfully created' }),
        );
      }

      return res(
        ctx.status(409),
        ctx.json({ msg: 'User is already registered in app' }),
      );
    },
  ),
];
