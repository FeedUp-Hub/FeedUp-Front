import React from 'react';
import { render, screen } from '@testing-library/react';
import { Forgot } from '../pages/Auth/Forgot';

describe('Forgot component', () => {
  it('should not render forgot password form when token is present', () => {
    const mockCookiesGet = jest.fn().mockReturnValueOnce('some-token');
    Cookies.get = mockCookiesGet;

    render(<Forgot />);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    expect(screen.queryByText('Poxa... Que pena ')).not.toBeInTheDocument();
  });

  it('should render forgot password form and all input fields when no token is present', () => {
    const mockCookiesGet = jest.fn().mockReturnValueOnce(undefined);
    Cookies.get = mockCookiesGet;

    render(<Forgot />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('Poxa... Que pena ')).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Insira seu email para continuarmos:');
    const submitButton = screen.getByRole('button', { name: /Recuperar senha/i });

    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
