import React from 'react';
import { render, screen } from '@testing-library/react';
import Culture from '../pages/Culture/';

describe('Culture component', () => {
  it('should render all components', () => {
    render(<Culture />);

    const navbar = screen.getByRole('nav');
    const partnerLogo = screen.getByRole('img', { name: /partner logo/i });
    const cultureDescription = screen.getByText(/cultura de trabalho fidedigna/i);
    const cultureValuesLabel = screen.getByText(/Quais são os comportamentos que compartilhamos?/i);
    const cultureCards = screen.getAllByRole('img', { name: /valor/i }); 

    expect(navbar).toBeInTheDocument();
    expect(partnerLogo).toBeInTheDocument();
    expect(cultureDescription).toBeInTheDocument();
    expect(cultureValuesLabel).toBeInTheDocument();
    expect(cultureCards.length).toBeGreaterThan(0);
  });
});
