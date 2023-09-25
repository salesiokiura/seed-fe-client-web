import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ForgotPassword from '../components/forgot_password';

describe('ForgotPassword', () => {
  it('renders without crashing', () => {
    render(<ForgotPassword />);
    // You can add more specific tests here if needed
  });

  it('displays the "Forgot Password?" heading', () => {
    render(<ForgotPassword />);
    const headingElement = screen.getByText('Forgot Password ?');
    expect(headingElement).toBeInTheDocument();
  });

  it('displays an email input field', () => {
    render(<ForgotPassword />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    expect(emailInput).toBeInTheDocument();
  });

  it('displays a "Send Code" button', () => {
    render(<ForgotPassword />);
    const sendCodeButton = screen.getByText('Send Code');
    expect(sendCodeButton).toBeInTheDocument();
  });

  it('displays a "Sign In" link', () => {
    render(<ForgotPassword />);
    const signInLink = screen.getByText('Sign In');
    expect(signInLink).toBeInTheDocument();
  });

  it('displays a "Sign Up" link', () => {
    render(<ForgotPassword />);
    const signUpLink = screen.getByText('Sign Up');
    expect(signUpLink).toBeInTheDocument();
  });

  it('shows an error message for an invalid email', () => {
    render(<ForgotPassword />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const sendCodeButton = screen.getByText('Send Code');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(sendCodeButton);

    const emailError = screen.getByText('Please enter a valid email address.');
    expect(emailError).toBeInTheDocument();
  });

  it('displays the password reset form after clicking "Send Code"', () => {
    render(<ForgotPassword />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const sendCodeButton = screen.getByText('Send Code');
    const codeInput = screen.queryByPlaceholderText('Enter Verification Code');
    const newPasswordInput = screen.queryByPlaceholderText('Enter your new password');
    const confirmPasswordInput = screen.queryByPlaceholderText('Confirm your new password');
    const updatePasswordButton = screen.queryByText('Update Password');

    fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
    fireEvent.click(sendCodeButton);

    expect(codeInput).toBeInTheDocument();
    expect(newPasswordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(updatePasswordButton).toBeInTheDocument();
  });

  
});
