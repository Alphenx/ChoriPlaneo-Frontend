import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { planFullFilledResponse } from '../../mocks/plans-mocks';
import { renderWithProviders } from '../../mocks/test-util';
import Detail from './Detail';

describe('Given a Detail page', () => {
  test('When the page is rendered, detail page should show Card info', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(planFullFilledResponse),
    });
    renderWithProviders(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const heading = await screen.findAllByRole('heading');
    expect(heading).toHaveLength(5);
    const items = await screen.findAllByRole('img');
    expect(items).toHaveLength(3);
  });
});

describe('Given a Detail page of undefined', () => {
  test('When the page is rendered and Card does not exits, detail page should show an error', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({ msg: 'Plan not found.' }),
    });
    renderWithProviders(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
    );

    const heading = screen.getAllByRole('heading');
    expect(heading).toHaveLength(5);
    const items = screen.getAllByRole('img');
    expect(items).toHaveLength(3);
  });
});
