import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostFeed } from '../pages/Post/PostFeed';

jest.mock('../../services/api');
jest.mock('js-cookie');

describe('PostFeed component', () => {
  const mockToken = 'some-token';

  beforeEach(() => {
    Cookies.get.mockReturnValue(mockToken);
  });

  it('should render initial post feed content', () => {
    render(<PostFeed />);

    const logo = screen.getByRole('img', { name: /feedup logo/i });
    const postFeedTitle = screen.getByText(/Deixe um feedback para outro colaborador/i);
    const postFeedDescription = screen.getByText(/Espalhe o reconhecimento! Deixe um feedback/i);
    const mentionInput = screen.getByLabelText('Menção');
    const valueSelect = screen.getByLabelText('Valor');
    const feedbackTextarea = screen.getByPlaceholderText('Deixe seu feedback aqui...');
    const submitButton = screen.getByRole('button', { name: /Enviar Feedback/i });

    expect(logo).toBeInTheDocument();
    expect(postFeedTitle).toBeInTheDocument();
    expect(postFeedDescription).toBeInTheDocument();
    expect(mentionInput).toBeInTheDocument();
    expect(valueSelect).toBeInTheDocument();
    expect(feedbackTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should render feedback submitted message after submission', () => {
    render(<PostFeed submitted={true} />);

    const logo = screen.getByRole('img', { name: /feedup logo/i });
    const thanksMessage = screen.getByText(/Obrigado pelo feedback!/i);
    const nozesImage = screen.getByRole('img', { name: /Thanks for feedback/i });

    expect(logo).toBeInTheDocument();
    expect(thanksMessage).toBeInTheDocument();
    expect(nozesImage).toBeInTheDocument();

    expect(screen.queryByText(/Deixe um feedback para outro colaborador/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Espalhe o reconhecimento! Deixe um feedback/i)).not.toBeInTheDocument();
  });
});
