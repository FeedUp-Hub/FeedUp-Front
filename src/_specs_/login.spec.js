import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from '../pages/Auth/Login';

describe('Login component', () => {
  it('should not render login form when token is present', () => {
    const mockCookiesGet = jest.fn().mockReturnValueOnce('some-token');
    Cookies.get = mockCookiesGet;

    render(<Login />);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    expect(screen.queryByText('Bem vindo de volta!')).not.toBeInTheDocument();
  });

  it('should render login form and all input fields when no token is present', () => {
    const mockCookiesGet = jest.fn().mockReturnValueOnce(undefined);
    Cookies.get = mockCookiesGet;

    render(<Login />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText('Bem vindo de volta!')).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');
    const submitButton = screen.getByRole('button', { name: /Login/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
