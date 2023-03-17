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

  rest.post(
    `https://adrian-garcia-final-project-back-202301.onrender.com/auth/login`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'Welcome to ChoriPlaneo!' }),
        );
      }

      return res(
        ctx.status(404),
        ctx.json({
          msg: 'Your password is invalid or this account does not exist.',
        }),
      );
    },
  ),
];
