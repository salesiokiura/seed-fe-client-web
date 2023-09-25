import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '../components/contact_us';

describe('ContactUs', () => {
  it('renders without crashing', () => {
    render(<ContactUs />);
  });

  it('displays the title "CONTACT US"', () => {
    render(<ContactUs />);
    const titleElement = screen.getByText('CONTACT US');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays contact information buttons', () => {
    render(<ContactUs />);
    
    const instagramButton = screen.getByText('_seed');
    const facebookButton = screen.getByText('seed@gmail.com');
    const phoneButton = screen.getByText('0723786541');
    const gmailButton = screen.getByText('seed@gmail.com');
    const whatsappButton = screen.getByText('0723786541');

    expect(instagramButton).toBeInTheDocument();
    expect(facebookButton).toBeInTheDocument();
    expect(phoneButton).toBeInTheDocument();
    expect(gmailButton).toBeInTheDocument();
    expect(whatsappButton).toBeInTheDocument();
  });
 
  //Add more functionality when the contacts have been created
  
});
