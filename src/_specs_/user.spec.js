import React from 'react';
import { render, screen } from '@testing-library/react';
import { User } from '../pages/User/User';

jest.mock('../services/api');
jest.mock('js-cookie');

describe('User component (static content)', () => {
  const mockToken = 'some-token';
  const mockUserType = 2;

  beforeEach(() => {
    Cookies.get.mockReturnValue(mockToken);
  });

  it('should render user profile header for leader type', () => {
    render(<User />);

    const welcomeMessage = screen.getByRole('heading', { name: /Bem vindo!/i });
    const userInfoText = screen.getByText(/Aqui você pode ver informações do perfil/i);
    const searchBar = screen.getByRole('textbox', { name: /Buscar Usuário/i });
    const searchIcon = screen.getByRole('button', { name: /search/i });

    expect(welcomeMessage).toBeInTheDocument();
    expect(userInfoText).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();

    expect(searchIcon).not.toBeInTheDocument();
  });

  it('should render user info section', () => {
    render(<User />);

    const userName = screen.getByText(/Nome do Usuário/i);
    const userRole = screen.getByText(/Time de Líder/i); 
    const feedbackSentCount = screen.getByText(/Enviados/i).nextElementSibling;
    const feedbackReceivedCount = screen.getByText(/Recebidos/i).nextElementSibling;
    const nozesCount = screen.getByText(/Nozes/i).nextElementSibling;

    expect(userName).toBeInTheDocument();
    expect(userRole).toBeInTheDocument();
    expect(feedbackSentCount).toBeInTheDocument();
    expect(feedbackReceivedCount).toBeInTheDocument();
    expect(nozesCount).toBeInTheDocument();
  });

  it('should render "Feedbacks Recebidos" title', () => {
    render(<User />);

    const feedbackTitle = screen.getByRole('heading', { name: /Feedbacks Recebidos/i });
    expect(feedbackTitle).toBeInTheDocument();
  });
});
