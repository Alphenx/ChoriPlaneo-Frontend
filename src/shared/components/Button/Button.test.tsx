import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  jest.fn().mockReset();
});
describe('Button', () => {
  it('renders with default styles', () => {
    render(<Button value="Click me" styles={'filled'} />);
    const button = screen.getByText('Click me');

    expect(button).toHaveStyle(`
      background-color: ButtonFace;
      border: 2px outset buttonface;
      color: ButtonText;
      width: 2.5rem;
      padding: 0.5rem 1rem;
      height: 40px;
      font-size: var(--font-size-s);
      font-family: var(--main-font-bold);
      border-radius: var(--radius-l);
    `);
  });

  it('renders with outlined styles', () => {
    render(<Button value="Click me" styles="outlined" />);
    const button = screen.getByText('Click me');

    expect(button).toHaveStyle(`
      background-color: transparent;
      color: ButtonText;
      width: 2.5rem;
      padding: 0.5rem 1rem;
      height: 40px;
      border: 2px outset buttonface;
      font-family: var(--main-font-bold);
      border-radius: var(--radius-l);
    `);
  });
});
