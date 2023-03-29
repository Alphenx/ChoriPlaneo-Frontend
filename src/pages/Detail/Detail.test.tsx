import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../mocks/test-util';
import Detail from './Detail';

describe('Given a Detail page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When the page is rendered, detail page should show Card info', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/detail/public/1234']}>
        <Routes>
          <Route path="/detail/:cardType/:planId" element={<Detail />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(async () => {
      const heading = await screen.findByText(/Choriplan 1/);
      expect(heading).toBeInTheDocument();
    });
  });

  test('When the page is rendered, but the plan does not exists then it show an error', async () => {
    server.use(...errorHandlers);
    renderWithProviders(
      <MemoryRouter initialEntries={['/detail/public/1234']}>
        <Routes>
          <Route path="/detail/:cardType/:planId" element={<Detail />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(async () => {
      const errorMsg = await screen.findByText(
        /Ops... this plan don't exists./,
      );
      expect(errorMsg).toBeInTheDocument();
    });
  });

  test('When the page is rendered, but the plan does not exists then it show a error', async () => {
    server.use(...errorHandlers);
    renderWithProviders(
      <MemoryRouter initialEntries={['/detail/']}>
        <Routes>
          <Route path="/detail/" element={<Detail />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(async () => {
      const errorMsg = await screen.findByText(
        /Ops... this plan don't exists./,
      );
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
