import React from 'react';
import { render, screen } from '@testing-library/react';
import Charging_transactions from '../components/charging_transactions'; 

describe('Charging_transactions', () => {
  it('renders without crashing', () => {
    render(<Charging_transactions />);
  });

  it('displays the title "CHARGING TRANSACTIONS"', () => {
    render(<Charging_transactions />);
    const titleElement = screen.getByText('CHARGING TRANSACTIONS');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the current date', () => {
    render(<Charging_transactions />);
    const currentDate = new Date().toLocaleDateString();
    const dateElement = screen.getByText(currentDate);
    expect(dateElement).toBeInTheDocument();
  });

  it('renders multiple transaction details', () => {
    render(<Charging_transactions />);
    // Replace this with more specific tests based on your component structure
    // For example, you can check if certain elements or data are present
    // within the transaction details.
  });

  test('clicking the "Go Back" button navigates back to the home page', () => {
    const { container, history } = render(
      <Router>
        <Charging_transactions />
      </Router>
    );
  
    const goBackButton = container.querySelector('#back');
  
    fireEvent.click(goBackButton);
  
    expect(history.location.pathname).toBe('/home'); 
  });
});
