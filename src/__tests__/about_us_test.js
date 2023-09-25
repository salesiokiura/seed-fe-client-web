import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from '../components/about_us';

test('renders without crashing', () => {
  render(
    <Router>
      <AboutUs />
    </Router>
  );
});

test('displays expected content', () => {
    const { getByText } = render(
      <Router>
        <AboutUs />
      </Router>
    );
  
    expect(getByText('Sustainable Energy Education Districts For Informal Settlements')).toBeInTheDocument();
    expect(getByText('About us')).toBeInTheDocument();
    expect(getByText('The initiative aims to strengthen the resilience of African cities, especially informal settlements.')).toBeInTheDocument();
  });

  test('clicking the "Go Back" button navigates back to the login landing page', () => {
    const { container, history } = render(
      <Router>
        <AboutUs />
      </Router>
    );
  
    const goBackButton = container.querySelector('#back');
  
    fireEvent.click(goBackButton);
  
    expect(history.location.pathname).toBe('/'); 
  });
  