/* eslint-disable no-unused-expressions */
import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

beforeEach(() => render(<App />));

describe('Click events', () => {
  test('Quote click event', () => {
    expect(screen.queryByText(/Mathematics/)).toBeNull();
    userEvent.click(screen.getByText('Quote'));
    expect(screen.getByText(/Mathematics/)).toBeInTheDocument;
  });

  test('Calculator click event', () => {
    expect(screen.queryByText('Let\'s do some math!')).toBeNull();
    userEvent.click(screen.getByTitle('calculator'));
    expect(screen.getByText('Let\'s do some math!')).toBeInTheDocument;
  });

  test('Home click event', () => {
    userEvent.click(screen.getByText('Home |'));
    expect(screen.queryByText('Welcome to my calculator')).toBeNull();
    userEvent.click(screen.getByText(/Home/));
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument;
  });
});
