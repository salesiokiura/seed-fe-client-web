// Import necessary testing libraries and your component
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'; // Add Router for routing-related tests
import Login_landing_page from '../components/login_landing_page';


describe('Login_landing_page', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Login_landing_page />
      </Router>
    );
  });

  it('displays "About us" button', () => {
    render(
      <Router>
        <Login_landing_page />
      </Router>
    );

    const aboutUsButton = screen.getByText('About us');
    expect(aboutUsButton).toBeInTheDocument();
  });

  it('displays "Contact us" button', () => {
    render(
      <Router>
        <Login_landing_page />
      </Router>
    );

    const contactUsButton = screen.getByText('Contact us');
    expect(contactUsButton).toBeInTheDocument();
  });

  it('displays "FAQ" button', () => {
    render(
      <Router>
        <Login_landing_page />
      </Router>
    );

    const contactUsButton = screen.getByText('Contact us');
    expect(contactUsButton).toBeInTheDocument();
  });

  it('displays "Login" button', () => {
    render(
      <Router>
        <Login_landing_page />
      </Router>
    );

    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });

  it('displays "Sign Up" button', () => {
    render(
      <Router>
        <Login_landing_page />
      </Router>
    );

    const signUpButton = screen.getByText('Sign Up');
    expect(signUpButton).toBeInTheDocument();
  });

  it('displays "Location" button', () => {
    render(
      <Router>
        <Login_landing_page />
      </Router>
    );

    const locationButton = screen.getByText('Location');
    expect(locationButton).toBeInTheDocument();
  });

  

  it('clicking the "About us" button navigates to the about_us page', () => {
    const { container } = render(
      <Router>
        <Login_landing_page />
      </Router>
    );

    const aboutUsButton = screen.getByText('About us');
    fireEvent.click(aboutUsButton);

    const contactUsPageContent = screen.getByText('Contact us'); 
    expect(contactUsPageContent).toBeInTheDocument();

    const faqButton = screen.getByText('FAQ');
    fireEvent.click(faqButton);
    
    const loginPageContent = getByText('Login'); 
    expect(loginPageContent).toBeInTheDocument();

    const signupPageContent = getByText('Sign Up'); 
    expect(signupPageContent).toBeInTheDocument();

    const locationPageContent = getByText('LOCATION'); 
    expect(locationPageContent).toBeInTheDocument();
  });


});
